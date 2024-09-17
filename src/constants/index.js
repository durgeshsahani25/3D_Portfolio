import {
  mobile,
  backend,
  creator,
  web,
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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  github,
  // cs,
  // springboot,
  // java,
  // python,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Dot Net Developer",
    icon: creator,
  },

  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: mobile,
  }

  
];

const technologies = [
  // {
  //   name: "Java",
  //   icon: java,
  // },
  // {
  //   name: "Python",
  //   icon: python,
  // },
  // {
  //   name: "C#",
  //   icon: cs,
  // },
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
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Spring Boot",
  //   icon: springboot,
  // },
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
    name: "SQL",
    icon: typescript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Github",
    icon: github,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Tidbeat",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Jun 2022",
    points: [
      "Assisted in developing mobile applications using React Native framework for Android platforms.",
      "Participated in testing and debugging to identify and resolve software defects.",
      "Assisted in optimizing app performance and responsiveness through code refactoring and performance analysis.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Suvidha Foundation",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2022 - Mar 2022",
    points: [
      "Assisted in developing and maintaining responsive websites using HTML, CSS, and JavaScript.",
      "Supported the implementation of front-end frameworks such as React.js and Node.js to enhance user interfaces",
      "Collaborated with team members to gather project requirements and translate them into actionable tasks.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Development",
    company_name: "Edunet Foundation",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Proficiently acquired expertise in HTML, CSS, and JavaScript through dedicated learning on the IBM platform.",
      "Designed and developed a dynamic website utilizing HTML, CSS, and JavaScript.",
      "Demonstrated the site using VS Code's Live Server, highlighting seamless functionality and real-time responsiveness",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Durgesh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Durgesh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Durgesh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CEO",
    company: "Meta",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Full Stack E Commerce Project with Spring Boot and React ",
    description:
    "I developed a full-stack e-commerce application using Spring Boot and React, delivering a seamless user experience. This involved implementing secure RESTful APIs and efficient database management to support product listings and transactions. Additionally, I integrated frontend and backend components to ensure robust performance and scalability, even in high-traffic scenarios.",
    tags: [
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "BootStrap",
        color: "pink-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "red-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "blue-text-gradient",
      },
      {
        name: "Post Man",
        color: "orange-text-gradient",
      },
    ],
    image: github,
    // source_code_link: "https://github.com/durgeshsahani25/Spotify-Clone",
  },
  {
    name: "ATM Machine",
    description:
      "I developed a Java-based ATM machine application utilizing JDBC for seamless integration with MySQL, ensuring efficient data management. The project involved engineering secure and reliable transaction processing features, including balance inquiries, deposits, and withdrawals. Additionally, I optimized the database schema and data management processes to enhance performance and maintain data integrity.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Swing",
        color: "yellow-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Live Server",
        color: "brown-text-gradient",
      },
    ],
    image: github,
    // source_code_link: "https://github.com/durgeshsahani25/User-Resistration-form",
  },
  {
    name: "Dot Net Full Stack E Commerce Project",
    description:
      "I developed a secure login and registration system with profile management capabilities, including the ability for users to update their profile pictures. Additionally, I implemented administrative features to manage products, users, orders, and handle delivery approvals and account deletions. To enhance the user experience, I also created a shopping cart system with integrated checkout, payment processing, and invoice generation functionalities.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "ASP.NET Core",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "yellow-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: github,
    // source_code_link: "https://github.com/durgeshsahani25/Pokemon-Evalution",
  },
];

export { services, technologies, experiences, testimonials, projects };
