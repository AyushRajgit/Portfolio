import React from "react"
import Skills from './components/Skills/Skills'
import CodingProfile from "./components/CodingProfile/CodingProfile"
import Projects from './components/Projects/Projects'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Education from './components/Education/Education'
import BlurBlob from './components/blurblob'
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {
  return (
    <div className="bg-[#050414]">

      <BlurBlob position={{top:'35%',left: '20%'}} size={{width:'30%',height:'40%'}}></BlurBlob>

      {/* CSS for background color and pattern effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main Work goes here */}
      <div className="relative pt-20">
        <Navbar></Navbar>
        <About></About>
        <Skills></Skills>
        <CodingProfile></CodingProfile>
        {/*<Experience></Experience>*/}
        <Projects></Projects>
        <Education></Education>
        <Contact></Contact>
        <SpeedInsights />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App