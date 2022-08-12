import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Sidebar = () => {
    return (
        <div className='w-44  bg-white rounded-lg shadow-lg px-2'>
            <div className='flex items-center justify-between text-2xl font-semibold p-3 border-b-4'>
                <h2>Filter</h2>
                <HiMenuAlt3 />
            </div>

            {/* Brand */}
            <div className='pt-3 border-b-2'>
                <h3 className='text-lg font-bold mb-2'>Brand</h3>

                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        value={"coles"}
                        className="checkbox" />
                    <span className="label-text ml-2">Coles</span>
                </label>
                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"aldi"} />
                    <span className="label-text ml-2">Aldi</span>
                </label>
                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"woolworth"} />
                    <span className="label-text ml-2">Woolworth</span>
                </label>
                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"others"} />
                    <span className="label-text ml-2">Others</span>
                </label>
            </div>

            {/* Category */}
            <div className='pt-3 border-b-2'>
                <h3 className='text-lg font-bold mb-2'>Category</h3>

                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"plant"} />
                    <span className="label-text ml-2">Plant</span>
                </label>
                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"bag"} />
                    <span className="label-text ml-2">Bagpack</span>
                </label>
                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"food"} />
                    <span className="label-text ml-2">Food</span>
                </label>
                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"other"} />
                    <span className="label-text ml-2">Others</span>
                </label>
            </div>

            {/* Price */}
            <div className='mt-3'>
                <h3 className='text-lg font-bold mb-2'>Price</h3>

                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"fifty"} />
                    <span className="label-text ml-2"> &#60;$50 </span>
                </label>
                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"hundrad"} />
                    <span className="label-text ml-2">$51-$100</span>
                </label>
                <label className="flex items-center cursor-pointer mb-2">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"twoHundred"} />
                    <span className="label-text ml-2">$101-$200</span>
                </label>
                <label className="flex items-center cursor-pointer mb-2 pb-5">
                    <input
                        type="checkbox"
                        className="checkbox"
                        value={"thousand"} />
                    <span className="label-text ml-2">&#62;$201</span>
                </label>
            </div>
        </div>
    );
};

export default Sidebar;