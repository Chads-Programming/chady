use std::process::Output;

use crate::code_runner::models::{Input, InputResult};

const DEFAULT_TIME: f64 = -1.0;

pub fn parse_output(output: &Output, input: &Input) -> InputResult {
    let result = String::from_utf8_lossy(&output.stdout).trim().to_string();

    let cleaned_output = result.clone().trim().replace("t: ", "");
    let mut tokens = cleaned_output.lines();

    let execution_time: f64 = tokens
        .next()
        .unwrap()
        .to_string()
        .replace("ms", "")
        .parse()
        .unwrap_or(DEFAULT_TIME);

    let result = tokens.next().unwrap().to_string();

    if !result.is_empty() {
        return InputResult {
            input: input.clone(),
            execution_time,
            time_format: "ms".to_string(),
            output: result,
        };
    }

    InputResult {
        input: input.clone(),
        output: String::from_utf8_lossy(&output.stderr).trim().to_string(),
        execution_time: DEFAULT_TIME,
        time_format: "ms".to_string(),
    }
}
