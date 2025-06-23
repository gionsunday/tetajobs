import { getImagePath } from "../utils/getImagePath";

const employerData = [
  {  
    id:1,
    name: "Sergio Pliego",
    position: "Head of Product",
    aboutEmployer:
      "Sophia leads the product vision with strategic insights and deep customer empathy. She ensures that the development process remains user-focused and delivers tangible results.",
    
    img:getImagePath("e1.jpg"),
      jobs: [
      {
        imgSrc: getImagePath("job1.png"),
        title: "UI/UX Designer",
        location: "New York",
        role: "Product Designer",
        type: "Remote",
        time: "2 days ago",
      },
      {
        imgSrc: getImagePath("job2.png"),
        title: "Product Manager",
        location: "Remote",
        role: "Management",
        type: "Fulltime",
        time: "1 week ago",
      },
    ],
    employersDetails: [
      { icon: "fa-briefcase", title: "Member since", content: "March 2018" },
      { icon: "fa-map-marker", title: "Location", content: "Brooklyn, NY" },
      { icon: "fa-users", title: "Employees", content: "50+" },
      { icon: "fa-envelope-open", title: "Email address", content: "[email protected]" },
      { icon: "fa-phone", title: "Contact number", content: "+1 555 123 4567" },
    ],
  },
  {
    id:2,
    name: "David Chen",
    position: "CTO of Innovatek",
     img:getImagePath("e2.jpg"),
    aboutEmployer:
      "David oversees the technology and infrastructure of Innovatek. With over 15 years in the industry, he brings a wealth of knowledge and technical leadership.",
    jobs: [
      {
        imgSrc: getImagePath("job5.png"),
        title: "Backend Developer",
        location: "Toronto",
        role: "Software Developer",
        type: "Fulltime",
        time: "5 days ago",
      },
      {
        imgSrc: getImagePath("job6.png"),
        title: "DevOps Engineer",
        location: "Canada",
        role: "Infrastructure",
        type: "Contract",
        time: "3 days ago",
      },
    ],
    employersDetails: [
      { icon: "fa-briefcase", title: "Member since", content: "July 2015" },
      { icon: "fa-map-marker", title: "Location", content: "Toronto, CA" },
      { icon: "fa-users", title: "Employees", content: "100+" },
      { icon: "fa-envelope-open", title: "Email address", content: "[email protected]" },
      { icon: "fa-phone", title: "Contact number", content: "+1 416 987 6543" },
    ],
  },
  {
    id:3,
    name: "Amira Osei",
    position: "Creative Director",
     img:getImagePath("e3.jpg"),
    aboutEmployer:
      "Amira heads the creative team at BrandBridge. Her background in design and marketing allows her to bring brand stories to life across all media platforms.",
    jobs: [
      {
        imgSrc: getImagePath("job7.png"),
        title: "Graphic Designer",
        location: "Accra",
        role: "Visual Design",
        type: "Part-time",
        time: "Today",
      },
      {
        imgSrc: getImagePath("job8.png"),
        title: "Content Strategist",
        location: "Remote",
        role: "Marketing",
        type: "Contract",
        time: "3 days ago",
      },
    ],
    employersDetails: [
      { icon: "fa-briefcase", title: "Member since", content: "May 2020" },
      { icon: "fa-map-marker", title: "Location", content: "Accra, Ghana" },
      { icon: "fa-users", title: "Employees", content: "20+" },
      { icon: "fa-envelope-open", title: "Email address", content: "[email protected]" },
      { icon: "fa-phone", title: "Contact number", content: "+233 245 000 123" },
    ],
  },
  {
    id:4,
    name: "Liam Bennett",
    position: "Founder & CEO",
     img:getImagePath("e4.jpg"),
    aboutEmployer:
      "Liam founded FinTechHive to revolutionize the financial services space. His mission is to make finance more accessible and inclusive for everyone.",
    jobs: [
      {
        imgSrc: getImagePath("job9.png"),
        title: "Data Analyst",
        location: "Berlin",
        role: "Analytics",
        type: "Internship",
        time: "Yesterday",
      },
      {
        imgSrc: getImagePath("job10.png"),
        title: "Blockchain Developer",
        location: "Germany",
        role: "Engineering",
        type: "Fulltime",
        time: "6 days ago",
      },
    ],
    employersDetails: [
      { icon: "fa-briefcase", title: "Member since", content: "January 2021" },
      { icon: "fa-map-marker", title: "Location", content: "Berlin, Germany" },
      { icon: "fa-users", title: "Employees", content: "10-15" },
      { icon: "fa-envelope-open", title: "Email address", content: "[email protected]" },
      { icon: "fa-phone", title: "Contact number", content: "+49 30 12345678" },
    ],
  },


   {  
    id:5,
    name: "Sergio Pliego",
    position: "Head of Product",
    aboutEmployer:
      "Sophia leads the product vision with strategic insights and deep customer empathy. She ensures that the development process remains user-focused and delivers tangible results.",
    
    img:getImagePath("e5.jpg"),
      jobs: [
      {
        imgSrc: getImagePath("job1.png"),
        title: "UI/UX Designer",
        location: "New York",
        role: "Product Designer",
        type: "Remote",
        time: "2 days ago",
      },
      {
        imgSrc: getImagePath("job2.png"),
        title: "Product Manager",
        location: "Remote",
        role: "Management",
        type: "Fulltime",
        time: "1 week ago",
      },
    ],
    employersDetails: [
      { icon: "fa-briefcase", title: "Member since", content: "March 2018" },
      { icon: "fa-map-marker", title: "Location", content: "Brooklyn, NY" },
      { icon: "fa-users", title: "Employees", content: "50+" },
      { icon: "fa-envelope-open", title: "Email address", content: "[email protected]" },
      { icon: "fa-phone", title: "Contact number", content: "+1 555 123 4567" },
    ],
  },
  {
    id:6,
    name: "David Chen",
    position: "CTO of Innovatek",
     img:getImagePath("e6.jpg"),
    aboutEmployer:
      "David oversees the technology and infrastructure of Innovatek. With over 15 years in the industry, he brings a wealth of knowledge and technical leadership.",
    jobs: [
      {
        imgSrc: getImagePath("job5.png"),
        title: "Backend Developer",
        location: "Toronto",
        role: "Software Developer",
        type: "Fulltime",
        time: "5 days ago",
      },
      {
        imgSrc: getImagePath("job6.png"),
        title: "DevOps Engineer",
        location: "Canada",
        role: "Infrastructure",
        type: "Contract",
        time: "3 days ago",
      },
    ],
    employersDetails: [
      { icon: "fa-briefcase", title: "Member since", content: "July 2015" },
      { icon: "fa-map-marker", title: "Location", content: "Toronto, CA" },
      { icon: "fa-users", title: "Employees", content: "100+" },
      { icon: "fa-envelope-open", title: "Email address", content: "[email protected]" },
      { icon: "fa-phone", title: "Contact number", content: "+1 416 987 6543" },
    ],
  },
  {
    id:7,
    name: "Amira Osei",
    position: "Creative Director",
     img:getImagePath("e3.jpg"),
    aboutEmployer:
      "Amira heads the creative team at BrandBridge. Her background in design and marketing allows her to bring brand stories to life across all media platforms.",
    jobs: [
      {
        imgSrc: getImagePath("job7.png"),
        title: "Graphic Designer",
        location: "Accra",
        role: "Visual Design",
        type: "Part-time",
        time: "Today",
      },
      {
        imgSrc: getImagePath("job8.png"),
        title: "Content Strategist",
        location: "Remote",
        role: "Marketing",
        type: "Contract",
        time: "3 days ago",
      },
    ],
    employersDetails: [
      { icon: "fa-briefcase", title: "Member since", content: "May 2020" },
      { icon: "fa-map-marker", title: "Location", content: "Accra, Ghana" },
      { icon: "fa-users", title: "Employees", content: "20+" },
      { icon: "fa-envelope-open", title: "Email address", content: "[email protected]" },
      { icon: "fa-phone", title: "Contact number", content: "+233 245 000 123" },
    ],
  },
  {
    id:8,
    name: "Liam Bennett",
    position: "Founder & CEO",
     img:getImagePath("c3.jpg"),
    aboutEmployer:
      "Liam founded FinTechHive to revolutionize the financial services space. His mission is to make finance more accessible and inclusive for everyone.",
    jobs: [
      {
        imgSrc: getImagePath("job9.png"),
        title: "Data Analyst",
        location: "Berlin",
        role: "Analytics",
        type: "Internship",
        time: "Yesterday",
      },
      {
        imgSrc: getImagePath("job10.png"),
        title: "Blockchain Developer",
        location: "Germany",
        role: "Engineering",
        type: "Fulltime",
        time: "6 days ago",
      },
    ],
    employersDetails: [
      { icon: "fa-briefcase", title: "Member since", content: "January 2021" },
      { icon: "fa-map-marker", title: "Location", content: "Berlin, Germany" },
      { icon: "fa-users", title: "Employees", content: "10-15" },
      { icon: "fa-envelope-open", title: "Email address", content: "[email protected]" },
      { icon: "fa-phone", title: "Contact number", content: "+49 30 12345678" },
    ],
  },
];
export default employerData