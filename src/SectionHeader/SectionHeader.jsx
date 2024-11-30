import Reveal from "../Reveal/Reveal";

const SectionHeader = ({ title, side = "left" }) => {
  return (
    <div
      className="mb-12 flex items-center gap-8"
      style={{ flexDirection: side === "left" ? "row" : "row-reverse" }}
    >
      <div className="h-[1px] w-full bg-neutral"></div>
      <Reveal>
        <h2>
          <span className="text-end text-3xl font-black md:text-5xl">
            {title}
            <span className="text-primary">.</span>
          </span>
        </h2>
      </Reveal>
    </div>
  );
};

export default SectionHeader;
