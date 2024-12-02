import About from "./About/About";
import "./App.css";
import Experience from "./Experience/Experience";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import ThemeBtn from "./ThemeBtn/ThemeBtn";
function App() {
  return (
    <>
      <div className="grid grid-cols-[54px_1fr]">
        <ThemeBtn />
        {/* <SideBar /> */}
        <p>sidebar</p>
        <main>
          {/* <Header /> */}
          <div className="mx-auto max-w-5xl space-y-32 px-4 pb-24 md:px-8">
            <Hero />
            <About />
            <Projects />
            <Experience />
            {/* <Contact /> */}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
