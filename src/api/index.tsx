import { invoke } from '@tauri-apps/api/core'

export async function testHandle(name: string) {
    return invoke('test_handle', { name })
}
