import '../RecentProjects/Recent.css'
import { useState,useEffect } from "react";
import { createClient } from 'contentful';
import GallerySection from '../GallerySection';
import ProjectsComponent from '../projects/ProjectsComponent';
import Spinner from '../Spinner';
const RecentProjects = () => {
  const [products, setProducts] = useState([])
  const [idProducts, setIdProducts] = useState([])
  const [isLoading,setIsLoading]=useState(false)
  const [galleryOpen,setGalleryOpen]=useState(false)
  const [id,setId]=useState('')
    const client = createClient({
      space: '1y7yfbvle9rn',
      environment: 'master', // defaults to 'master' if not set
      accessToken: 'ShXDyL6YTbJVAI84wY5jVDL_zaUBUUTMevh9eK6YnmY'
    })
    const getData = async()=>{
      try {
        setIsLoading(true)
          const response=await client.getEntries({content_type:'recentProjects'})
          setProducts(response.items)
          setIsLoading(false)
      } catch (error) {
          console.log(error);
      }
    }
    const getIdData = async()=>{
      setIsLoading(true)
    client.getEntry(id)
    .then((entry) => setIdProducts(entry) )
    .catch(console.error)
    setIsLoading(false)
    }
    useEffect(() => {
      getData()
  }, [])  
  useEffect(() => {
    setIsLoading(true)
    getIdData()
    setIsLoading(false)
  },[id])
 
return(
  <>
   {
      isLoading?<Spinner/>:<ProjectsComponent title={'اخر مشاريعنا'}     products={products} setId={setId} idProducts={idProducts} galleryOpen={galleryOpen}   setGalleryOpen={setGalleryOpen} setIdProducts={setIdProducts} isLoading={isLoading} setIsLoading={setIsLoading} />
    }
  </>
)
   
    
  
}

export default RecentProjects

/*


*/