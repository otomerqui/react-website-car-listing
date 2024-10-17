import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import Imageslider from '../components/Imageslider';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';


const Details = ({cars}) =>    {
    
    const { carModel } = useParams();
    const selectedCar = cars.find((car) => car.model.replace(/\s+/g, '-').toLowerCase() === carModel);
    const images = [`/images/${selectedCar.image}.webp`, `/images/${selectedCar.image}.webp`, `/images/${selectedCar.image}.webp`];
    return (
        <div>
            <Navbar />
            <div className='w-11/12 md:w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between md:space-x-10'>
                <div className='md:w-1/2 space-y-5'>
                    <p className='text-lg'><Link to="/">Home</Link> {">"} <Link to="/cars">Cars</Link> {">"} <span className='font-semibold text-indigo-500'>{selectedCar.model}</span> </p>
                    <h1 className='text-4xl  font-bold'>{selectedCar.model}</h1>
                    <h2 className='text-3xl font-bold text-indigo-500'>${selectedCar.price}</h2>
                    <Imageslider images={images} />
                </div>
                <div className='md:w-1/2 flex flex-col justify-between p-4'>
                    <div className='py-5 border-b space-y-2 '>
                        <h2 className='text-2xl font-semibold'>Rating & reviews</h2>
                        <div className='flex space-x-5 items-center'>
                            <div className='flex items-center space-x-1 text-amber-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <p><span className='font-bold'>4.8</span>(140 reviews)</p>
                        </div>
                    </div>
                    <div className='py-5 border-b space-y-2 '>
                        <h2 className='text-2xl font-semibold'>Colors</h2>
                        <div className='flex space-x-5 items-center'>
                            <div className='w-6 h-6 rounded-full bg-blue-500'></div>
                            <div className='w-6 h-6 rounded-full bg-red-500'></div>
                            <div className='w-6 h-6 rounded-full bg-black'></div>
                        </div>
                    </div>
                    <div className='py-5 border-b space-y-2 '>
                        <h2 className='text-2xl font-semibold'>Description</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia vero inventore doloremque officia ipsam est. Odit dignissimos quae dolorem cupiditate, esse nobis hic labore praesentium nesciunt nihil dicta minima molestiae aliquam quam sequi, asperiores optio.</p>                                                 
                    </div>
                    <div className='py-5 border-b space-y-2 flex justify-between'>
                        <div>
                            <h2 className='md:text-2xl font-semibold'>{selectedCar.model}</h2>
                            <p>Buy Now</p>
                        </div>
                        <button className='w-48 px-8 py-2 flex justify-between items-center rounded-md bg-indigo-500 text-white'>
                            <span className='text-xl font-bold'>${selectedCar.price}</span>
                            <span className="p-1 bg-white/20 rounded-lg">
                                <IoIosArrowRoundForward size={24} />
                            </span>
                        </button>                           
                    </div>
                </div>
            </div>
            <Footer />
        </div>        
    )
}

export default Details