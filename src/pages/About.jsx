import React from 'react'
import AboutFeatureSection from '../components/about/AboutFeaturesSection'
import HowItWorksSection from '../components/about/HowItWorksSection'
import CounterSection from '../components/about/CounterSection'
import CallToAction from '../components/home/CallToAction'
import TestimonialSection from '../components/about/TestimonialSection'

export const About = () => {
    return (
        <>
            <section class="w3l-inner-banner">
                <div class="wrapper">
                </div>
            </section>
            <section class="w3l-breadcrumns">
                <div class="wrapper">
                    <ul>
                        <li><a href="index.html">Home</a> <span class="fa fa-angle-double-right"></span></li>
                        <li>About us</li>
                    </ul>
                </div>
            </section>

            <AboutFeatureSection />
            <HowItWorksSection />
            <CounterSection />
            <CallToAction />
            <TestimonialSection />
        </>
    )
}
