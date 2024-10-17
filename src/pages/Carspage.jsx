import React from 'react';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Cars from '../components/Cars';
import Footer from '../components/Footer';
import { useState } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';


const Carspage = ({cars}) => {
    
    const [filters, setFilters] = useState({ vendor: '', year: '', price: '' });

    // Filtrar autos en función de los filtros seleccionados
    const filteredCars = cars.filter(car => {
       
        return (
            (filters.vendor === '' || car.vendor === filters.vendor) &&
            (filters.year === '' || car.year.toString() === filters.year) &&
            (filters.price === '' || car.price.toString() >= filters.price)
        );
    })
    .sort((a, b) => a.price - b.price); 
    return (
        <div>
            <Navbar />
            <Hero backgroundImage={`/images/hero_cars.webp`} title="Find your dream car" />
            <div className='w-11/12 md:w-4/5 m-auto py-10 flex flex-col md:flex-row justify-between md:space-x-10'>
                <p className='text-lg text-center'><Link to="/">Home</Link> {">"} <span className='font-semibold text-indigo-500'>Cars</span></p>
            </div>
            <div className='py-5 w-11/12 md:w-5/5 m-auto'>
                <h2 className='text-3xl font-bold text-black text-center'>We have 19 cars available</h2>
            </div>  
            <Search filters={filters} setFilters={setFilters} />
            <Cars cars={filteredCars} />
            <Footer />
        </div>
    )
};

export default Carspage;