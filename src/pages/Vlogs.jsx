import React from 'react'
import video from '../assets/Furniture Gallery - 3D Animation.mp4'
import { useState, useEffect } from 'react'
import { createClient } from 'contentful'
const Vlogs = () => {
  const [vlogs, setVlogs] = useState([])
  const [idVlogs, setIdVlogs] = useState([])

  const [id,setId]=useState('')
    const client = createClient({
      space: '1y7yfbvle9rn',
      environment: 'master', // defaults to 'master' if not set
      accessToken: 'ShXDyL6YTbJVAI84wY5jVDL_zaUBUUTMevh9eK6YnmY'
    })

    const getData = async()=>{
      try {
          const response=await client.getEntries({content_type:'mediaCenter'})
          setVlogs(response.items)
      } catch (error) {
          console.log(error);
      }
    }
    const getIdData = async()=>{
    client.getEntry(id)
    .then((entry) => setIdVlogs(entry) )
    .catch(console.error)
    }
    useEffect(() => {
      getData()
  }, [])  


  return (
    <section className='mt-[110px]'>
        <div className="container bg-[#121111] p-[20px] rounded-[25px]">
            <div className="title  gap-[20px] flex w-full flex-col items-center justify-center text-center">
                <h1 className='text-[35px]'>اخر مقالتنا</h1>
                <p className='text-[25px] text-[#949292]'>اكتشف أحدث أفكارنا وتحديثاتنا حول اتجاهات التصميم الداخلي.</p>
            </div>
            <div className="cards mt-[50px] flex flex-col gap-[50px] items-center justify-center ">
            {
              vlogs?.map((vlog,index)=>{
                console.log(vlog?.fields?.link);
                
                return(
                  <div key={index} className="flex xl:flex-row-reverse lg:flex-row-reverse  md:flex-col sm:flex-col flex-col bg-[#121111] rounded-[20px] items-start justify-center w-full ">
            <div className="left flex-1 flex items-center justify-center ">
            <iframe className='w-[100%] rounded-[25px] lg:h-[400px] md:h-[350px] sm:h-[250px] h-[250px]'  src={vlog?.fields?.link} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              
            </div>
            <div className="right  flex-1 p-[20px] text-end flex flex-col items-end justify-start gap-[40px] h-[100%]">
                <h1 className='lg:text-[20px] md:text-[20px] sm:text-[15px] text-[15px] text-[#fff]'>{vlog?.fields?.title}</h1>
                <span className='text-[#b2b1b1] lg:text-[12px] md:text-[12px] sm:text-[10px] text-[10px]'>   {vlog?.fields?.des} </span>
            </div>
        </div>
                )
              })
            }
            </div>
        </div>
    </section>
  )
}

export default Vlogs