import SectionHeader from "../SectionHeader/SectionHeader";
import Project from "./Project";

const projects = [
  {
    title: "WaterTracker.app",
    imgSrc: "../../public/assets/aquatrack.png",
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
          AquaTrack&apos;s front-end is built using React, allowing for a
          dynamic and responsive user interface. Redux is employed for efficient
          state management, ensuring smooth data flow and a consistent
          experience across the app.
        </p>
        <p>
          AquaTrack&apos;s backend is built with Node.js and Express.js, offering a
          fast and scalable server environment for handling user requests and
          managing hydration data.
        </p>
        <p>
          For user authentication, AquaTrack leverages JWT and Google OAuth,
          ensuring secure login and easy access. MongoDB serves as the database
          for storing user profiles and hydration logs, while Heroku is used for
          seamless cloud deployment, ensuring reliable and scalable performance.
        </p>
       
      </>
    ),
  },
  {
    title: "WaterTracker.app",
    imgSrc: "../../public/assets/aquatrack.png",
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
          AquaTrack&apos;s front-end is built using React, allowing for a
          dynamic and responsive user interface. Redux is employed for efficient
          state management, ensuring smooth data flow and a consistent
          experience across the app.
        </p>
        <p>
          AquaTrack&apos;s backend is built with Node.js and Express.js, offering a
          fast and scalable server environment for handling user requests and
          managing hydration data.
        </p>
        <p>
          For user authentication, AquaTrack leverages JWT and Google OAuth,
          ensuring secure login and easy access. MongoDB serves as the database
          for storing user profiles and hydration logs, while Heroku is used for
          seamless cloud deployment, ensuring reliable and scalable performance.
        </p>
       
      </>
    ),
  },
  {
    title: "WaterTracker.app",
    imgSrc: "../../public/assets/aquatrack.png",
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
          AquaTrack&apos;s front-end is built using React, allowing for a
          dynamic and responsive user interface. Redux is employed for efficient
          state management, ensuring smooth data flow and a consistent
          experience across the app.
        </p>
        <p>
          AquaTrack&apos;s backend is built with Node.js and Express.js, offering a
          fast and scalable server environment for handling user requests and
          managing hydration data.
        </p>
        <p>
          For user authentication, AquaTrack leverages JWT and Google OAuth,
          ensuring secure login and easy access. MongoDB serves as the database
          for storing user profiles and hydration logs, while Heroku is used for
          seamless cloud deployment, ensuring reliable and scalable performance.
        </p>
       
      </>
    ),
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-wrapper">
      <SectionHeader title="Projects" side="right" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
