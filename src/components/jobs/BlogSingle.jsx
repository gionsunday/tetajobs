import React, { useState, useEffect, useMemo, lazy, Suspense, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import { useParams, useSearchParams } from 'react-router-dom';
import allJobs from '../../data/jobData';
import { useNavigate } from 'react-router-dom';

const JobCard = lazy(() => import('../ui/JobCard'));

const FilterSection = ({ title, options, selected, onFilterChange }) => (
  <aside className="posts single-left-inner">
    <h5 className="search">{title}</h5>
    {options.map((label, index) => (
      <div className="brand-equal" key={index}>
        <input
          type="checkbox"
          className="checked"
          checked={selected.includes(label)}
          onChange={() => onFilterChange(label)}
        />
        <label className="brand-name">{label}</label>
      </div>
    ))}
  </aside>
);

const BlogSingle = () => {
  const [searches] = useSearchParams()
  // console.log(searches)




  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobTitle, setJobTitle] = useState(searches.get("jobtitle"))
  const [category, setCategory] = useState(searches.get("category"))
  const [location, setLocation] = useState(searches.get("location"))
  const [loading, setLoading] = useState(false);

  console.log(category)

  const jobsPerPage = 6;

  const fetchJobs = async () => {
    try {
      setLoading(true);
      // const response = await axios.get('https://jsearch.p.rapidapi.com/search', {
      //   headers: {
      //     'X-RapidAPI-Key': '6310c2ad85msh212b8a229e73164p1cda95jsn59a4d2c64d58',
      //     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
      //   },
      //   params: {
      //     query: searchTerm || 'developer',
      //     num_pages: 5,
      //   },
      // });
      setJobs(allJobs || []);
      setCurrentPage(1);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [searchTerm]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
    }, 500),
    []
  );

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  const handleFilterChange = (label, selected, setSelected) => {
    setCurrentPage(1);
    setSelected(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const title = job.title?.toLowerCase() || '';
      const jobCategory = job.category?.toLowerCase() || '';
      const jobLocation = job.location?.toLowerCase() || '';

      const matchSearch =
        !searchTerm ||
        title.includes(searchTerm.toLowerCase()) ||
        jobCategory.includes(searchTerm.toLowerCase()) ||
        jobLocation.includes(searchTerm.toLowerCase());

      const matchCategory =
        !category || jobCategory.includes(category.toLowerCase());

      const matchLocation =
        !location || jobLocation.includes(location.toLowerCase());

      const matchJobTitle =
        !jobTitle || title.includes(jobTitle.toLowerCase());

            const matchType =
        selectedTypes.length === 0 || selectedTypes.includes(job.type);

      const level = job.experience || '';
      const matchLevel =
        selectedLevels.length === 0 ||
        selectedLevels.some(lvl => level.toLowerCase().includes(lvl.toLowerCase()));

      const categoryCheck = job.category || '';
      const matchCategorCheck =
        selectedCategories.length === 0 ||
        selectedCategories.some(cat => categoryCheck.toLowerCase().includes(cat.toLowerCase()));

      return matchSearch && matchCategory && matchLocation && matchJobTitle && matchLevel && matchCategorCheck && matchType;
    });
  }, [jobs, searchTerm, category, location, jobTitle, selectedLevels, selectedCategories, selectedTypes]);
  // const filteredJobs = useMemo(() => {
  //   return jobs.filter(job => {
  //     const matchKeyword =
  //       searchTerm.trim() === '' ||
  //       job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       job.location?.toLowerCase().includes(searchTerm.toLowerCase()) || 
  //       job.category?.toLowerCase().includes(searchTerm.toLowerCase());

  //     const matchType =
  //       selectedTypes.length === 0 || selectedTypes.includes(job.type);

  //     const level = job.experience || '';
  //     const matchLevel =
  //       selectedLevels.length === 0 ||
  //       selectedLevels.some(lvl => level.toLowerCase().includes(lvl.toLowerCase()));

  //     const category = job.category || '';
  //     const matchCategory =
  //       selectedCategories.length === 0 ||
  //       selectedCategories.some(cat => category.toLowerCase().includes(cat.toLowerCase()));

  //     return matchKeyword && matchType && matchLevel && matchCategory;
  //   });
  // }, [jobs, selectedTypes, selectedLevels, selectedCategories, searchTerm]);

  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage
  );

  const navigator = useNavigate()
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <section className="w3l-blog-single no-padding">
      <div className="single blog">
        <div className="wrapper">
          <div className="d-grid grid-colunm-2">
            <div className="single-left">
              <h5 className="card-title">Featured Jobs</h5>
              <div className="w3l-price-2">
                <Suspense fallback={<p>Loading jobs...</p>}>
                  {loading ? (
                    <div className="flex justify-center py-10">
                      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                    </div>
                  ) : paginatedJobs.length === 0 ? (
                    <p style={{ textAlign: 'center', marginTop: '2rem' }}>🚫 No jobs found. Try adjusting filters or search.</p>
                  ) : (
                    paginatedJobs.map((job, index) => <JobCard key={index} job={job} />)
                  )}
                </Suspense>

                <div className="pagination-controls" style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem',
                  marginTop: '1.5rem'
                }}>
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    style={{ padding: '6px 14px', cursor: 'pointer', border: '1px solid #ccc', background: '#f5f5f5' }}
                  >
                    Prev
                  </button>
                  <span>Page {currentPage} of {totalPages}</span>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    style={{ padding: '6px 14px', cursor: 'pointer', border: '1px solid #ccc', background: '#f5f5f5' }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="right-side-bar">
              <aside className="posts single-left-inner">
                <h5 className="search">Search by keywords</h5>
                <form className="form-inline search-form" onSubmit={(e) => e.preventDefault()}>
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search here"
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                  />
                  <button className="btn text-wh mt-3 w-100" type="submit">
                    <span className="fa fa-search"></span>
                  </button>
                </form>
              </aside>

              <FilterSection
                title="Job Type"
                options={['Full-time', 'Part-time', 'Contract', 'Internship', 'Temporary']}
                selected={selectedTypes}
                onFilterChange={(label) => handleFilterChange(label, selectedTypes, setSelectedTypes)}
              />

              <FilterSection
                title="Job Level"
                options={['Entry', 'Mid', 'Senior']}
                selected={selectedLevels}
                onFilterChange={(label) => handleFilterChange(label, selectedLevels, setSelectedLevels)}
              />

              <FilterSection
                title="Job Category"
                options={['Software developer', 'Development', 'Customer service', 'Designing', 'Marketing', 'Sales']}
                selected={selectedCategories}
                onFilterChange={(label) => handleFilterChange(label, selectedCategories, setSelectedCategories)}
              />

              <button
                className="mt-4 w-full bg-red-500 text-white py-2 px-3 rounded hover:bg-red-600"
                onClick={() => {
                  navigator("/jobs")
                  setSelectedTypes([]);
                  setSelectedLevels([]);
                  setSelectedCategories([]);
                  setSearchTerm('');
                  setInputValue('');
                  setJobTitle('');
                  setCategory('');
                  setLocation('');
                  setCurrentPage(1);
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
