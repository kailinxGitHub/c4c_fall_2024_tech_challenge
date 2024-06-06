import React, { useEffect, useState } from 'react';

const Info = ({ selectedOption }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (selectedOption) {
            fetch(`http://localhost:3000/countryInfo?name=${selectedOption}`)
                .then(response => response.json())
                .then(data => setData(data))
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [selectedOption]);

    if (!selectedOption) {
        return (
            <div
                className="max-w-sm mx-auto grid grid-cols-1 px-5 py-5 mt-6 border border-green-400 rounded-lg border-dashed">
                <h1>Select a country to see the details</h1>
            </div>
        );
    }

    return (
        <div
            className="max-w-sm mx-auto grid grid-cols-1 px-5 py-5 mt-6 border border-green-400 rounded-lg border-dashed">
            <h1>{data ? data.name : 'Loading...'}</h1>
            <h1>{data ? data.description : 'Loading...'}</h1>
            <h1>{data ? data.logo : 'Loading...'}</h1>
            <h1>{data ? data.active : 'Loading...'}</h1>
            <button>Delete</button>
        </div>
    );
};

export default Info;