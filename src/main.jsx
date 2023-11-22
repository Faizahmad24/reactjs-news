import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'

import {
  BrowserRouter,
  // Router,
  Routes,
  Route
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<App />}/>
          
        {/* </Route> */}
        <Route  path=":id" element={<App />}/>
          
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
