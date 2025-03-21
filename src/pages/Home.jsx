import React from 'react';
import bgDesktop from '../assets/bg-desktop.jpg';
import bgMobile from '../assets/bg-mobile.png';
import Leading from '../components/Leading';
import SiteLogo from '../components/site-logo';
import Container from '../components/Container';
import LinkButton from '../components/LinkButton';
import useScreenSize from '../hooks/useScreenSize';

const HomePage = () => {
    const { width } = useScreenSize();
    const backgroundImage = width < 768 ? bgMobile : bgDesktop;
    const bgClass = width < 768 ? 'bg-bottom bg-contain' : 'bg-center bg-cover';

    return (
        <section
            className={`bg-red-600 w-full h-screen ${bgClass} bg-no-repeat `}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Container className="h-full flex flex-col justify-start items-center py-16 md:py-16 xl:py-20 gap-8 lg:gap-10">
                <SiteLogo />
                <Leading className="text-white text-center">
                    KOD ACIKTIRIR <br />
                    PİZZA, DOYURUR <br />
                </Leading>
                <LinkButton to="/success" text={'ACIKTIM'} />
            </Container>
        </section>
    );
};

export default HomePage;
