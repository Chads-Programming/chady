use std::str::FromStr;

use serde::{Deserialize, Serialize};
use strum_macros::EnumString;
use validator::{Validate, ValidationError};

#[derive(Deserialize, Debug, Serialize, EnumString)]
pub enum SupportedLangs {
    Rust,
    Javascript,
    Python,
}

fn validate_supported_lang(supported_lang: &str) -> Result<(), ValidationError> {
    match SupportedLangs::from_str(supported_lang) {
        Ok(_) => Ok(()),
        _ => Err(ValidationError::new("invalid lang")),
    }
}

#[derive(Deserialize, Debug, Serialize, Validate)]
pub struct Input {
    #[validate(length(min = 1, message = "args must be greater or equal than 1 chars"))]
    pub args: String,
    #[validate(length(min = 1))]
    pub expected_result: String,
}

#[derive(Deserialize, Debug, Serialize)]
pub struct InputResult {
    pub input: String,
    pub output: String,
    pub execution_time: String,
}

#[derive(Deserialize, Debug, Serialize)]
pub struct Entry {
    input: String,
    output: String,
}

#[derive(Debug, Serialize, Validate, Deserialize)]
pub struct Submission {
    #[validate(length(min = 5, message = "id must be greater than 5 chars"))]
    pub id: String,
    #[validate(length(min = 10, message = "code must be greater than 10 chars"))]
    pub solution_code: String,
    #[validate(length(min = 10, message = "main_code must be greater than 10 chars"))]
    pub main_code: String,
    #[validate(nested)]
    pub inputs: Vec<Input>,
    #[validate(custom(function = "validate_supported_lang"))]
    lang: String,
}

impl Submission {
    pub fn supported_lang(&self) -> SupportedLangs {
        SupportedLangs::from_str(&self.lang).unwrap()
    }
}

#[derive(Deserialize, Debug, Serialize)]
pub struct SubmissionResponse {
    pub is_success: bool,
    pub message: String,
    pub results: Vec<InputResult>,
}
