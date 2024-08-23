use strum_macros::Display;

#[derive(Display)]
pub enum ExecutionError {
    RuntimeError(String),
    ExecutionError(String),
    ExecutionEnvironmentError(String),
    CleanUpError(String),
}
