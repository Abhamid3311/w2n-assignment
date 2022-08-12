import React, { useEffect } from 'react';
import { useState } from 'react';

import Products from '../Products/Products';
import Sidebar from './Sidebar';

const Home = () => {
    const [products, setProducts] = useState();
    

    const price = products?.filter(pro => pro.Cprice < 50);
    console.log(price);




    return (
        <div className='bg-gray-200 pt-10 px-10' >
            <div className='flex flex-col lg:flex-row'>
                <div className='mr-5'>
                    <Sidebar />
                </div>

                <div>
                    <Products />
                </div>


                {/* <Sort /> */}
            </div>

        </div>
    );
};

export default Home;