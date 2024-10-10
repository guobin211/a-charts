#[tauri::command]
pub fn test_handle(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}
