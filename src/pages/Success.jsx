import React from 'react'
import Container from '../components/Container'
import Leading from '../components/Leading'
import SiteLogo from '../components/site-logo'

const SuccessPage = () => {
    return (
        <section className='bg-red-600 w-full h-screen'>
            <Container className="h-full flex flex-col justify-between items-center lg:py-36">
                <SiteLogo />
                <Leading className='text-white my-auto'>
                    TEBRİKLER! <br />
                    SİPARİŞİNİZ ALINDI!
                </Leading>
            </Container>
        </section>

    )
}

export default SuccessPage