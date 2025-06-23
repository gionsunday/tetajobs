import { getImagePath } from "../utils/getImagePath";

const teamData = [
  {
    image: getImagePath("c5.jpg"),
    id: 1,
    name: "Alexander smith",
    role: "Web designer",
    location: "Settlers Lane, New York.",
    profileLink: `/top-freelancers`,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. orci urna. In et augue ornare, tempor massa in, luctus sapien. Proin a diam et dui fermentum dolor molestie vel id neque. Donec sed tempus enim, a congue risus. Pellen tesqu euismod massa a quam viverra interdum urna vel id neque, Fermentum viverra eros. Praesent neque purus, rhoncus nec nibh non, mollis sodales odio.",

    details: [
      {
        icon: "fa-calendar",
        title: "Date of birth since",
        value: "Jan 28, 1994",
      },
      {
        icon: "fa-map-marker",
        title: "Location",
        value: "Settle street, New york",
      },
      { icon: "fa-briefcase", title: "Member since", value: "October 2002" },
      {
        icon: "fa-envelope-open",
        title: "Email address",
        value: "[email protected]",
        isLink: true,
      },
      {
        icon: "fa-phone",
        title: "Contact number",
        value: "+(21) 333 444 5566",
        isLink: true,
      },
    ],

    educationData: [
      {
        period: "August 1998 - June 2002",
        title: "Bachelor in software technology (2002)",
        institution: "California university",
        desc: "Donec sed tempus enim, a congue risus...",
      },
      {
        period: "August 2006 - June 2008",
        title: "Bachelor in engineering (2008)",
        institution: "California university",
        desc: "Donec sed tempus enim, a congue risus...",
      },
      {
        period: "October 20019 - Currently working",
        title: "Senior web designer (2019)",
        institution: "Design company pvt limited",
        desc: "Donec sed tempus enim, a congue risus...",
      },
    ],
    skills: [
      { name: "Web designing", percent: 90, class: "specifications-7-blk" },
      { name: "Development", percent: 60, class: "specifications-7-blue" },
      { name: "Java scripting", percent: 70, class: "specifications-7-pink" },
      { name: "App developing", percent: 40, class: "specifications-7-green" },
      {
        name: "Arts & Painting",
        percent: 50,
        class: "specifications-7-violet",
      },
    ],
    fields: [
      { title: "Birth City", value: "Newyork" },
      { title: "Martial status", value: "Single" },
      { title: "Searching for job", value: "Yes" },
      { title: "Joining date", value: "2nd sep, 1995" },
      { title: "Family members", value: "4 siblings" },
      { title: "Job experience", value: "3years of exp" },
    ],

    portfolio: [
      {
        title: "Portfolio title",
        images: [getImagePath("blog1.jpg"), getImagePath("blog2.jpg")],
      },

      {
        title: "Portfolio title",
        images: [getImagePath("blog8.jpg"), getImagePath("blog7.jpg")],
      },
      {
        title: "Portfolio title",
        images: [getImagePath("blog5.jpg"), getImagePath("blog6.jpg")],
      },
    ],
  },
  {
    image: getImagePath("c6.jpg"),
    id: 2,
    name: "Laura paul",
    role: "Software developer",
    location: "Settlers Lane, New York.",
    profileLink: `/top-freelancers`,
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. orci urna. In et augue ornare, tempor massa in, luctus sapien. Proin a diam et dui fermentum dolor molestie vel id neque. Donec sed tempus enim, a congue risus. Pellen tesqu euismod massa a quam viverra interdum urna vel id neque, Fermentum viverra eros. Praesent neque purus, rhoncus nec nibh non, mollis sodales odio.",

    details: [
      {
        icon: "fa-calendar",
        title: "Date of birth since",
        value: "Jan 28, 1994",
      },
      {
        icon: "fa-map-marker",
        title: "Location",
        value: "Settle street, New york",
      },
      { icon: "fa-briefcase", title: "Member since", value: "October 2002" },
      {
        icon: "fa-envelope-open",
        title: "Email address",
        value: "[email protected]",
        isLink: true,
      },
      {
        icon: "fa-phone",
        title: "Contact number",
        value: "+(21) 333 444 5566",
        isLink: true,
      },
    ],

    educationData: [
      {
        period: "August 1998 - June 2002",
        title: "Bachelor in software technology (2002)",
        institution: "California university",
        desc: "Donec sed tempus enim, a congue risus...",
      },
      {
        period: "August 2006 - June 2008",
        title: "Bachelor in engineering (2008)",
        institution: "California university",
        desc: "Donec sed tempus enim, a congue risus...",
      },
      {
        period: "October 20019 - Currently working",
        title: "Senior web designer (2019)",
        institution: "Design company pvt limited",
        desc: "Donec sed tempus enim, a congue risus...",
      },
    ],
    skills: [
      { name: "Web designing", percent: 90, class: "specifications-7-blk" },
      { name: "Development", percent: 60, class: "specifications-7-blue" },
      { name: "Java scripting", percent: 70, class: "specifications-7-pink" },
      { name: "App developing", percent: 40, class: "specifications-7-green" },
      {
        name: "Arts & Painting",
        percent: 50,
        class: "specifications-7-violet",
      },
    ],
    fields: [
      { title: "Birth City", value: "Newyork" },
      { title: "Martial status", value: "Single" },
      { title: "Searching for job", value: "Yes" },
      { title: "Joining date", value: "2nd sep, 1995" },
      { title: "Family members", value: "4 siblings" },
      { title: "Job experience", value: "3years of exp" },
    ],

    portfolio: [
      {
        title: "Portfolio title",
        images: [getImagePath("blog1.jpg"), getImagePath("blog2.jpg")],
      },

      {
        title: "Portfolio title",
        images: [getImagePath("blog8.jpg"), getImagePath("blog7.jpg")],
      },
      {
        title: "Portfolio title",
        images: [getImagePath("blog5.jpg"), getImagePath("blog6.jpg")],
      },
    ],
  },

  {
    image: getImagePath("c7.jpg"),
    id: 3,
    name: "Elizabeth ker",
    role: "Customer service",
    location: "Settlers Lane, New York.",
    profileLink: `/top-freelancers`,
  },
  {
    image: getImagePath("e4.jpg"),
    id: 4,
    name: "John smith",
    role: "Sales manager",
    location: "Settlers Lane, New York.",
    profileLink: `/top-freelancers`,
  },
  {
    image: getImagePath("c1.jpg"),
    id: 5,
    name: "Alexander smith",
    role: "Web designer",
    location: "Settlers Lane, New York.",
    profileLink: `/top-freelancers`,
  },
  {
    image: getImagePath("c2.jpg"),
    id: 6,
    name: "Laura paul",
    role: "Software developer",
    location: "Settlers Lane, New York.",
    profileLink: `/top-freelancers`,
  },
  {
    image: getImagePath("c3.jpg"),
    id: 7,
    name: "Elizabeth ker",
    role: "Customer service",
    location: "Settlers Lane, New York.",
    profileLink: `/top-freelancers`,
  },
  {
    image: getImagePath("c4.jpg"),
    id: 8,
    name: "John smith",
    role: "Sales manager",
    location: "Settlers Lane, New York.",
    profileLink: `/top-freelancers`,
  },
];

export default teamData;
