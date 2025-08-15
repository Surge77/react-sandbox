import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// This is the entry point of the app =>
//App bootstrapping (connects React to the browser, imports global CSS)

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
