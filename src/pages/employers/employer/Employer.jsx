import React, { useState } from 'react'
import BlogSingleSection from '../../../components/employers/employer/BlogSingleSection'
import { getImagePath } from '../../../utils/getImagePath'
import employerData from '../../../data/employerData'
import { useParams } from 'react-router-dom'


export const Employer = () => {
    const {id} = useParams()
    const currentEmployer = employerData.find(post => post.id === parseInt(id, 10))

    const [employer, setEmployer] = useState(currentEmployer || [])
    
    const {name, position, img, aboutEmployer, jobs,   employersDetails} = employer 
    return (
        <>
            <section className="w3l-employer-detail-banner">
                <div className="wrapper">
                    <div className="d-grid employer-grid">
                        <div className="employer-title">
                            <img src={img} className="img-responsive" alt="" />
                        </div>
                        <div className="employer-name">
                            <h4>{name}</h4>
                            <p>{position}</p>
                        </div>
                        <div className="employer-apply">
                            <a href="#facebook" className="facebook"> <span className="fa fa-facebook-square"></span> </a>
                            <a href="#facebook" className="twitter"> <span className="fa fa-twitter-square"></span> </a>
                            <a href="#linkedin" className="linkedin"> <span className="fa fa-linkedin-square"></span> </a>
                        </div>
                    </div>
                </div>
            </section>

            <BlogSingleSection aboutEmployer={aboutEmployer} jobs={jobs} employersDetails={employersDetails} />
        </>
    )
}
