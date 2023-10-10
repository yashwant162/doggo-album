import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { BreedContextProvider } from './context/BreedContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BreedContextProvider>
        <App />
      </BreedContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
