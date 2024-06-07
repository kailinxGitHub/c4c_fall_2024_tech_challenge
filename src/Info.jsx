import React, { useEffect, useState } from 'react';

const Info = ({ selectedOption }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (selectedOption) {
            fetch(`http://localhost:3000/getPartnerInfo?name=${selectedOption}`)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    console.log(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [selectedOption]);

    if (!selectedOption) {
        return (
            <div className="max-w-sm mx-auto grid grid-cols-1 px-5 py-5 mt-6 border border-green-400 rounded-lg border-dashed">
                <h1>Select a partner to see the details</h1>
            </div>
        );
    }

    return (
        <div
            className="max-w-sm mx-auto grid grid-cols-1 px-5 py-5 mt-6 border border-green-400 rounded-lg border-dashed">
            {/*use data.logoSource as href for a  photo of a given fixed size*/}
            <img className="object-contain h-48 w-96" src={data.logoSource} alt="Logo" />
            <h1 className="Title justify-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-black">{data.name || 'Loading...'}</h1>
            <p>{data.description || 'Loading...'}</p>
            <h1>{data.active ? 'Active' : 'Not Active'}</h1>
            <button
                className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
                onClick={() => {
                    fetch(`http://localhost:3000/deletePartner?name=${selectedOption}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! status: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            console.log(data);
                        })
                        .catch(error => console.error('Error fetching data:', error));
                    window.location.reload();
                }}
            >Delete</button>
        </div>
    );
};

export default Info;