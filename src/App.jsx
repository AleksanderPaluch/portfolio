import About from "./About/About";
import "./App.css";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import  SideBar  from "./SideBar/SideBar";

function App() {
  return (
    <>
      <div className="grid grid-cols-[34px_1fr] md:grid-cols-[54px_1fr]">
      
        <SideBar />
      
        <main>
          <Header />
          <div className="mx-auto max-w-5xl space-y-32 px-4 pb-24 md:px-8">
            <Hero />
            <About />
            <Education />
            <Projects />
            <Experience />
            <Contact />
         
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
