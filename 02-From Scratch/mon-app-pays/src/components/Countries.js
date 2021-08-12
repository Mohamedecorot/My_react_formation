import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
        .then((res) => setData(res.data));
    }, [])

    return (
        <div className="countries">
            <ul className="countries-list">
                {data.map((country) => (
                    <li>{country.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Countries;