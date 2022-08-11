import React from 'react';
import { BsStarFill, BsStarHalf, BsHeart } from 'react-icons/bs';

const Product = ({ product }) => {
    const { name, img, catagory, ratings, oldPrice, Cprice, offer } = product;

    return (
        <div>
            <div class="card card-compact bg-base-100 shadow-xl">
                <div className='relative'>
                    <img src={img} alt="pro" className='img-fluid' />
                    <span className='absolute right-3 top-3 text-2xl font-bold text-success'><BsHeart /></span>
                </div>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className='-mt-2'>{catagory}</p>
                    <div className='flex '>
                        <div className='flex text-warning text-lg'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarHalf />
                        </div>
                        <span className='ml-4'>({ratings})</span>
                    </div>
                    <div className='flex items-end'>
                        <div className='flex items-end'>
                            <h3 className='text-3xl font-bold'>${Cprice}</h3>
                            <p className='text-lg ml-3'><del>{oldPrice ? `$${oldPrice}` : ''}</del></p>
                        </div>
                        <p className='text-success font-bold text-xl ml-5'>{oldPrice ? `${offer} off` : ''}</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Product;