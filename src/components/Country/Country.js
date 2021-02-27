import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,capital,flag,population} = props.country;
    return (
        <div className='country'>
            <h3>Name: {name}</h3>
            <p>Capital: {capital}</p>
            <p className='flag'><img src={flag} alt=""/></p>
            <p>Population: {population}</p>
            <button onClick={()=>props.handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;