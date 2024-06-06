import React, { useEffect, useState } from 'react';

function Opp() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/okk')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="Opp">
            <header className="Opp-header">
                <h1>React and Express Integration</h1>
                {data ? <p>{data.message}</p> : <p>Loading...</p>}
            </header>
        </div>
    );
}

export default Opp;