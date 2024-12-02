import Reveal from "../Reveal/Reveal";
import SectionHeader from "../SectionHeader/SectionHeader";

const Education = () => {
  return (
    <section id="education" className="section-wrapper">
      <SectionHeader title="Education" side="right" />
      <div className="grid grid-cols-1 gap-8">
        <div className="row flex items-center justify-between">
          {" "}
          <div>
            <Reveal>
              {" "}
              <h4 className="text-xl font-bold md:text-3xl">
                FULLSTACK Developer
              </h4>
            </Reveal>
            <Reveal>
              {" "}
              <p className="text-md font-semibold text-primary md:text-2xl">
                GoIT
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div>
              <p className="text-right md:text-2xl">Warsaw</p>
              <p className="text-right text-xs">10/2014 - 06/2019</p>
            </div>{" "}
          </Reveal>
        </div>

        <div className="flex items-center justify-between">
          {" "}
          <div className="w-[240px] md:w-fit">
            <Reveal>
              {" "}
              <h4 className="text-xl font-bold md:text-3xl">
                Master&apos;s Degree in Management
              </h4>
            </Reveal>
            <Reveal>
              {" "}
              <p className="text-md font-semibold text-primary md:text-2xl">
                Społeczna Akademia Nauk
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div>
              <p className="text-right md:text-2xl">Warsaw</p>
              <p  className="text-right text-xs md:text-lg">10/2014 - 06/2019</p>
            </div>{" "}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
