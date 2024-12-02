import { div } from "framer-motion/client";
import SectionHeader from "../SectionHeader/SectionHeader";
import ExperienceItem from "./ExperienceItem";
import Reveal from "../Reveal/Reveal";

const expirience = [
  {
    company: "Nobu",
    location: "Warsaw",
    position: "Sushi Chef",
    time: "02/2022 - now",
  },
  {
    company: "KPS Food",
    location: "Warsaw",
    position: "Regional Sales Manager",
    time: "02/2022 - 10/2022",
    description: (
      <>
        {" "}
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Maximized Profit Margins:
            </span>
            Achieved the highest profit margin in the region for four
            consecutive months
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Expanded Client Base:
            </span>
            Successfully gained 45 new clients within 7 months, contributing to
            significant regional growth
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Market Analysis
            </span>
            Conducted thorough market research and competitor analysis to
            identify new business opportunities
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Customer Relationship Management:
            </span>
            I built and maintained strong relationships with existing and new
            clients
          </p>
        </Reveal>
      </>
    ),
  },
  {
    company: "Bogmar-Traper",
    location: "Warsaw",
    position: "Sales Representative",
    time: "07/2021 - 02/2022",
    description: (
      <>
        <Reveal>
          {" "}
          <p className="my-2">
            {" "}
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Customer Acquisition:
            </span>
            Identified and approached potential clients to expand the customer
            base
          </p>
        </Reveal>
        <Reveal>
          <p className="my-2">
            {" "}
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              {" "}
              Sales Negotiation:
            </span>
            Conducted negotiations with clients to secure orders, ensure
            favorable terms, and close deals
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              {" "}
              Customer Support:
            </span>
            Provided support to clients, addressing any issues or concerns and
            ensuring high levels of customer satisfaction
          </p>
        </Reveal>
      </>
    ),
  },
];

const Experience = () => {
  return (
    <section id="expirience" className="section-wrapper">
      <SectionHeader title="Experience" side="left" />
      <div className="relative grid grid-cols-1 gap-8">
        {expirience.map((item) => {
          return <ExperienceItem key={item.company} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
