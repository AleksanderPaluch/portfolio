import SectionHeader from "../SectionHeader/SectionHeader";
import Reveal from "../Reveal/Reveal";
import Links from "../Links/Links";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Technologies from "./Technologies";

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" side="left" />
      <div className="prose prose-p:my-2 grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
        <div className="">
          <Reveal>
            <p>
              <span className="float-left mr-1 rounded bg-primary px-3 py-2 text-2xl font-bold text-zinc-100">
                Hey!
              </span>
              I&apos;m Alex, a chef turned frontend developer. Based in Warsaw,
              I specialize in building easy-to-use and aesthetically pleasing
              user interfaces, primarily using React, but I&apos;m always
              excited to explore the best tools for the job.
            </p>
          </Reveal>
          <Reveal>
            <p>
              While I don&apos;t have formal, commercial experience in front-end
              development yet, I bring a <strong className="text-xl font-bold">decade</strong> of diverse professional
              experience across multiple fields. 
            </p>
          </Reveal>
          <Reveal>
            <p>
              <blockquote className="text-2xl">
                &quot;How you do anything is how you do everything&quot;
              </blockquote>{" "}
              I&apos;ve already become the best in one discipline, working at
              Nobu and mastering the art of being a chef. Now, I&apos;m bringing
              that same focus and dedication to programming, aiming to become
              the best in this field too.
            </p>
          </Reveal>
          <Reveal>
            <p>
              When I&apos;m not programming (which is most of my free time!), I
              enjoy playing chess, practicing jiu-jitsu, and traveling. I&apos;m
              always up for a challenge, whether it&apos;s on the chessboard,
              the mat, or the road.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-primary">
                My links{" "}
                <span>
                  {" "}
                  <MdOutlineArrowRightAlt />
                </span>{" "}
              </p>

              <Links />
            </div>
          </Reveal>
        </div>
        <div>
          <Technologies />
        </div>
      </div>
    </section>
  );
};

export default About;
