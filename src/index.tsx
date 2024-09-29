import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => <h1>Hello, Timeline history!</h1>

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement!)

root.render(<App />)
