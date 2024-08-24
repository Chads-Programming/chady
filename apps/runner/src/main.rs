use axum::{
    routing::{get, post},
    Router,
};
use runner::code_runner;

async fn hello_world() -> &'static str {
    "Hello, world 🦊🚬!"
}

#[shuttle_runtime::main]
async fn main() -> shuttle_axum::ShuttleAxum {
    let router = Router::new()
        .route("/", get(hello_world))
        .route("/execute-code", post(code_runner::handlers::execute_code));

    Ok(router.into())
}
