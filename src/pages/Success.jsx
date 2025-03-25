import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Container from '../components/Container';
import Leading from '../components/Leading';
import SiteLogo from '../components/site-logo';

const SuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const orderComplated = location.state?.order;
    useEffect(() => {
        if (!orderComplated) {
            navigate('/');
        }
    }, [orderComplated, navigate]);

    if (!orderComplated) return null;

    return (
        <section className='bg-red-600 w-full h-screen'>
            <Container className="h-full flex flex-col justify-between items-center py-16 md:py-16 xl:py-20">
                <SiteLogo />
                <div className='my-auto'>
                    <Leading className='text-white'>
                        TEBRİKLER! <br />
                        SİPARİŞİNİZ ALINDI!
                    </Leading>
                    <div className="bg-white p-6 rounded-md pb-6 mt-4 max-w-2xl w-full mx-auto shadow-2xl">
                        <h2 className="text-2xl font-bold text-red-600  text-center mb-2">Sipariş Detayları</h2>
                        <p><strong>Pizza Adı:</strong> {orderComplated.pizzaName}</p>
                        <p><strong>Adet:</strong> {orderComplated.pizzaCount}</p>
                        <p><strong>Toplam Tutar:</strong> {orderComplated.totalPrice}₺</p>
                        <NavLink to={'/'} className='bg-red-600 text-lg text-white block text-center font-600 rounded-full max-w-xs mx-auto py-3 px-6 mt-4'>
                            Anasayfa'ya Dön
                        </NavLink>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default SuccessPage;
