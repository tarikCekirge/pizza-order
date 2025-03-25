import React from 'react';

const OrderDetail = ({ pizzaDetail }) => {
    return (
        <article>
            <div className="container mx-auto max-w-xl py-6">
                <h1 className='font-barlow text-2xl font-semibold'>{pizzaDetail.name}</h1>

                <div className='flex justify-start items-end gap-8 py-6'>
                    <div className="font-barlow text-3xl font-semibold mr-auto">
                        {pizzaDetail.price}₺
                    </div>
                    <span className='text-gray-400'>{pizzaDetail.rating}</span>
                    <span className='text-gray-400'>({pizzaDetail.reviews})</span>
                </div>

                <p className='text-gray-600 leading-relaxed text-base'>
                    {pizzaDetail.description}
                </p>
            </div>
        </article>
    );
}

export default OrderDetail;
