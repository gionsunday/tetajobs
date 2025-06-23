

import React, { use, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import AboutMe from './AboutMe';
import CustomFields from './CustomFields';
import Skills from './Skills';
import EducationExperience from './EducationExperience';
import CandidateDetails from './CandidateDetails';
import ContactForm from './ContactForm';
import Portfolio from './Portfolio';
import { getImagePath } from '../../../utils/getImagePath';
import teamData from '../../../data/teamData';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Freelancer = () => {
       const { id } = useParams();
    const member = teamData.find(member => member.id === parseInt(id, 10));
    const [freelancer, setFreelancer] = React.useState(member || {});

    const resumeRef = useRef();
 
    console.log(teamData,id)


  
// console.log(member)
//     useEffect(() => {
//         if (id) {
//             const member = teamData.find(member => member.id === parseInt(id, 10));
//             if (member) {
//                 console.log("Freelancer Data:", member);
//                 console.log(member)
//                 setFreelancer(member);

//             } else {
//                 console.error('Member not found');
//             }
//         }
//     }, []);

    const { image, name, role, location, summary, details, educationData, skills, fields, portfolio } = freelancer


    console.log(freelancer)

    const handleDownloadPDF = () => {
        const input = resumeRef.current;
        html2canvas(input, { scale: 2 }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('resume.pdf');
        });
    };
    return (
        <>
            <section className="w3l-employer-detail-banner">
                <div className="wrapper">
                    <div className="d-grid employer-grid">
                        <div className="employer-title">
                            <img src={image} className="img-responsive" alt="" />
                        </div>
                        <div className="employer-name">
                            <h4>{name}</h4>
                            <p>{role}</p>
                        </div>
                        <div className="employer-apply">
                            <a href="#facebook" className="facebook"> <span className="fa fa-facebook-square"></span> </a>
                            <a href="#facebook" className="twitter"> <span className="fa fa-twitter-square"></span> </a>
                            <a href="#linkedin" className="linkedin"> <span className="fa fa-linkedin-square"></span> </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w3l-blog-single">
                <div className="single blog">
                    <div className="wrapper">
                        <div className="d-grid grid-colunm-2" ref={resumeRef}>
                            <div className="single-left">
                                <AboutMe summary={summary} />
                                <CustomFields fields={fields} />
                                <Skills skills={skills} />
                                <EducationExperience educationData={educationData} />
                            </div>
                            <div className="right-side-bar">
                                <CandidateDetails details={details} hideButton savePdf={handleDownloadPDF} />
                                <ContactForm />
                                <Portfolio portfolio={portfolio} />
                            </div>
                        </div>
                        {/* <div style={{ marginTop: '20px' }}>
                            <button href='#' onClick={handleDownloadPDF} style={{border:"2px solid darkred", padding:"10px"}} className="btn-fo">Save Resume</button>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Freelancer;
