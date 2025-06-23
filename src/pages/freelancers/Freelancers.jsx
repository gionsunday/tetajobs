import React from 'react'
import TeamSection from '../../components/freelancers/TeamSection'

export const Freelancers = () => {
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
                        <li>Resources <span class="fa fa-angle-double-right"></span></li>
                        <li>Top Freelancers</li>
                    </ul>
                </div>
            </section>

            <TeamSection />
        </>
    )
}
