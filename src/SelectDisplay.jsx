import React, { useState } from 'react';
import Select from './Select.jsx';
import Info from './Info.jsx';

const ParentComponent = () => {
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <div>
            <Select setSelectedOption={setSelectedOption} />
            <Info selectedOption={selectedOption} />
        </div>
    );
};

export default ParentComponent;
