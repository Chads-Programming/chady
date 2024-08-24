use crate::{
    adapter,
    code_runner::{
        executer::Executer,
        models::{Submission, SubmissionResponse},
    },
};
use axum::{http::StatusCode, response::IntoResponse, Json};
use validator::Validate;

pub async fn execute_code(Json(body): Json<Submission>) -> impl IntoResponse {
    let is_valid = body.validate();

    if is_valid.is_err() {
        let error = is_valid.err().unwrap();

        return (
            StatusCode::BAD_REQUEST,
            Json(SubmissionResponse {
                is_success: false,
                message: error.to_string(),
                results: vec![],
            }),
        )
            .into_response();
    }

    let submission = body;

    let execution_result = match submission.supported_lang() {
        crate::code_runner::models::SupportedLangs::Rust => {
            Executer::new(submission).execute(adapter::rust::RustAdapter)
        }
        crate::code_runner::models::SupportedLangs::Javascript => {
            Executer::new(submission).execute(adapter::javascript::JavascriptAdapter)
        }
        crate::code_runner::models::SupportedLangs::Python => {
            Executer::new(submission).execute(adapter::python::PythonAdapter)
        }
    };

    match execution_result {
        Ok(output) => Json(SubmissionResponse {
            is_success: true,
            message: "Submission was executed".to_string(),
            results: output,
        })
        .into_response(),
        Err(err) => (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(SubmissionResponse {
                is_success: false,
                message: err.to_string(),
                results: vec![],
            }),
        )
            .into_response(),
    }
}
