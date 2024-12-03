import Reveal from "../Reveal/Reveal";

const Hero = () => {
  return (
    <section id="hero" className="overflow-hidden sm:h-screen md:h-fit pt-36 md:pt-20 lg:pt-36 min-h-[500px]">
      <Reveal>
        <h1 className="text-4xl font-semibold sm:text-6xl md:text-8xl">
          Hi, I&apos;m Alex<span className="text-primary">.</span>
        </h1>
      </Reveal>
      <Reveal>
        <h2 className="my-2 text-xl sm:text-2xl md:my-4 md:text-4xl">
          I&apos;m a{" "}
          <span className="font-bold text-primary">Full Stack Developer</span>
        </h2>
      </Reveal>
      <Reveal>
        <p className="font-italy max-w-xl  leading-relaxed md:text-base md:leading-relaxed">
          I&apos;ve spent the last 1.5 years diving deep into web development,
          building both front-end and back-end projects. I&apos;m now on the lookout
          to land my first developer role and bring those skills to life! Let&apos;s
          connect!
        </p>
      </Reveal>
      <Reveal>
        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView();
          }}
          className="btn-s btn btn-outline btn-primary my-4 text-xl sm:btn-sm md:btn-md sm:text-xl "
        >
          Contact Me
        </button>
      </Reveal>
    </section>
  );
};

export default Hero;
