import React from 'react'
import video from '../assets/videoplayback (2).mp4'
const AboutUs = () => {
  return (
    <section>
        <div className="container">
            <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col  bg-[#121111] rounded-[20px] items-center justify-center w-full ">
                <div className="left flex-1">
                    <video autoPlay muted loop className='w-full rounded-[20px]'>
                        <source src={video}  />
                    </video>
                </div>
                <div className="right flex-1 p-[20px] text-end">
                    <h1 className='text-[35px] text-[#fff]'>من نحن ؟</h1>
                    <span className='text-[#b2b1b1]'>منذ عام 2003، أنجزت شركة موديل أكثر من 500 مشروع في جميع أنحاء أفريقيا والشرق الأوسط تتراوح بين الفلل السكنية الخاصة والمشاريع التجارية متعددة الاستخدام والنوادي والفنادق ومراكز التسوق والمباني الإدارية والمجمعات السكنية فائقة الفخامة. ما نطمح إليه هو التميز الهندسي في جميع الجوانب، وقد بدأ طريقنا خلال هذه الرحلة بالفعل. تتعامل شركه موديل مع كل مشروع باعتباره رحلة تصميم جديدة تتطلب منظورًا جديدًا وعقلًا متفتحًا. نبدأ بالبحث في معايير المشروع وسياق الموقع والمناظر الطبيعية والخدمات والميزانية واللوائح. نحن نتعامل بلباقة مع كل مشروع وفقًا لمتطلباته المحددة والمخصصة خصيصًا لكل عميل، والتي من خلالها نقدم شركاء العمل لدينا في مرحلة مبكرة من العملية.</span>
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default AboutUs