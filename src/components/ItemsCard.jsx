import React from 'react';
import '../assets/css/itemscard.css'
import ICardFetch from './ICardFetch';
import NothinHere from './NothinHere';



const ItemsCard = (params) => {

    console.log(params.dataInfo.residents?.length)

    if(params.dataInfo.residents?.length === 0) {
    console.log("hello");

    return (
        <NothinHere />  
    )
}

    return (


        <div className='container'>
        <div className='container-items'>
            {  params.dataInfo.residents?.map(resident =>(
                <div key={resident} className='items-details'>
                <ICardFetch url={resident} />
                </div>
              )) }

           
            </div>
            </div>
    );
};

export default ItemsCard;

