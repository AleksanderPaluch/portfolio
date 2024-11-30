import SectionHeader from "../SectionHeader/SectionHeader";
import Reveal from "../Reveal/Reveal";
import Links from "../Links/Links";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" side="left" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
        <div className="prose">
          <Reveal>
            <p>
              <span className="float-left mr-1 rounded bg-primary px-3 py-2 text-2xl font-bold text-zinc-200">
                Hey!
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quas hic in fugiat est ipsa asperiores! Consequuntur quaerat
              facere tenetur aut amet dignissimos, tempora atque dolorum
              accusantium ipsa laudantium assumenda.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quas hic in fugiat est ipsa asperiores! Consequuntur quaerat
              facere tenetur aut amet dignissimos, tempora atque dolorum
              accusantium ipsa laudantium assumenda.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quas hic in fugiat est ipsa asperiores! Consequuntur quaerat
              facere tenetur aut amet dignissimos, tempora atque dolorum
              accusantium ipsa laudantium assumenda.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quas hic in fugiat est ipsa asperiores! Consequuntur quaerat
              facere tenetur aut amet dignissimos, tempora atque dolorum
              accusantium ipsa laudantium assumenda.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-primary">My links <span>   <MdOutlineArrowRightAlt /></span> </p>
           
              <Links />
            </div>
          </Reveal>
        </div>
        <div className="prose">
          <Reveal>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quas hic in fugiat est ipsa asperiores! Consequuntur quaerat
              facere tenetur aut amet dignissimos, tempora atque dolorum
              accusantium ipsa laudantium assumenda.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              quas hic in fugiat est ipsa asperiores! Consequuntur quaerat
              facere tenetur aut amet dignissimos, tempora atque dolorum
              accusantium ipsa laudantium assumenda.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
