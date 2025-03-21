import React from 'react'
import CheckBox from '../../UI/CheckBox';

const CheckArea = () => {
    const checks = [
        { id: 1, name: 'Pepperoni' },
        { id: 2, name: 'Sosis' },
        { id: 3, name: 'Kanada Jambonu' },
        { id: 4, name: 'Tavuk Izgara' },
        { id: 5, name: 'Soğan' },
        { id: 6, name: 'Domates' },
        { id: 7, name: 'Mısır' },
        { id: 8, name: 'Sucuk' },
        { id: 9, name: 'Jalapeno' },
        { id: 10, name: 'Sarımsak' },
        { id: 11, name: 'Biber' },
        { id: 12, name: 'Kabak' },
        { id: 13, name: 'Ananas' },
        { id: 14, name: 'Mozzarella Peyniri' },
        { id: 15, name: 'Parmesan Peyniri' },
        { id: 16, name: 'Mantar' },
        { id: 17, name: 'Zeytin' },
        { id: 18, name: 'Yeşil Biber' },
        { id: 19, name: 'Rokfor Peyniri' },
        { id: 20, name: 'Ton Balığı' }
    ];

    return (
        <div className='py-12'>
            <h2 className="text-xl font-barlow font-semibold mb-6">
                Ek Malzemeler<span className="text-red-600 font-bold"></span>
            </h2>
            <p className='text-gray-600 leading-relaxed text-base mb-2'>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 py-4'>
                {checks.map((check, index) => (
                    <CheckBox key={index} index={index} check={check} />
                ))}
            </div>

        </div>
    )
}

export default CheckArea
