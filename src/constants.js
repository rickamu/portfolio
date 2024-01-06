import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    shopify,
    tesla,
    threejs,
    mas,
    nampak,
    muharata,
    kise,
    dedan,
    njiiri,
    rickamu,
    damsite
  } from "./assets";

  import { bracket,chess,male,shock } from "./assets/solidworks";
export const navLinks = [
    {
        id: 'projects',
        title: 'Projects',
    },
    {
        id: 'about',
        title: 'About',
    },
    {
        id: 'contact',
        title: 'Contact',
    },
]

export const texts = [ {name: "Innovation.", color:"green"}, {name:"Creativity." , color: "red"}, {name:"Engineering." , color: "pink"}, {name:"Passion." , color: "cyan"}];


export const projects = [
    {
        id: 'shock',
        name: 'Shock Absorber',
        image: shock,
        tags: [{
            color: 'red',
            name: 'solidworks'
        }]
    },{
        id: 'chess',
        name: 'Chess Set',
        image: chess,
        tags: [{
            color: 'red',
            name: 'solidworks'
        }]
    },{
        id: 'bracket',
        name: 'Bracket',
        image: bracket,
        tags: [{
            color: 'red',
            name: 'solidworks'
        }]
    },
];

export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];

  export const experiences = [
    {
      title: "Lead Autonomation Engineer",
      company_name: "MAS Intimates Kenya",
      icon: mas,
      iconBg: "#383E56",
      date: "April 2022 - July 2023",
      points: [
        "Lead Autonomation Team.",
        "Designs using CAD and Solidworks.",
        "CNC Machining.",
        "Fabrication and Welding on designs.",
        "Machine error proofing.",
        "Spare parts Purchase Requisition in SAP.",
        "Standard Hours Saving.",
        "Spares Inventory Tracking.","Reporting and presentation to central team.",
        "Shopfloor URL update.",
        "IOT within departments.",
        "Machine Software troubleshooting.",
      ],
    },
    {
      title: "Junior Engineer",
      company_name: "Nampak Kenya",
      icon: nampak,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - April 2020",
      points: [
        "Designs in AutoCAD.",
        "Printing Department Machines breakdown.",
        "Fabrication and Appliance in Technical Service Department.",
        "Data Entry.",
      ],
    },
    {
      title: "Attachee",
      company_name: "Muharata Food Company Kenya",
      icon: muharata,
      iconBg: "#383E56",
      date: "Jan 2019 - April 2019",
      points: [
        "Machine Assemblying.",
        "Material determination.",
        "Material drawing and grinding.",
        "Welding and Fabrication.",
        "Drawing and Cutting.",
        "Lathe Works.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Rickamu",
      icon: rickamu,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  export const education = [{
      title: "May 2021",
      cardTitle: "Dedan Kimathi Univerrsity of Technology",
      url: "https://www.dkut.ac.ke",
      cardSubtitle:"BSc Mechanical ENgineering",
      cardDetailedText: "Better Life through Technology",
      media: {
        type: "IMAGE",
        source: {
          url: dedan
        }
      }
    },
  {
      title: "Dec 2015",
      cardTitle: "Kenya Institute of Software Engineering",
      url: "https://www.kenyainstituteofsoftwareengineering.com/",
      cardSubtitle:"Diploma Software Engineering",
      cardDetailedText: "The function of good software is to make the complex appear to be simple",
      media: {
        type: "IMAGE",
        source: {
          url: kise
        }
      }
    },
  {
      title: "Nov 2014",
      cardTitle: "Njiiri Boys High School",
      url: "https://www.kenyainstituteofsoftwareengineering.com/",
      cardSubtitle:"High School",
      cardDetailedText: "To be an icon of excellence in kenya",
      media: {
        type: "IMAGE",
        source: {
          url: njiiri
        }
      }
    },
  {
      title: "Nov 2010",
      cardTitle: "Thika DamSite Academy",
      url: "https://www.kenyaprimaryschools.com/thika/thika-dam-academy-primary-school-kigoro-gatanga/",
      cardSubtitle:"Primary School",
      cardDetailedText: "To be an icon of excellence in kenya",
      media: {
        type: "IMAGE",
        source: {
          url: damsite
        }
      }
    }, ];