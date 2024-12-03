import { IoMailSharp } from "react-icons/io5";
import Reveal from "../Reveal/Reveal";
import { LuChevronUp } from "react-icons/lu";

const Contact = () => {
  return (
    <section id="contact" className="relative flex justify-center py-20">
      <div className="sm:max-2-[400px] card w-[95%] bg-neutral shadow-2xl md:w-4/6 md:min-w-[530px] lg:w-3/5">
        <div className="card-body grid gap-8">
          <Reveal width="w-full">
         
            <h4 className="text-center text-5xl font-bold text-zinc-200 md:text-6xl">
              Contact<span className="text-primary">.</span>
            </h4>
          </Reveal>
        

          <Reveal width="w-full">
            <p className="text-center text-sm text-zinc-200 md:text-xl">
              Shoot me an email if you want to connect! You can also find me on{" "}
              <span className="text-primary hover:underline">
                <a
                  href="https://www.linkedin.com/in/aleksander-paluch-37145631a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
              </span>{" "}
              if that&apos;s more your speed.
            </p>
          </Reveal>

          <Reveal width="w-full">
            {" "}
            <a
              className="text-md flex items-center justify-center gap-2 font-semibold text-zinc-200 transition-colors hover:text-primary md:text-xl"
              href="mailto:aleksanderpaluch52@gmail.com"
            >
              {" "}
              <span className="md:pt-0.5">
                <IoMailSharp />
              </span>{" "}
              aleksanderpaluch52@gmail.com
            </a>
          </Reveal>
        </div>
       
      </div>
      <button     onClick={() => {
            document.getElementById("hero")?.scrollIntoView();
          }}className="absolute -bottom-20 btn text-xl  btn-ghost md:text-2xl"><LuChevronUp /></button>
    </section>
  );
};

export default Contact;
