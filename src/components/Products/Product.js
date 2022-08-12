import React, { useState } from 'react';
import { BsStarFill, BsStarHalf, BsHeartFill, BsHeart } from 'react-icons/bs';

const Product = ({ product }) => {
    const { id, name, img, catagory, ratings, oldPrice, cPrice, offer } = product;
    const [marked, setMarked] = useState(false);

    const handleBookMark = (id) => {
        setMarked(!marked)
    };

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <div className='relative'>
                    <img src={img} alt="pro" className='img-fluid' />
                    <span
                        className='absolute right-3 top-3 text-2xl font-bold text-error'
                        onClick={() => handleBookMark(id)}
                    >
                        {marked ? <BsHeartFill /> : <BsHeart />}
                    </span>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
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
                            <h3 className='text-3xl font-bold'>${cPrice}</h3>
                            <p className='text-lg ml-3'><del>{oldPrice ? `$${oldPrice}` : ''}</del></p>
                        </div>
                        <p className='text-success font-bold text-xl ml-5'>{oldPrice ? `${offer} off` : ''}</p>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default Product;