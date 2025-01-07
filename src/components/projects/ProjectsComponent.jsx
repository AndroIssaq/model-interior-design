import '../RecentProjects/Recent.css'
import GallerySection from '../GallerySection';
import Spinner from '../Spinner';
const ProjectsComponent = ({title ,setIsLoading,isLoading,products,setId,idProducts,galleryOpen,setGalleryOpen,setIdProducts}) => {
  return (
    <section className='mt-[50px]'>
    <div className='w-full container text-end lg:text-[25px] md:text-[25px] text-Gold p-0'><h1>{title}</h1></div>
    <div className="container border-t border-[#706f6f]">
        <div className="cards mt-[20px] grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 grid-cols-1 gap-[20px]">
          {
            products.map((product,index)=>{
              const galleryHandlerOpen=()=>{
                setId(product.sys.id)
                setGalleryOpen(true)
              }
              const galleryHandlerClose=()=>{
                setId('')
                setIdProducts([])
                setGalleryOpen(false)
              }
              return(
                <>
                  <div key={index}  onClick={galleryHandlerOpen} 
                    className="card  relative cursor-pointer ">
                    <div className='img overflow-hidden lg:h-[467px] md:h-[467px] sm:h-[250px] h-[250px] relative'>
                      <img src={'http:'+product?.fields?.img?.fields?.file?.url} alt="" className=' h-full w-full object-cover'/>
                      <span className='w-full h-full flex items-center justify-center absolute top-0 left-0 bg-[#00000047]'></span>
                    </div>
                      <h1  className='   lg:text-[20px] md:text-[20px] sm:text-[15px] text-[12px] text-[#fff] '>{product?.fields?.name}
                      </h1>
                    <span className=' text-[#706f6f]'>{product?.fields?.type}</span>
                   
                  </div>
                  
                  {
                    isLoading?<Spinner/>:<GallerySection galleryOpen={galleryOpen} galleryHandlerClose={galleryHandlerClose} idProducts={idProducts}/>
                  }
                  
                </>
              )
              
            })
          }
          
        </div>
    </div>
</section>
  )
}

export default ProjectsComponent