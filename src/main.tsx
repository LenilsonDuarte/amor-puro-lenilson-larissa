import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Força o modo dark globalmente
if (typeof document !== 'undefined') {
    document.documentElement.classList.add('dark');
}

createRoot(document.getElementById("root")!).render(<App />);
