import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
  </BrowserRouter>

)
