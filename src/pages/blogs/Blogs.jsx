import React from 'react'
import BlogGridSection from '../../components/blogs/BlogSectionGrid'

export const Blogs = () => {
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
                        <li>Blogs <span className="fa fa-angle-double-right"></span></li>
                        <li>Blogs and Resources</li>
                    </ul>
                </div>
            </section>

            <BlogGridSection />
        </>
    )
}
