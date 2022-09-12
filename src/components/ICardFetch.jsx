import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import '../assets/css/articles.css'

const ICardFetch = ({url}) => {

const [loading, setLoading] = useState(false)
const [resident, setResident] = useState({})



 useEffect(() =>{
    setLoading(true)
    axios.get(url)
    .then(res => {setResident(res.data)
        setLoading(false)
     
    })

}, []) 


    return (

        <div>
             <article className='card-items' key={resident?.name}>   
            <img className='img-item' src={resident?.image} alt="foto" />
            <h2>Name: {resident?.name}</h2>
            <div className='status'>
             <p><span className="icon"><i className={resident.status}></i></span>{resident?.status} - {resident?.species}</p>
    
            </div>
         
                
            <p>Origin</p>
            <p>{resident.origin?.name}</p>
            <p>episodes where appear</p>
            <p>{resident.episode?.length}</p>
            </article> 
        </div>
    );
};

export default ICardFetch;