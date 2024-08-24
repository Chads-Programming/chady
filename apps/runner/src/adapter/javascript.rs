use super::lang_adapter::{CodeInfo, LangAdapter, RunArgs};
use crate::code_runner::{errors::ExecutionError, executer::CodePathInfo};
use std::{
    fs::{self, File},
    io::Write,
    path::Path,
};

#[derive(Default)]
pub struct JavascriptAdapter;

impl LangAdapter for JavascriptAdapter {
    fn make_run_command(&self, args: RunArgs) -> (String, Vec<String>) {
        let id = args.id;
        let path = args.path;
        let params = args.params;

        let main_js_file = format!("node main.js {params}");
        let code_path = format!("{path}:/code");

        let args = vec![
            "run",
            "--rm",
            "-m",
            "64M",
            "--memory-swap",
            "64M",
            "--name",
            &id,
            "-v",
            &code_path,
            "-w",
            "/code",
            "node:current-alpine3.15",
            "/bin/sh",
            "-c",
            &main_js_file,
        ]
        .into_iter()
        .map(|arg| arg.to_string())
        .collect();

        ("docker".to_string(), args)
    }

    fn setup_environment(
        &self,
        path_info: &CodePathInfo,
        code_info: &CodeInfo,
    ) -> Result<(), ExecutionError> {
        let relative_path = path_info.relative_path.clone();
        let solution_filename = path_info.solution_filename.clone();
        let main_filename = path_info.main_filename.clone();

        let solution_file_path_str: String = format!("{relative_path}/{solution_filename}");
        let main_file_path_str = format!("{relative_path}/{main_filename}");
        let package_file_path_srt = format!("{relative_path}/package.json");
        let writter_file_path_str = format!("{relative_path}/write.js");

        let solution_file_path = Path::new(&solution_file_path_str);
        let main_file_path = Path::new(&main_file_path_str);
        let package_file_path = Path::new(&package_file_path_srt);
        let writter_file_path = Path::new(&writter_file_path_str);

        if solution_file_path.parent().is_none() {
            return Err(ExecutionError::ExecutionEnvironmentError(
                "Path empty".to_string(),
            ));
        }

        let parent_path = solution_file_path.parent().unwrap();

        if let Err(err) = fs::create_dir_all(parent_path) {
            return Err(ExecutionError::ExecutionEnvironmentError(format!(
                "Error creating folder: {err}"
            )));
        }

        if let Err(err) = fs::File::create(solution_file_path)
            .and_then(|mut file| file.write_all(code_info.solution_code.as_bytes()))
        {
            return Err(ExecutionError::ExecutionEnvironmentError(format!(
                "Error creating solution directory: {err}"
            )));
        }

        if let Err(err) = File::create(main_file_path)
            .and_then(|mut file| file.write_all(code_info.main_code.as_bytes()))
        {
            return Err(ExecutionError::ExecutionEnvironmentError(format!(
                "Error creating solution directory: {err}"
            )));
        }

        let writter_content = fs::read_to_string("./code-templates/javascript/write.js");
        let package_json_content = fs::read_to_string("./code-templates/javascript/package.json")
            .map(|content| content.replace("{{id}}", &code_info.id));

        match (writter_content, package_json_content) {
            (Ok(writter_content), Ok(package_content)) => {
                match File::create(package_file_path)
                    .and_then(|mut file| file.write_all(package_content.as_bytes()))
                    .and_then(|_| File::create(writter_file_path))
                    .and_then(|mut file| file.write_all(writter_content.as_bytes()))
                {
                    Ok(_) => Ok(()),
                    Err(err) => Err(ExecutionError::ExecutionEnvironmentError(format!(
                        "Error creating package file: {err}"
                    ))),
                }
            }
            (Err(writter_err), Err(package_err)) => Err(ExecutionError::ExecutionEnvironmentError(
                format!("Error creating solution directory: {writter_err}-{package_err}"),
            )),
            _ => Err(ExecutionError::ExecutionEnvironmentError(
                "Error creating solution directory".to_string(),
            )),
        }
    }
}
