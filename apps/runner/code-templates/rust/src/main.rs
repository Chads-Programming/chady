extern crate serde_json;

fn main() {
    let args: Vec<String> = std::env::args().collect();

    if args.len() < 2 {
        println!("should provide a JSON arg");
        std::process::exit(1);
    }

    let json_str = &args[1];
    let parsed_json: Result<Vec<i64>, _> = serde_json::from_str(json_str);

    match parsed_json {
        Ok(arr) => {
            let result = solution::sum(arr[0], arr[1]);
            println!("{:?}", result)
        },
        Err(e) => {
            eprintln!("Error on parsing args: {}", e);
            std::process::exit(1);
        }
    }
}

pub mod solution;
