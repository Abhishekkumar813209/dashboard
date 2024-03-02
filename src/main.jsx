import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { registerLicense } from '@syncfusion/ej2/base.js'

registerLicense('Ngo9BigBOggjHTQxAR8/V1NAaF1cVWhNYVJpR2Nbe054flBHal5ZVAciSV9jS3pTdUVhWXdbcnBcQGFdVg==');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
