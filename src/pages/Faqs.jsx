import React from 'react'
import FaqPage from '../components/faqs/FaqPage'

export const Faqs = () => {
    return (
        <>
            <section className="w3l-inner-banner">
                <div className="wrapper">
                </div>
            </section>
            <section className="w3l-breadcrumns bg-white">
                <div className="wrapper">
                    <ul>
                        <li><a href="index.html">Home</a> <span className="fa fa-angle-double-right"></span></li>
                        <li>Resources <span className="fa fa-angle-double-right"></span></li>
                        <li>Frequently asked questions</li>
                    </ul>
                </div>
            </section>

            <FaqPage />
        </>
    )
}
