import type { SiteContent } from "./types";

// All site copy lives here. Street address is left off on purpose - a resume
// goes to named employers, a website is crawled by anyone.
export const content: SiteContent = {
  profile: {
    name: "Jashanpreet Singh",
    title: "Graduate Software Engineer",
    location: "Melbourne, VIC, Australia",
    email: "jashanpreetsingh230106@gmail.com",
    phone: "+61 468 370 723",
    siteUrl: "https://jashanpreet.vercel.app",
    resumePath: "/Jashanpreet_Singh_Resume.pdf",
    availability: "Graduating Nov 2026 · Open to 2027 graduate roles",
    intro:
      "Computer Science student at RMIT building full-stack web applications with React, TypeScript, Node.js and SQL Server. I like the parts of the job most people skip — schema design, CI pipelines, and making sure the thing actually runs in production.",
    about: [
      "I am finishing a Bachelor of Computer Science at RMIT University, majoring in Enterprise Systems Development, and graduating in November 2026. Most of what I know I learned by building: a multi-role venue-booking platform on a cloud SQL Server, a drone-risk assessment engine for an industry client, and database systems designed from the ER model up.",
      "I am most comfortable across the stack. I have written React and TypeScript front-ends, Express and TypeORM REST APIs, GraphQL layers with live subscriptions, and T-SQL stored procedures — then containerised the result with Docker and put it behind a GitHub Actions pipeline so every push is type-checked, tested and built.",
      "Alongside my degree I have spent two years as a Department Manager at McDonald's, leading a team of 25 and owning stock, rostering and month-end reporting. It is not a software job, but it taught me how to run a shift when things go wrong, coach people who are newer than me, and be accountable for numbers someone else reviews — which turns out to be most of what a team wants from a graduate.",
    ],
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/Jashanpreet23",
        handle: "github.com/Jashanpreet23",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jashanpreetsingh23/",
        handle: "linkedin.com/in/jashanpreetsingh23",
      },
      {
        label: "Email",
        href: "mailto:jashanpreetsingh230106@gmail.com",
        handle: "jashanpreetsingh230106@gmail.com",
      },
    ],
  },

  projects: [
    {
      slug: "venue-vendors",
      name: "Venue Vendors",
      kind: "Full-stack web application",
      year: "2026",
      role: "Two-person team — I built the REST API and data layer, the GraphQL admin dashboard, and the CI/CD and container setup.",
      summary:
        "A multi-role venue-booking platform where hirers book venues, vendors manage listings, and admins oversee the whole marketplace from a separate dashboard.",
      highlights: [
        "Built the booking platform end to end: a React and TypeScript front-end talking to a Node and Express REST API, with TypeORM mapping onto a cloud-hosted MS SQL Server database.",
        "Enforced validation on both the client and the server, so the API stays correct even when a request does not come from our own UI.",
        "Built a separate GraphQL admin dashboard with real-time notifications over GraphQL subscriptions, plus bar, stacked-bar, pie and line charts for marketplace activity.",
        "Set up a GitHub Actions pipeline that type-checks, builds and tests on every push, containerised the services with Docker and docker-compose, and deployed to Render.",
      ],
      stack: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "TypeORM",
        "MS SQL Server",
        "GraphQL",
        "Docker",
        "GitHub Actions",
        "Render",
      ],
      repoAccess:
        "Source is in a private university organisation repository — happy to share it or walk through the code on request.",
      featured: true,
    },
    {
      slug: "mission-risk-engine",
      name: "Automated Mission Risk Assessment Engine",
      kind: "Industry capstone",
      year: "2026",
      context: "RMIT capstone for client Timed Automated Solutions",
      role: "Capstone team — I worked as a backend developer on the air-risk assessment logic and the real-time telemetry integration.",
      summary:
        "A web application that scores the risk of a drone mission before it flies, so operators can see which factors make a flight dangerous and mitigate them first.",
      highlights: [
        "Developed the air-risk assessment logic that turns mission parameters — altitude, duration, route complexity, airspace and weather — into a weighted risk score with a Low, Medium or High classification.",
        "Integrated real-time telemetry over MQTT so live flight data feeds the assessment rather than a static form submission alone.",
        "Aligned the risk model to CASA and SORA aviation regulations, since the output has to be defensible to an operator making a real go / no-go call.",
        "Worked in an Agile team using Git, contributing to a React 19 and Vite front-end using Jotai for state, MUI, Recharts for the risk breakdown, and Leaflet for mission maps.",
      ],
      stack: [
        "React",
        "TypeScript",
        "Vite",
        "Jotai",
        "MQTT",
        "Firebase",
        "Recharts",
        "Leaflet",
        "MUI",
        "Git",
      ],
      repoAccess:
        "Client project in a private repository — code can be provided on request",
      featured: true,
    },
    {
      slug: "myki-transit-db",
      name: "Myki Transit Database System",
      kind: "Database design and development",
      year: "2026",
      role: "Individual project.",
      summary:
        "A relational database modelling Melbourne's Myki transit ticketing — the touch-on / touch-off lifecycle and the fare calculation that hangs off it.",
      highlights: [
        "Designed the ER model and the relational schema from scratch, then applied monthly table partitioning so the touch event tables stay queryable as they grow.",
        "Implemented the touchOn and touchOff stored procedures in T-SQL, handling the fare rules that depend on the pairing between the two events.",
        "Wrote a full set of test cases for fare validation, covering the incomplete-journey and edge-case fares that are easy to get quietly wrong.",
      ],
      stack: ["SQL Server", "T-SQL", "ER modelling", "Database partitioning"],
      featured: false,
    },
    {
      slug: "airbnb-data-model",
      name: "AirBnB Data Model & Booking Application",
      kind: "NoSQL data modelling and full stack",
      year: "2026",
      role: "Individual project.",
      summary:
        "A MongoDB data model over real AirBnB listing data, with a Node.js application that answers the question the model exists to serve: is this place free on these dates?",
      highlights: [
        "Modelled real AirBnB data in MongoDB Atlas using a hybrid embedded and referenced design, embedding what is read together and referencing what is written independently.",
        "Built a Node.js web application on top of the model, implementing booking availability-checking logic against the listing and reservation collections.",
      ],
      stack: ["MongoDB", "MongoDB Atlas", "Node.js", "JavaScript"],
      featured: false,
    },
  ],

  skills: [
    {
      label: "Languages",
      items: ["Java", "TypeScript", "JavaScript", "Python", "C", "C++", "SQL"],
    },
    {
      label: "Web & full stack",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "GraphQL",
        "REST APIs",
        "HTML & CSS",
      ],
    },
    {
      label: "Databases",
      items: [
        "MS SQL Server",
        "T-SQL",
        "MongoDB",
        "TypeORM",
        "ER modelling",
        "Schema design",
      ],
    },
    {
      label: "DevOps & cloud",
      items: [
        "Docker",
        "docker-compose",
        "GitHub Actions",
        "CI/CD",
        "AWS",
        "Azure",
        "Render",
        "Firebase",
      ],
    },
    {
      label: "Engineering practice",
      items: [
        "Agile process & tools",
        "Git",
        "Software requirements",
        "Systems architecture & design",
        "Usability engineering",
      ],
    },
    {
      label: "Testing",
      items: ["JUnit", "Maven", "JMeter", "Test case design"],
    },
    {
      label: "Foundations",
      items: [
        "Data structures & algorithms",
        "Foundations of AI",
        "Cyber security fundamentals",
        "iOS software engineering",
      ],
    },
  ],

  experience: [
    {
      company: "McDonald's Australia",
      position: "Department Manager",
      period: "March 2024 — Present",
      location: "Melbourne, VIC",
      highlights: [
        "Reduced stock variance and food waste, measured by monthly stocktake results, by tightening ordering, running weekly counts and owning month-end inventory reconciliation.",
        "Led and developed a team of 25, lifting crew training completion and shift readiness through coaching and structured on-the-job development.",
        "Optimised weekly rostering for 25 staff to keep labour cost on target, scheduling to forecast demand and cutting avoidable overtime.",
        "Directed daily operations across kitchen and front counter to consistently meet speed-of-service targets, coordinating staff and cash handling across day and overnight shifts.",
      ],
    },
  ],

  education: [
    {
      qualification: "Bachelor of Computer Science",
      institution: "RMIT University",
      period: "Feb 2024 — Nov 2026 (expected)",
      detail: "Major in Enterprise Systems Development",
    },
    {
      qualification: "Certificates in Java Programming and C/C++",
      institution: "",
      period: "2023",
    },
  ],
};
