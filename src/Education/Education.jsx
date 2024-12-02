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
              <h4 className="text-3xl font-bold">FULLSTACK Developer</h4>
            </Reveal>
            <Reveal>
              {" "}
              <p className="text-2xl font-semibold text-primary">GoIT</p>
            </Reveal>
          </div>
          <Reveal>
            <div >
              <p className="text-right text-2xl">Warsaw</p>
              <p>10/2014 - 06/2019</p>
            </div>{" "}
          </Reveal>
        </div>

        <div className="flex items-center justify-between">
          {" "}
          <div>
            <Reveal>
              {" "}
              <h4 className="text-3xl font-bold">
                Master&apos;s Degree in Management
              </h4>
            </Reveal>
            <Reveal>
              {" "}
              <p className="text-2xl font-semibold text-primary">
                Społeczna Akademia Nauk
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div >
              <p className=" text-right text-2xl">Warsaw</p>
              <p >10/2014 - 06/2019</p>
            </div>{" "}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Education;
