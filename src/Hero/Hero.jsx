import Reveal from "../Reveal/Reveal";

const Hero = () => {
  return (
    <section className="text-slat-100 overflow-hidden py-24 md:py-32">
      <Reveal>
        <h1 className="text-4xl sm:text-6xl md:text-8xl">
          Hi, I'm Alex<span className="text-primary">.</span>
        </h1>
      </Reveal>
      <Reveal>
        <h2 className="my-2 text-xl sm:text-2xl md:my-4 md:text-4xl">
          I'm a{" "}
          <span className="font-semibold text-primary">
            Full Stack Developer
          </span>
        </h2>
      </Reveal>
      <Reveal>
        <p className="max-w-xl text-sm leading-relaxed md:text-base md:leading-relaxed">
          I've spent the last 1.5 years diving deep into web development,
          building both front-end and back-end projects. I'm now on the lookout
          to land my first developer role and bring those skills to life! Let's
          connect!
        </p>
      </Reveal>
      <Reveal>
        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView();
          }}
          className="btn btn-outline btn-primary btn-xs my-2 text-xl sm:btn-sm md:btn-md sm:text-xl md:my-4"
        >
          Contact Me
        </button>
      </Reveal>
    </section>
  );
};

export default Hero;
