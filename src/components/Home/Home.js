import React, { useEffect } from 'react';
import { useState } from 'react';
import useProducts from '../../hooks/useProducts';

import Products from '../Products/Products';
import Sidebar from './Sidebar';

const Home = () => {
    const [products, setProducts] = useProducts();


    // Filter Functionality
    
    //Checked By Price 
    const lessFifty = products?.filter(pro => pro.cPrice <= 50);

    const lessHundred = products?.filter(pro => pro.cPrice >= 51 && pro.cPrice <= 100);

    const lessTwoHundred = products?.filter(pro => pro.cPrice >= 101 && pro.cPrice <= 200);

    const twoHundredPlus = products?.filter(pro => pro.cPrice > 200);


    /*   console.log(lessFifty);
      console.log(lessHundred);
      console.log(lessTwoHundred);
      console.log(twoHundredPlus); */

    //Checked by Brand
    const coles = products?.filter(pro => pro.brand === "coles");
    const aldi = products?.filter(pro => pro.brand === "aldi");
    const woolworth = products?.filter(pro => pro.brand === "woolworth");
    const others = products?.filter(pro => pro.brand !== "coles" && "aldi" && "woolworth");

    console.log(others);

    //Checked by catagory
    const food = products?.filter(pro => pro.catagory === "food");
    const camera = products?.filter(pro => pro.catagory === "camera");
    const plant = products?.filter(pro => pro.catagory === "plant");
    const bagpack = products?.filter(pro => pro.catagory === "plant");
    const other = products?.filter(pro => pro.catagory !== "food" && "camera" && "bagpack" && "plant");

    console.log(other);






    return (
        <div className='bg-gray-200 pt-10 px-10' >
            <div className='flex flex-col lg:flex-row'>
                <div className='mr-5'>
                    <Sidebar />
                </div>

                <div>
                    <Products />
                </div>



            </div>

        </div>
    );
};

export default Home;