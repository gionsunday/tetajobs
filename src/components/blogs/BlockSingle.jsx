import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import blogPosts from '../../data/data'

export const BlockSingle = () => {
    const {id, title } = useParams();
    
    console.log(id, title);
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
                        <li>Blog <span className="fa fa-angle-double-right"></span></li>
                        <li>Blog single </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
