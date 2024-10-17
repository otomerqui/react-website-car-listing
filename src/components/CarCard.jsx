import React, {useState} from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa6";
import { GiCarSeat } from "react-icons/gi";
import { Link } from "react-router-dom";

const CarCard = ({car}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
    <Link to= {`/cars/${car.model.replace(/\s+/g, '-').toLowerCase()}`} className="flex">
        <div className="border p-1 rounded-2xl flex">
            <div 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                className="w-[280px] z-0 p-5 bg-gray-100 gap-y-4 rounded-2xl h-full flex flex-col"
            >
                <h2 className="text-xl font-bold">{car.model}</h2>
                <span className="text-lg font-bold text-indigo-400">{car.year}</span> 
                <h3 className="flez items-start">
                    <span>$</span>
                    <span className="text-2xl font-bold">{car.price}</span>                    
                </h3>                 
                <img className="h-[180px] mb-auto" src={`/images/${car.image}.webp`} alt={car.model}/>
                {isHovered ? (
                    <button className="w-full p-3 bg-indigo-600/80 text-white rounded-lg">More info</button>
                ): (
                    <div className="flex justify-between">
                        <div className="flex flex-col items-center space-y-2 text-sm text-gray-500">
                            <GiSteeringWheel size={26} />
                            <p>Manual</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2 text-sm text-gray-500">
                            <GiCarSeat size={26} />
                            <p>4 seats</p>
                        </div>
                        <div className="flex flex-col items-center space-y-2 text-sm text-gray-500">
                            <FaGasPump size={26} />
                            <p>32 MPG</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
        
    </Link>
    )
}

export default CarCard;