import ProjectsComponent from '../components/projects/ProjectsComponent'
import { useState,useEffect } from "react";
import { createClient } from 'contentful';
import Spinner from '../components/Spinner';
const Projects = () => {
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
          const response=await client.getEntries({content_type:'allProjects'})
          setProducts(response.items)
          setIsLoading(false)
      } catch (error) {
          console.log(error);
      }
    }
    const getIdData = async()=>{
    client.getEntry(id)
    .then((entry) => setIdProducts(entry) )
    .catch(console.error)
    }
    useEffect(() => {
      getData()
  }, [])  
  useEffect(() => {
    getIdData()
  },[id])
  return (
    <section>
        {
      isLoading?<Spinner/>:<ProjectsComponent title={'مشاريعنا'}     products={products} setId={setId} idProducts={idProducts} galleryOpen={galleryOpen}   setGalleryOpen={setGalleryOpen} setIdProducts={setIdProducts} isLoading={isLoading} setIsLoading={setIsLoading} />
    }
    </section>
  )
}

export default Projects