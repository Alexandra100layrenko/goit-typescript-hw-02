import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';
import './index.css'
import 'modern-normalize';
import App from './components/App/App'

createRoot(document.getElementById('app') as HTMLElement).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        className: '',
        duration: 2000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        success: {
          duration: 1000,
          style: {
            backgroundColor: 'green',
            color: 'white',
          },
        },
        error: {
          duration: 1000,
          style: {
            backgroundColor: 'red',
            color: 'white',
          },
        },
      }}
    />
  </StrictMode>
)
