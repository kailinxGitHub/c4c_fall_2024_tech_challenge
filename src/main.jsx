import React, { useState } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import Title from './Title.jsx'
import Select from "./Select.jsx";
import Form from './Form.jsx'
import Info from './Info.jsx'
import Opp from './Opp.jsx'

const App = () => {
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <div className="flex-col justify-center items-center h-screen px-8 py-8">
            <Title />
            <Select setSelectedOption={setSelectedOption} />
            <Form/>
            <Info selectedOption={selectedOption}/>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);