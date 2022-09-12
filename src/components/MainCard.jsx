import { useEffect, useState } from "react";
import axios from "axios";
import Residents from './Residents';
import Search from './Search';
import useFetch from '../hooks/useFetch';
import ItemsCard from  './ItemsCard'
import Pagination from './Pagination';
import Loading from "./Loading";

const MainCard = () => {

/* Me traigo el hook */
const {data, loading, handleClick} = useFetch()


    return (
        <div>
            <Search dataInfo={handleClick}/>
            
            {loading ? <Loading /> : <Residents dataInfo={data} />}
            <div>
            {loading ?  <Loading /> : <ItemsCard dataInfo={data} />}
            </div>
            <div>
             <Pagination />
            </div>
        </div>
    );
};

export default MainCard;