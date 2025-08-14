import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// 라우터 적용 순서 1
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // 라우터 적용 순서 2
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
