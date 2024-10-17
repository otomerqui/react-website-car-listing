import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-white sticky top-0 z-40 py-5'>
            <div className='w-11/12 md:w-4/5 m-auto flex justify-between items-center'>
                <Link to="/">
                    <h1 className='text-4xl font-bold'>BuyCar</h1>
                </Link>

                {/* Icono de hamburguesa visible solo en pantallas hasta 921px */}
                <div className='lg:hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Menú de navegación para pantallas más grandes */}
                <ul className={`hidden lg:flex space-x-5 text-base font-semibold`}>
                    <Link to="/">
                        <li className='cursor-pointer border-b-2 border-transparent hover:border-indigo-500'>Home</li>
                    </Link>
                    <Link to="/cars">
                        <li className='cursor-pointer border-b-2 border-transparent hover:border-indigo-500'>Cars</li>
                    </Link>
                    <Link to="/contact">
                        <li className='cursor-pointer border-b-2 border-transparent hover:border-indigo-500'>Contact Us</li>
                    </Link>
                </ul>

                {/* Botones de registro e inicio de sesión para pantallas más grandes */}
                <div className='hidden lg:flex items-center space-x-5'>
                    <button className='px-5 py-2 text-white rounded-md border border-indigo-500 bg-indigo-500 font-semibold hover:bg-transparent hover:text-indigo-500'>Register</button>
                    <button className='px-5 py-2 border border-indigo-600 rounded-md text-indigo-600 font-semibold hover:bg-indigo-500 hover:text-white'>SignIn</button>
                </div>
            </div>

            {/* Menú desplegable cuando se activa el menú hamburguesa */}
            {isOpen && (
                <div className='lg:hidden bg-white w-full text-center py-5'>
                    <ul className='p-5 text-base font-semibold text-left'>
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            <li className='cursor-pointer py-2 border-b-2 border-transparent hover:border-indigo-500'>Home</li>
                        </Link>
                        <Link to="/cars" onClick={() => setIsOpen(false)}>
                            <li className='cursor-pointer py-2 border-b-2 border-transparent hover:border-indigo-500'>Cars</li>
                        </Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}>
                            <li className='cursor-pointer py-2 border-b-2 border-transparent hover:border-indigo-500'>Contact Us</li>
                        </Link>
                    </ul>

                    {/* Botones de registro e inicio de sesión dentro del menú desplegable */}
                    <div className='flex justify-start p-5 space-x-3'>
                        <button className='px-5 py-2 text-white rounded-md border border-indigo-500 bg-indigo-500 font-semibold hover:bg-transparent hover:text-indigo-500'>Register</button>
                        <button className='px-5 py-2 border border-indigo-600 rounded-md text-indigo-600 font-semibold hover:bg-indigo-500 hover:text-white'>SignIn</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
