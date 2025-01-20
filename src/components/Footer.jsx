// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';
import logo from '../assets/logo.png'
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
        <div className="flex flex-col text-end items-center md:items-center gap-[20px]">
            <div className="logo-img w-full">
                <div className='flex items-center justify-center'>
                    <img src={logo} alt="Logo" className="w-[150px] h-auto"/>
                </div>
            </div>
            <p>شركة موديل للاستشارات الهندسية شركة متخصصة فى التصميم والتنفيذ والإشراف 
            تعتبر شركتنا واحدة من الشركات الرائدة في مجال التصميم و التشطيب, نمتلك سابقة اعمال كبيرة و مميزة , و منها مشاريع قومية , و مشاريع خاصة .</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-xl mb-4">بيانات التواصل</h2>
            <p className="flex items-center mb-2"><FaPhone className="mr-2" /> 01022222649</p>
            <p className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2" /> مجرة مول مبنى 2B الدور الثاني</p>
            <p className="flex items-center mb-2"><FaEnvelope className="mr-2" /> info@hassan.com</p>
            <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/hassanaljablawy" className="text-white"><FaFacebookF /></a>
                <a href="https://www.instagram.com/eng.hassanaljablawy/" className="text-white"><FaInstagram /></a>
                <a href="https://wa.me/+201022222649" className="text-white"><IoLogoWhatsapp /></a>
                <a href="https://www.youtube.com/channel/UCqeG8d2d0Js-LI3GOEwXmhA" className="text-white"><FaYoutube /></a>
                <a href="https://www.tiktok.com/@hassaneljablawydesigns" className="text-white"><FaTiktok /></a>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-xl mb-4">روابط تهمك</h2>
            <ul>
                <li className="mb-2"><Link to="/" className="hover:text-gray-400">الرئيسية</Link></li>
                <li className="mb-2"><Link to="/من نحن" className="hover:text-gray-400">من نحن</Link></li>
                <li className="mb-2"><Link to="/مشاريعنا" className="hover:text-gray-400">أعمالنا</Link></li>
                <li className="mb-2"><Link to="/المركز الاعلامي" className="hover:text-gray-400">المركز الاعلامي</Link></li>
                <li className="mb-2"><Link to="/تواصل معنا" className="hover:text-gray-400">تواصل معنا</Link></li>
            </ul>
        </div>
    </div>
    <div className="border-t mt-[25px] border-gray-200 dark:border-gray-700 py-4">
        <div className="text-center text-gray-600 dark:text-gray-400">
            <span>Copyright © 2024 </span>
            <a href="https://getsinnovation.com/" className="hover:underline">
                Gets
            </a>
            <span> - Powered By </span>
            <a href="https://getsinnovation.com/" className="hover:underline">
                Gets Innovation
            </a>
        </div>
    </div>
</footer>
  )
}

export default Footer