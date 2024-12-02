import { FaCode } from "react-icons/fa";
import { TbMoodSearch } from "react-icons/tb";
import Reveal from "../Reveal/Reveal";

const Chip = ({ children }) => {
  return (
    <span className="rounded bg-neutral px-4 py-1 text-sm font-semibold text-zinc-100">
      {children}
    </span>
  );
};

const Technologies = () => {
  return (
    <div className="relative">
      <div>
        <Reveal>
          <p className="flex items-center gap-2 text-xl font-bold ">
            <span className="rounded bg-primary px-1 py-1 text-2xl text-zinc-100">
              <FaCode />
            </span>{" "}
            Use in projects
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <div className="flex flex-wrap gap-2 mb-16">
            <Chip>JavaScript</Chip>
            <Chip>HTML</Chip>
            <Chip>CSS</Chip>
            <Chip>React</Chip>
            <Chip>Redux</Chip>
            <Chip>NodeJS</Chip>
            <Chip>Express</Chip>
            <Chip>MongoDB</Chip>
            <Chip>GitHub</Chip>
            <Chip>Slack</Chip>
            <Chip>Heroku</Chip>
            <Chip>Figma</Chip>
            <Chip>Tailwind</Chip>
          </div>
        </Reveal>
      </div>
      <div>
        <Reveal>
          <p className="flex items-center gap-2 text-xl font-bold">
            <span className="rounded bg-primary px-1 py-1 text-2xl text-zinc-100">
              <TbMoodSearch />
            </span>{" "}
            Interested in
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <div className="flex flex-wrap gap-2">
            <Chip>React Native</Chip>
            <Chip>TypeScript</Chip>
            <Chip>DaisyUI</Chip>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Technologies;
