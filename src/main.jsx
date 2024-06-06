import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Title from './Title.jsx'
import Form from './Form.jsx'
import Info from './Info.jsx'
import Opp from './Opp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="flex-col justify-center items-center h-screen px-8 py-8">
        {/*<Title />*/}
        {/*<Form />*/}
        {/*<Info />*/}
        <Opp />
        <h1>oik</h1>
    </div>

  </React.StrictMode>
)
