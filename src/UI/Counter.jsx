import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Counter = ({ count, setCount }) => {
    const increase = () => setCount(prev => prev + 1);
    const decrease = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

    const handleChange = (e) => {
        const value = e.target.value;
        // Only allow numeric values
        if (/^\d+$/.test(value) || value === "") {
            setCount(value ? parseInt(value, 10) : 1);
        }
    };

    return (
        <div className="flex items-center h-fit rounded overflow-hidden ">
            <button
                type="button"
                onClick={decrease}
                className="px-4 h-11 py-3 cursor-pointer bg-yellow-400 leading-0  hover:bg-yellow-500"
            >
                <FaMinus className='w-2.5' />
            </button>
            <input
                type="text"
                value={count}
                onChange={handleChange}
                min="1"
                maxLength={2}
                className="w-full  h-11 text-center border-gray-200 focus:outline-0 focus:ring-0"
            />
            <button
                type="button"
                onClick={increase}
                className="px-4 h-11 py-3 cursor-pointer bg-yellow-400 leading-0  hover:bg-yellow-500"
            >
                <FaPlus className='w-2.5' />
            </button>
        </div>
    );
};

export default Counter;
