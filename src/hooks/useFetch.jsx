
import axios from "axios";
import { useEffect, useState } from "react";


const useFetch = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  

/* render inicial aleatorio */
  useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
          const ramdomId = Math.floor(Math.random() * 126 ) +1
          const res = await axios.get(`https://rickandmortyapi.com/api/location/${ramdomId}`)
        setData(res.data)
      setLoading(false)
    }
    fetchData()
  }, [])

  /* Renderizado dependiendo de lo que venga del buscador */
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

  return { data, loading, handleClick};
};

export default useFetch;
