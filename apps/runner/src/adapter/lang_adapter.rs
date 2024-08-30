use std::{fs, path::Path};

use crate::code_runner::{errors::ExecutionError, executer::CodePathInfo};

pub struct RunArgs {
    pub id: String,
    pub path: String,
    pub params: String,
}

pub struct CodeInfo {
    pub id: String,
    pub main_code: String,
}

pub trait LangAdapter {
    fn make_run_command(&self, args: RunArgs) -> (String, Vec<String>);
    fn setup_environment(
        &self,
        path_info: &CodePathInfo,
        code_info: &CodeInfo,
    ) -> Result<(), ExecutionError>;

    fn clean_up(&self, path_info: CodePathInfo) -> Result<(), ExecutionError> {
        let relative_path = path_info.relative_path;

        if let Err(err) = fs::remove_dir_all(Path::new(&relative_path)) {
            return Err(ExecutionError::CleanUpError(format!("{err}")));
        }

        Ok(())
    }
}
