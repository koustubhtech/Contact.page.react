import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navigation/>
    <ContactHeader/>
    <ContactForm/>
  </React.StrictMode>,
)
