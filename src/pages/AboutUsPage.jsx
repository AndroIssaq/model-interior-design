import React from 'react'
import { HoverBorderGradientDemo } from '../components/Button'
import Ceo from '../components/Ceo'
import PartnersSlider from '../components/partnersSlider/PartnersSlider'
import Coast from '../components/Coast'
import AboutUs from '../components/AboutUs'
import img1 from '../assets/aboutuspage.webp'
const AboutUsPage = () => {
  return (
    <section className="overflow-hidden mt-[50px] flex flex-col gap-[50px] pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]  dark:bg-dark">
        <div className="container mx-auto ">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center ">
                <div className="w-full ">
                  <div className="py-3 sm:py-4">
                    <img
                      src={img1}
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>

                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0 text-right">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  لماذا نحن ؟
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                نحن في موديل للاستشارات الهندسية  نفهم أن كل مساحة لها قصة خاصة بها                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                مع سنوات من الخبرة في مجال التصميم الداخلي، قدّمنا خدماتنا لمجموعة متنوعة من المشاريع، من المنازل السكنية إلى المساحات التجارية والمكاتب. نفتخر بقدرتنا على تحويل أي مساحة إلى بيئة جذابة ووظيفية.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                نحن ندرك أهمية الوقت والميزانية لعملائنا. نعمل بجد لضمان تنفيذ مشاريعنا في الوقت المحدد وضمن الميزانية المتفق عليها، مع الحفاظ على أعلى معايير الجودة.
                </p>
                <HoverBorderGradientDemo title={'لنبدأ معا'}/>
              </div>
            </div>
          </div>
        </div>
        <Ceo/>
        <AboutUs/>
        <PartnersSlider/>
        <Coast/>
      </section>
  )
}

export default AboutUsPage