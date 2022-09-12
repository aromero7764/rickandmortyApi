import React from 'react';
import '../assets/css/residents.css'
import Loading from './loading';

const Residents = ({dataInfo, loading}) => {

if(loading) {
    <Loading />
}

let population = dataInfo.residents

    return (
        <div className='residents-main'>
            <div className="residents-card">
                <section className="residents-card_description">
                    <article>
                        <p className='text-information'><b>Location Name</b></p>
                        <p className='text-description'>{dataInfo.name} </p> 
                    </article>
                    <article>
                        <p className='text-information'><b>Type </b></p>
                        <p className='text-description'>{dataInfo.type} </p> 
                    </article>
                    <article>
                        <p className='text-information'><b>Dimension </b></p>
                        <p className='text-description'>{dataInfo.dimension} </p>
                    </article>
                    <article>
                        <p className='text-information'><b>Population</b></p>
                        <p className='text-description'>{population?.length}</p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default Residents;