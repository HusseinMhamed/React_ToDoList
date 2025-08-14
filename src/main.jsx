import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToDoListProvider } from './contexts/ToDocontext.jsx'
import { AlertProvider } from './contexts/alertcontext.jsx' 
import { EditLayoutContext } from './contexts/EditContext.jsx' 
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AlertProvider>
    <ToDoListProvider>
      <EditLayoutContext>
          <App />
      </EditLayoutContext>
    </ToDoListProvider>
    </AlertProvider>
  // </StrictMode>
)
