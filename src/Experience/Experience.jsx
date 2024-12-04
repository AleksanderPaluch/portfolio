
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
    text: "Managed sales in my region, grew the customer base, and built strong relationships to achieve business goals.",
    description: (
      <>
    
        {" "}
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Maximized Profit Margins
            </span>{" "}
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Expanded Client Base
            </span>
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Market Analysis
            </span>
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Customer Relationship Management
            </span>
           
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
    text: "Handled customer accounts, promoted products, and closed sales to meet company targets",
    description: (
      <>
 
        <Reveal>
          {" "}
          <p className="my-2">
            {" "}
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Customer Acquisition
            </span>
           
          </p>
        </Reveal>
        <Reveal>
          <p className="my-2">
            {" "}
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              {" "}
              Sales Negotiation
            </span>
           
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              {" "}
              Customer Support
            </span>
           
          </p>
        </Reveal>
      </>
    ),
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-wrapper">
      <SectionHeader title="Experience" side="right" />
      <div className="relative grid grid-cols-1 gap-8">
        {expirience.map((item) => {
          return <ExperienceItem key={item.company} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
