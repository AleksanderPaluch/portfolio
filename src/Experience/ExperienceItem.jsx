import Reveal from "../Reveal/Reveal";

const ExperienceItem = ({ company, location, position, time, description }) => {
  return (
    <div>
      <div className="row flex justify-between items-center">
        <div>
          <Reveal>
            <p className="text-xl font-bold md:text-3xl">{company}</p>
          </Reveal>
          <Reveal>
            <p className="ttext-md font-semibold text-primary md:text-2xl">{position}</p>
          </Reveal>
        </div>

        <Reveal>
          <div className="my-2">
            <p className="text-right md:text-2xl">{location}</p>
            <p className="text-right text-xs md:text-lg">{time}</p>
          </div>
        </Reveal>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default ExperienceItem;
