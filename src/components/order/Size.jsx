import React from 'react'
import Radio from '../../UI/Radio'

const Size = () => {
    const sizes = [
        { label: 'Küçük', name: 'kucuk' },
        { label: 'Orta', name: 'orta' },
        { label: 'Büyük', name: 'buyuk' }
    ];

    return (
        <div>
            <h2 className='text-xl font-barlow font-600 mb-6'>Boyut Seç<span className='text-red-600 font-700'>*</span></h2>
            <div className='grid gap-4'>
                {sizes.map((size, index) => (
                    <Radio key={index} name='size' label={size.label} value={size.name} />
                ))}
            </div>
        </div>
    );
}

export default Size;