import Reveal from "../Reveal/Reveal";

const ExperienceItem = ({ company, location, position, time, description }) => {
  return (
    <div>
      <div className="row flex justify-between items-center">
        <div>
          <Reveal>
            <p className="text-3xl font-bold">{company}</p>
          </Reveal>
          <Reveal>
            <p className="text-2xl font-semibold text-primary">{position}</p>
          </Reveal>
        </div>

        <Reveal>
          <div className="my-2">
            <p className=" text-right text-2xl">{location}</p>
            <p>{time}</p>
          </div>
        </Reveal>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default ExperienceItem;
