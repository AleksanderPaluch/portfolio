import SectionHeader from "../SectionHeader/SectionHeader";
import Project from "./Project";

const projects = [
  {
    title: "AquaTrack",
    imgSrc: "../../assets/aquatrack.png",
    code: "https://github.com/AleksanderPaluch/water-tracker-app",
    projectLink: "https://water-tracker-app.vercel.app/",
    tech: [
      "React",
      "Redux",
      "Node",
      "Express.js",
      "JWT",
      "Google OAuth",
      "MongoDB",
      "Heroku",
    ],
    description:
      "AquaTrack is a simple and intuitive app designed to help you monitor and manage your daily water intake.",
    modalContent: (
      <>
        <p>
          AquaTrack is an easy-to-use app that helps you track your daily water
          intake. It provides a seamless way to log your hydration and stay on
          top of your health goals.
        </p>
        <p>
          AquaTrack&apos;s front-end is built using <strong>React</strong>, allowing for a
          dynamic and responsive user interface. <strong>Redux</strong> is employed for efficient
          state management, ensuring smooth data flow and a consistent
          experience across the app.
        </p>
        <p>
          AquaTrack&apos;s backend is built with <strong>Node.js</strong> and <strong>Express.js</strong>,
          offering a fast and scalable server environment for handling user
          requests and managing hydration data.
        </p>
        <p>
          For user authentication, AquaTrack leverages <strong>JWT</strong> and <strong>Google OAuth</strong>,
          ensuring secure login and easy access. <strong>MongoDB</strong> serves as the database
          for storing user profiles and hydration logs, while <strong>Heroku</strong> is used for
          seamless cloud deployment, ensuring reliable and scalable performance.
        </p>
      </>
    ),
  },
  {
    title: "GenAI Guide",
    imgSrc: "../../assets/GenAI.png",
    code: "https://github.com/AleksanderPaluch/delab-2",
    projectLink: "https://delab-2.vercel.app/",
    tech: ["Framer-motion", "Intersection-observer", "Lazy", "Recharts", "Tailwind"],
    description:
      "A Guide to Safe and Conscious Use of AI: Principles, Ethical Challenges, and Practical Tips for Students and Educators",
    modalContent: (
      <>
        <p>
          I built my GenAI guide webpage using <strong>Framer Motion</strong> to add smooth
          animations and interactive transitions, making the design more
          engaging. I also used the <strong>Intersection Observer</strong> to detect when
          elements entered the screen, triggering animations and improving the
          user experience.
        </p>
        <p>
          To optimize performance, I implemented <strong>Lazy loading</strong>, ensuring images
          and components loaded only when needed. For visualizing data, I used 
          <strong> Recharts</strong> to create clear, responsive charts that make complex GenAI
          concepts easier to understand. These tools helped create a fast,
          interactive, and visually appealing site.
        </p>
       
      </>
    ),
  },
  // {
  //   title: "Plus+Pack",
  //   imgSrc: "../../assets/aquatrack.png",
  //   code: "https://github.com/AleksanderPaluch/water-tracker-app",
  //   projectLink: "https://water-tracker-app.vercel.app/",
  //   tech: [
  //     "React",
  //     "Redux",
  //     "Node",
  //     "Express.js",
  //     "JWT",
  //     "Google OAuth",
  //     "MongoDB",
  //     "Heroku",
  //   ],
  //   description:
  //     "AquaTrack is a simple and intuitive app designed to help you monitor and manage your daily water intake.",
  //   modalContent: (
  //     <>
  //       <p>
  //         AquaTrack is an easy-to-use app that helps you track your daily water
  //         intake. It provides a seamless way to log your hydration and stay on
  //         top of your health goals.
  //       </p>
  //       <p>
  //         AquaTrack&apos;s front-end is built using React, allowing for a
  //         dynamic and responsive user interface. Redux is employed for efficient
  //         state management, ensuring smooth data flow and a consistent
  //         experience across the app.
  //       </p>
  //       <p>
  //         AquaTrack&apos;s backend is built with Node.js and Express.js,
  //         offering a fast and scalable server environment for handling user
  //         requests and managing hydration data.
  //       </p>
  //       <p>
  //         For user authentication, AquaTrack leverages JWT and Google OAuth,
  //         ensuring secure login and easy access. MongoDB serves as the database
  //         for storing user profiles and hydration logs, while Heroku is used for
  //         seamless cloud deployment, ensuring reliable and scalable performance.
  //       </p>
  //     </>
  //   ),
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="section-wrapper">
      <SectionHeader title="Projects" side="left" />
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
