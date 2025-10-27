import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'materialize-css/dist/css/materialize.min.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import('materialize-css/dist/js/materialize.min.js').then((M) => {
  // Initialiser tous les composants Materialize
  M.AutoInit();
});
