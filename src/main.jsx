import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n.js"
import GenreContext from './components/context/GenreContext.jsx'
import {  QueryClient,  QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <GenreContext>
      <App />
    </GenreContext>
    </QueryClientProvider>
  </StrictMode>
)
