import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { registerLicense } from '@syncfusion/ej2/base.js'
import ContextProvider from './contexts/ContextProvider.jsx';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cVWhNYVJpR2Nbe054flBHal5ZVAciSV9jS3pTdUVhWXdbcnBcQGFdVg==');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextProvider >
    <App />
   </ContextProvider>
  </React.StrictMode>,
)
