import { getImagePath } from "../../../utils/getImagePath";

const images = [
    getImagePath('blog1.jpg'), getImagePath('blog2.jpg'), getImagePath('blog3.jpg'),
    getImagePath('blog4.jpg'), getImagePath('blog5.jpg'), getImagePath('blog6.jpg'),
    getImagePath('blog7.jpg'), getImagePath('blog8.jpg')
];

const Portfolio = ({ portfolio }) => (
    <aside className="posts single-left-inner">
        <h5 className="card-title">Candidate Portfolio</h5>
        <div className="portfolio-grid">
            {portfolio.map((project, index) => (
                <a href="#portfolio" key={index}>
                    {
                        project.images.map((img, index) => (

                            <img key={index} src={`${img}`} className="img-responsive" alt="" />
                        ))
                    }
                    <span className="fa fa-link">{project.title}</span>
                </a>
            ))}
        </div>
    </aside>
);

export default Portfolio;
