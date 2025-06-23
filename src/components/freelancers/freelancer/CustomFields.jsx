// const fields = [
//   { title: 'Birth City', value: 'Newyork' },
//   { title: 'Martial status', value: 'Single' },
//   { title: 'Searching for job', value: 'Yes' },
//   { title: 'Joining date', value: '2nd sep, 1995' },
//   { title: 'Family members', value: '4 siblings' },
//   { title: 'Job experience', value: '3years of exp' }
// ];

const CustomFields = ({ fields }) => {

    return (
        <div className="single-left-inner">
            <h5 className="card-title">Custom fields</h5>
            <div className="d-grid main-grid">
                {fields.map((field, index) => (
                    <div className="job-info1" key={index}>
                        <span className="fa fa-check-square-o"></span>
                        <div className="job-info-grid">
                            <h4>{field.title}</h4>
                            <p>{field.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CustomFields;
