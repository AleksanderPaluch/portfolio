import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Reveal from "../Reveal/Reveal";

const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" side="left" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_300px]">
        <div className="prose">
          <Reveal>
            <p>
            <span className="bg-primary text-zinc-200 py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
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
