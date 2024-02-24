import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ThemeProvider as NextThemesProvider} from "next-themes";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextThemesProvider>
      <App />
    </NextThemesProvider>
  </React.StrictMode>,
)
