import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import MainMenu from './Pages/MainMenu.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Ensure npm install react-router-dom is run

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="main-menu" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
