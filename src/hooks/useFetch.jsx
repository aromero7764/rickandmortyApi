
import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  

/* render inicial aleatorio */
  useEffect(() => {
          const ramdomId = Math.floor(Math.random() * 126 ) +1
          axios.get(`https://rickandmortyapi.com/api/location/${ramdomId}`)
            .then(res => {
              setData(res.data)
              setLoading(false)
            })
  }, [])

console.log(data)

  /* Renderizado dependiendo de lo que venga del buscador */
      const handleClick = (params) => {
        let newId = params
        if (params >= 127) {
          newId = 126
        }
              axios.get(`https://rickandmortyapi.com/api/location/${newId}`)
                .then(res => {
                  setData(res.data) 
                  setLoading(false)})
                
    };

  return { data, loading, handleClick};
};

export default useFetch;


/* 

 const handleClick = (params) => {
        let newId = params
        if (params >= 127) {
          newId = 126
        }
          const fetchData = async () => {
            setLoading(true)
            const res = await
              axios.get(`https://rickandmortyapi.com/api/location/${newId}`)
            setData(res.data)
          setLoading(false)
      } 
      fetchData()
    };
*/