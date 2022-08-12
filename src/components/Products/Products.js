import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useProducts();
    const [sortType, setSortType] = useState('');

    //Sort Products By price
    useEffect(() => {
        if (sortType === 'lowTohigh') {
            const pro = products.sort((a, b) => a.cPrice < b.cPrice ? 1 : -1);
            setProducts(pro);
        } else if (sortType === 'highTolow') {
            const pro = products.sort((a, b) => a.cPrice > b.cPrice ? 1 : -1);
            setProducts(pro);
        }
    }, [products, setProducts, sortType]);



    return (
        <div>
            <div className='flex justify-between items-center mb-5'>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><Link to={'/'}>Home </Link></li>
                        <li><Link to={'/'}>Home decoration</Link></li>
                        <li>Artificial</li>
                    </ul>
                </div>
                <div>
                    <select className="select select-bordered select-sm  max-w-xs" onChange={(e) => setSortType(e.target.value)}>
                        <option disabled selected>sort by</option>
                        <option value={"lowTohigh"} >price low to high</option>
                        <option value={"highTolow"}>price high to low</option>
                    </select>
                </div>
            </div>


            <div className='grid gap-3 grid-cols-3'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>

    );
};

export default Products;