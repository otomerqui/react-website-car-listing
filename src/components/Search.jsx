import React from 'react';
import { MdOutlinePriceCheck } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";


const Search = ({ filters, setFilters }) => {
    const handleVendorChange = (e) => {
        setFilters({ ...filters, vendor: e.target.value });
        
    };
    const handleYearChange = (e) => {
        setFilters({ ...filters, year: e.target.value });
       
    };
    const handlePriceChange = (e) => {
        setFilters({ ...filters, price: e.target.value });
       
    };
    
    return (
    <div className='flex justify-center py-10 px-5'>
        <div className='flex flex-wrap justify-center items-center space-x-8 bg-gray-50 p-5 rounded-full'>
            <div>           
                <select 
                    className='bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200'
                    value={filters.vendor}
                    onChange={handleVendorChange}
                >
                    <option value="">Select a vendor</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="Ford">Ford</option>
                    <option value="Mercedes Benz">Mercedes Benz</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Dodge">Dodge</option>
                </select>
            </div>
            <div className='flex items-center space-x-5'> 
                <IoCalendarOutline size={24} />         
                <select 
                    className='bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200'
                    value={filters.year}
                    onChange={handleYearChange}
                >
                    <option value="">Select a year</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>               
                </select>
            </div>
            <div className='flex items-center space-x-5'>
                <MdOutlinePriceCheck size={24} />
                <select 
                    className='bg-transparent w-full border border-gray-50 rounded-md outline-0 focus:ring focus:ring-indigo-200'
                    value={filters.price}
                    onChange={handlePriceChange}
                >
                    <option value="">Min price</option>
                    <option value="20000">20000</option>
                    <option value="30000">30000</option>
                    <option value="40000">40000</option>
                    <option value="50000">50000</option>
                    <option value="60000">60000</option>
                    <option value="70000">70000</option>
                    <option value="80000">80000</option>
                    <option value="90000">90000</option>
                </select>
            </div>
    </div>
    </div>
    )
}

export default Search