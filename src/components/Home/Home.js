import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import Sidebar from './Sidebar';

const Home = () => {
    return (
        <div className='bg-gray-200 pt-10 px-10' >
            <div className='flex '>
                <div className='mr-5'>
                    <Sidebar />
                </div>

                <div>
                    <div className='flex justify-between items-center mb-5'>
                        <div class="text-sm breadcrumbs">
                            <ul>
                                <li><Link to={'/'}>Home </Link></li>
                                <li><Link to={'/'}>Home decoration</Link></li>
                                <li>Artificial</li>
                            </ul>
                        </div>
                        <div>
                            <select class="select select-bordered select-sm  max-w-xs">
                                <option disabled selected>sort by</option>
                                <option>price low to high</option>
                                <option>price high to low</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <Products />
                    </div>
                </div>



            </div>

        </div>
    );
};

export default Home;