import { useState } from "react";
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

  const [isPolish, setIsPolish] = useState(false)



  return (
    <>
      <div className="grid grid-cols-[34px_1fr] md:grid-cols-[54px_1fr]">
      
        <SideBar />
      
        <main>
          <Header setIsPolish={setIsPolish} isPolish={isPolish}/>
          <div className="mx-auto max-w-5xl space-y-32 px-4 pb-24 md:px-8">
            <Hero isPolish={isPolish} />
            <About isPolish={isPolish}/>
            <Education isPolish={isPolish} />
            <Projects isPolish={isPolish} />
            <Experience isPolish={isPolish} />
            <Contact isPolish={isPolish} />
         
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
