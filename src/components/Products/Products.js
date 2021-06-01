import React from 'react';
import product_image from '../../images/3.png'
import './Products.css';

const Products = () => {
    return (
        <div className="products">
            <p className="title">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
            <img src={product_image} alt="" />
            <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>

            <hr />

            <h6>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>

            <p>CHEMICALS <span>&#124;</span> PROCESS POWER WATER <span>&#124;</span> WASTE WATER OILS <span>&#124;</span> GAS PHARMA SUGARS <span>&#124;</span> DISTILLERIES PAPER <span>&#124;</span> PULP MARINE <span>&#124;</span> DEFENCE METAL <span>&#124;</span> MINING FOOD & BEVERAGE <span>&#124;</span>  PETROCHEMICAL & REFINERIES <span>&#124;</span> SOLAR <span>&#124;</span> BUILDING <span>&#124;</span> HVAC <span>&#124;</span> FIRE FIGHTING <span>&#124;</span> AGRICULTURE & RESIDENTIAL</p>

        </div>
    );
};

export default Products;