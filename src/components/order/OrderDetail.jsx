import React from 'react'

const OrderDetail = () => {
    return (
        <article>
            <div className="container mx-auto max-w-lg py-6">
                <h1 className='font-barlow text-2xl font-600'>Position Absolute Acı Pizza</h1>
                <div className='flex justify-start items-end gap-8 py-6'>
                    <div className="font-barlow text-3xl font-700 mr-auto">85.50₺</div>
                    <span className='text-gray-400'>4.9</span>
                    <span className='text-gray-400'>(200)</span>
                </div>
                <p className='text-gray-600 leading-relaxed text-base'>
                    Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
                </p>
            </div>
        </article>
    )
}

export default OrderDetail
