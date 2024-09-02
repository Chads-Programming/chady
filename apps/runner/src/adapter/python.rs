use super::lang_adapter::{CodeInfo, LangAdapter, RunArgs};
use crate::code_runner::{errors::ExecutionError, executer::CodePathInfo};
use std::{
    fs::{self, File},
    io::Write,
    path::Path,
};

#[derive(Default)]
pub struct PythonAdapter;

impl LangAdapter for PythonAdapter {
    fn make_run_command(&self, args: RunArgs) -> (String, Vec<String>) {
        let id = args.id;
        let path = args.path;
        let params = args.params;

        let main_file = format!("python3 main.py '{params}'");
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
            "python:3.9-alpine",
            "/bin/sh",
            "-c",
            &main_file,
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
        let main_filename = path_info.main_filename.clone();

        let main_file_path_str = format!("{relative_path}/{main_filename}");
        let main_file_path = Path::new(&main_file_path_str);
        let writter_file_path_str = format!("{relative_path}/write.py");

        let parent_path = main_file_path.parent().unwrap();
        let writter_file_path = Path::new(&writter_file_path_str);

        let writter_content = fs::read_to_string("./code-templates/python/write.py");

        if let Err(err) = fs::create_dir_all(parent_path) {
            return Err(ExecutionError::ExecutionEnvironmentError(format!(
                "Error creating folder: {err}"
            )));
        }

        if let Err(err) = File::create(main_file_path)
            .and_then(|mut file| file.write_all(code_info.main_code.as_bytes()))
        {
            return Err(ExecutionError::ExecutionEnvironmentError(format!(
                "Error creating solution directory: {err}"
            )));
        }

        match writter_content {
            Ok(content) => {
                if let Err(err) = File::create(writter_file_path)
                    .and_then(|mut file| file.write_all(content.as_bytes()))
                {
                    return Err(ExecutionError::ExecutionEnvironmentError(format!(
                        "Error creating solution directory: {err}"
                    )));
                }

                Ok(())
            }
            Err(err) => Err(ExecutionError::ExecutionEnvironmentError(format!(
                "Error creating solution directory: {err}"
            ))),
        }
    }
}
