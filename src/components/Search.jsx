import React, { useState } from 'react';
import '../assets/css/search.css'

const Search = (props) => {

const [locationId, setLocationId] = useState("")

const changes = (e)=> {
    console.log(locationId)
        props.dataInfo(locationId)
    
}



    return (
        <div className='search-container'>
            <div className='control control1'>
            <input className='input wh' type="number" min="1" max="126" 
                placeholder='Search planet by Id'
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        changes()
                    }}} />
            </div>
            <div className='control'>
            <button className='button is-info wh' onClick={changes}>Search</button>
            </div>
            
        </div>
    );
};

export default Search;