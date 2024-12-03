import { IoMailSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <section id="contact" className="flex justify-center py-20">
      <div className="card w-[95%] sm:max-2-[400px] md:min-w-[530px] md:w-4/6 bg-neutral shadow-xl lg:w-3/5">
        <div className="card-body grid gap-8">
          <h2 className="text-center text-5xl font-bold md:text-6xl">
            Contact<span className="text-primary">.</span>
          </h2>
          <p className="text-sm  text-center md:text-xl">
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
          <a className="text-md md:text-3xl font-semibold flex items-center gap-2 justify-center transition-colors hover:text-primary" href="mailto:aleksanderpaluch52@gmail.com">
            {" "}
            <span className="md:pt-1.5">
              <IoMailSharp />
            </span>{" "}
            aleksanderpaluch52@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
