use super::lang_adapter::{CodeInfo, LangAdapter, RunArgs};
use crate::code_runner::{errors::ExecutionError, executer::CodePathInfo};
use std::{
    fs::{self, File},
    io::Write,
    path::Path,
};

#[derive(Default)]
pub struct RustAdapter;

impl LangAdapter for RustAdapter {
    fn make_run_command(&self, args: RunArgs) -> (String, Vec<String>) {
        let id = args.id;
        let path = args.path;
        let params = args.params;

        let main_command = format!("cargo build && ./target/debug/{id} '{params}'");
        let code_path = format!("{path}:/code");

        let args = vec![
            "run",
            "--rm",
            "-m",
            "512M",
            "--memory-swap",
            "512M",
            "--name",
            &id,
            "-v",
            &code_path,
            "-w",
            "/code",
            "rust:1.76.0",
            "/bin/sh",
            "-c",
            &main_command,
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

        let main_file_path_str = format!("{relative_path}/src/{main_filename}");
        let package_file_path_srt = format!("{relative_path}/Cargo.toml");

        let main_file_path = Path::new(&main_file_path_str);
        let package_file_path = Path::new(&package_file_path_srt);

        let parent_path = main_file_path.parent().unwrap();

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

        match fs::read_to_string("./code-templates/rust/Cargo.toml") {
            Ok(content) => {
                let package_content = content.replace("{{id}}", &code_info.id);

                match File::create(package_file_path)
                    .and_then(|mut file| file.write_all(package_content.as_bytes()))
                {
                    Ok(_) => Ok(()),
                    Err(err) => Err(ExecutionError::ExecutionEnvironmentError(format!(
                        "Error creating package file: {err}"
                    ))),
                }
            }
            Err(err) => Err(ExecutionError::ExecutionEnvironmentError(format!(
                "Error creating solution directory: {err}"
            ))),
        }
    }
}
