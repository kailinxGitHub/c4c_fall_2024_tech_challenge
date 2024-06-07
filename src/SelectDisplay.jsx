import React, {useEffect, useState} from 'react';
import Select from './Select.jsx';
import Info from './Info.jsx';

const ParentComponent = () => {
    const [selectedOption, setSelectedOption] = useState('');

    // useEffect(() => {
    //     console.log('Selected Option in useEffect:', selectedOption);
    // }, [selectedOption]);

    return (
        <div>
            <Select setSelectedOption={setSelectedOption} />
            <Info selectedOption={selectedOption} />
        </div>
    );
};

export default ParentComponent;
