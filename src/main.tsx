import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import { AppContextProvider } from './context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppContextProvider>
            <App />
        </AppContextProvider>
    </React.StrictMode>
)
