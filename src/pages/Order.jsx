import React, { useState } from 'react';
import OrderDetail from '../components/order/OrderDetail';
import OrderForm from '../components/order/OrderForm';

const pizzaDetailData = {
    name: 'Position Absolute Acı Pizza',
    price: 85.50,
    rating: 4.9,
    reviews: 200,
    description: 'Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.'
};

const OrderPage = () => {
    const [pizzaDetail, setPizzaDetail] = useState(pizzaDetailData);

    return (
        <>
            <OrderDetail pizzaDetail={pizzaDetail} />
            <OrderForm pizzaDetail={pizzaDetail} />
        </>
    );
};

export default OrderPage;
