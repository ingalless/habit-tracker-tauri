#[derive(Debug, PartialEq, serde::Serialize)]
struct Habit {
    name: String,
    history: Vec<bool>,
}

#[tauri::command]
fn add_habit(name: &str) -> Habit {
    // TODO: Hook up to a store

    Habit {
        name: name.into(),
        history: vec![],
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_haptics::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![add_habit])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add_habit() {
        assert_eq!(
            add_habit("Test name"),
            Habit {
                name: String::from("Test name"),
                history: vec![]
            }
        )
    }
}
