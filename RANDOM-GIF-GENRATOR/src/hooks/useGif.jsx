import React from 'react'

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const useGif = () => {
  
    const [tag,setTag] = useState('');

    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);
   
    async function fetchData()
    {
      setLoading(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const {data} = await axios.get(url);
      
      const imageSource = data.data.images.downsized_large.url;
      console.log(imageSource);
      setLoading(false)
      setGif(imageSource);
    }
  
    useEffect(()=>{
      fetchData();
    },[])
  

}

export default useGif