import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/css/index.css'
import AppContextProvider from './code/AppContextProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>,
)
