const ExperienceItem = ({ company, location, position, time, description }) => {
  return (
    <div className="">
      <div className="row flex justify-between">
        <div >
          <p className="text-3xl font-bold">{company}</p>
          <p className="text-2xl font-semibold text-primary">{position}</p>
        </div>
        <div className="my-2">
          <p className="text-right text-2xl mb-2">{location}</p>
          <p>{time}</p>
        </div>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default ExperienceItem;
