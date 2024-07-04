// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl mb-4">بيانات التواصل</h2>
        <p className="flex items-center mb-2"><FaPhone className="mr-2" /> 01022222649</p>
        <p className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2" /> مجرة مول مبنى 2B الدور الثاني</p>
        <p className="flex items-center mb-2"><FaEnvelope className="mr-2" /> info@hassan.com</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.facebook.com" className="text-white"><FaFacebookF /></a>
          <a href="https://www.instagram.com" className="text-white"><FaInstagram /></a>
          <a href="https://www.twitter.com" className="text-white"><FaTwitter /></a>
          <a href="https://www.tiktok.com" className="text-white"><FaTiktok /></a>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h2 className="text-xl mb-4">روابط تهمك</h2>
        <ul>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">الرئيسية</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">من نحن</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">أعمالنا</a></li>
          <li className="mb-2"><a href="#" className="hover:text-gray-400">تواصل</a></li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start gap-[20px]">
      <div className="logo-img  w-full ">
        <div className='flex items-center justify-center'>
            <img src={logo} alt="" className="w-[150px] h-full"/>
        </div>
    </div>
        <p>نحن شركة موديل للاستشارات الهندسية INTERIOR DESIGN . و تعتبر شركتنا واحدة من الشركات الرائدة في مجال التصميم و التشطيب, نمتلك سابقة اعمال كبيرة و مميزة , و منها مشاريع قومية , و مشاريع خاصة .</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer