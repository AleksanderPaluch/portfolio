

const Chip = ({ children }) => {
  
  return <span className="rounded bg-neutral px-4 py-1 text-white text-sm">{children}</span>;
};

const Technologies = () => {
  return (
    <div className="relative">
      <div className="mb-12 flex flex-wrap gap-2">
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
      </div>
    </div>
  );
};

export default Technologies;
