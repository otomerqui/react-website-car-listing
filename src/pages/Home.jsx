import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Cars from '../components/Cars';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

const Home = ({cars}) => {
    
    const [randomCars, setRandomCars] = useState([]);

    const getRandomCars = () => {
        const shuffledCars = cars.sort(() => 0.5 - Math.random()); // Mezclar autos
        return shuffledCars.slice(0, 4); // Seleccionar los primeros 4
    };

    // Actualizar los autos aleatorios solo al cargar o cuando cambien los filtros
    useEffect(() => {
        // Si hay autos disponibles después de filtrar, seleccionar aleatorios
        if (cars.length > 0) {
        setRandomCars(getRandomCars());
        }
    }, [cars]); // Solo ejecutar cuando los filtros cambian
    
    return (
        <div>
            <Navbar />
            <Hero backgroundImage={`/images/hero_home.webp`} title="The best cars in the city" />  
            <div className='py-10 w-11/12 md:w-5/5 m-auto'>
                <h2 className='text-3xl font-bold text-black text-center'>Our Latest cars</h2>
            </div>             
            <Cars cars={randomCars} />
            <div className='w-full flex justify-center py-10'>
            <Link to="/cars"><button className='px-8 py-3 rounded-xl text-indigo-600 font-semibold border-2  border-indigo-600 hover:bg-indigo-500 hover:text-white'>More cars</button></Link>
        </div>
            <Footer />
        </div>
    )
};

export default Home