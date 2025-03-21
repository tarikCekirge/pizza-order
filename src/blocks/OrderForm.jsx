import React from 'react'
import Size from '../components/order/size'
import Select from '../components/order/Select'
import CheckArea from '../components/order/CheckArea'
import TextArea from '../components/order/TextArea'

const OrderForm = () => {
    return (
        <div className='container mx-auto max-w-lg py-12'>
            <form>
                <div className='grid grid-cols-2 gap-4 py-6'>
                    <Size />
                    <Select />
                </div>
                <div className='py-6'>
                    <CheckArea />
                </div>
                <div>
                    <TextArea />
                </div>
            </form>
        </div>
    )
}

export default OrderForm
