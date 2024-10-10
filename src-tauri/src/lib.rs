mod app_handle;
mod app_service;
mod app_state;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run_app() {
    tauri::Builder::default()
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![app_handle::test_handle])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
