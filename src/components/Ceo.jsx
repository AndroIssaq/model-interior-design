import React from 'react'
import ceoImg from '../assets/man.jpg'
const Ceo = () => {
  return (
    <section>
    <div className="container">
        <div className="flex xl:flex-row-reverse lg:flex-row-reverse  md:flex-col sm:flex-col flex-col bg-[#121111] rounded-[20px] items-center justify-center w-full ">
            <div className="left flex-1 flex items-center justify-center ">
                <div className='ceo-img w-[100%] h-[600px] '>
                    <img src={ceoImg} alt="" className='w-full h-full object-cover rounded-[20px] ' />
                </div>
              
            </div>
            <div className="right flex-1 p-[20px] text-end flex flex-col gap-[40px]">
                <h1 className='lg:text-[45px] md:text-[35px] sm:text-[30px] text-[25px] text-[#fff]'>عن المهندس حسن الجبلاوي</h1>
                <span className='text-[#b2b1b1]'>يُعتبر المهندس المعماري ومصمم الديكور الداخلي المصري، حسن الجبلاوي، شخصية بارزة في مجال التصاميم الأنيقة والتشطيبات الفاخرة والتخطيطات الحكيمة. يشتهر الجبلاوي بتصاميمه التعبيرية والمبتكرة، التي تميزها المواد المختلطة والأشكال الديناميكية، ويعتبر رائدًا في أساليب الهندسة المعمارية المعاصرة والحديثة في المنطقة. أسهمت تصاميمه المبتكرة وأساليبه التجريبية في بناء سمعة قوية بين مكاتب التصميم ومطوري المشاريع العقارية في الشرق الأوسط. يشغل الجبلاوي منصب المدير التنفيذي لشركة موديل، حيث يقود فريقًا من المهندسين والفنيين بهدف توفير خدمات شاملة للعملاء وتطوير الفريق وضمان رضا العملاء. </span>
            </div>
        </div>
    </div>
</section>
  )
}

export default Ceo