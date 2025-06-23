import React from 'react'
import BlogSingle from '../components/jobs/BlogSingle'

export const Jobs = () => {
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
                        <li>Jobs</li>
                    </ul>
                </div>
            </section>

            <BlogSingle />
        </>
    )
}
