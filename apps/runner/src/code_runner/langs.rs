pub struct BuildArgs {
    pub id: String,
    pub path: String,
    pub params: String,
}

pub trait DockerLangCommand {
    fn make_execute_command(args: BuildArgs) -> (String, Vec<String>);
}

#[derive(Default)]
pub struct DockerJavascriptCommand;
#[derive(Default)]

pub struct DockerRustCommand;
#[derive(Default)]

pub struct DockerPythonCommand;

impl DockerLangCommand for DockerJavascriptCommand {
    fn make_execute_command(args: BuildArgs) -> (String, Vec<String>) {
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
}

impl DockerLangCommand for DockerPythonCommand {
    fn make_execute_command(args: BuildArgs) -> (String, Vec<String>) {
        let id = args.id;
        let path = args.path;
        let params = args.params;

        let main_js_file = format!("\"node main.js '{params}'\"");
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
}

impl DockerLangCommand for DockerRustCommand {
    fn make_execute_command(args: BuildArgs) -> (String, Vec<String>) {
        let id = args.id;
        let path = args.path;
        let params = args.params;

        let main_file = format!("cargo run --bin main {params}");
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
            "rust:latest",
            "/bin/sh",
            "-c",
            &main_file,
        ]
        .into_iter()
        .map(|arg| arg.to_string())
        .collect();

        ("docker".to_string(), args)
    }
}
