import { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './pages/about.page'
import IndexPage from './pages/index.page'
import LoginPage from './pages/login.page'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={''} element={<IndexPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/login'} element={<LoginPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
