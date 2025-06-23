import React from 'react'
import TeamsSection from '../../components/employers/TeamsSection'

export const Employers = () => {
    return (
        <>
            <section className="w3l-inner-banner">
                <div className="wrapper">
                </div>
            </section>
            <section className="w3l-breadcrumns">
                <div className="wrapper">
                    <ul>
                        <li><a href="index.html">Home</a> <span className="fa fa-angle-double-right"></span></li>
                        <li>Resources <span className="fa fa-angle-double-right"></span></li>
                        <li>Top Employers</li>
                    </ul>
                </div>
            </section>

            <TeamsSection />
        </>
    )
}
