import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country
    
    const [visited, setVisited] = useState(false)

    const handleVisited = ()=>{
        setVisited(!visited)
    }

    console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" /> 
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button>Mark as visited</button>
            <br />
            <button onClick={handleVisited}>{visited? 'Visited✅' : 'Visit'}</button>
        </div>
    );
};

export default Country;