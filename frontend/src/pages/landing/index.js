import React from 'react';
import PageLayout from '../layout';
import HeaderSection from '../../components/landingPage/HeaderSection/HeaderSection';
import HowToSection from '../../components/landingPage/HowToSection/HowToSection';
import ReviewSection from '../../components/landingPage/ReviewSection/ReviewSection';

const LandingPage = () => {
    return (
        <PageLayout>
            <HeaderSection />

            <HowToSection />

            <ReviewSection />
        </PageLayout>
    );
};

export default LandingPage;
