import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <Hero 
        backgroundImage={`/images/hero_contact.webp`}
        title="Get in Touch" 
      />

      {/* Contact Information and Map Section */}
      <div className="w-11/12 md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Details Column */}
        <div className="space-y-5 py-5 flex flex-col justify-center">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className='flex items-center space-x-2'><MdOutlinePhoneAndroid /><strong>Phone:</strong><a href='+1(123)4567890'className='text-indigo-500 hover:underline'>+1 (123) 456-7890</a></p>
          <p className='flex items-center space-x-2'><HiOutlineMail /><strong>Email:</strong><a href='mailto:contact@example.com'  className='text-indigo-500 hover:underline'> contact@example.com</a></p>
          <p className='flex items-center space-x-2'><FaInstagram /><strong>Instagram:</strong> <a href="https://instagram.com/yourprofile" className="text-indigo-500 hover:underline">@yourprofile</a></p>
        </div>

        {/* Map Column */}
        <div>
          <div>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093053!2d144.9537363155041!3d-37.81720997975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577f0f3a7e7b028!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1631511234567!5m2!1sen!2sau"
              width="100%"
              height="500"
              allowFullScreen=""
              loading="lazy"
              className="border rounded-md shadow-md"
            ></iframe>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
