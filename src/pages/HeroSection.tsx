import { useEffect } from "react";
import { Navbar } from "../components";
import gsap from "gsap";

const HeroSection = () => {
  useEffect(() => {
    gsap.set(".rolling-text", { y: "445%" });

    gsap.to(".rolling-text", {
      delay: 0.5,
      y: "-342.5%",
      duration: 1.75,
      ease: "power1.inOut",
      stagger: {
        amount: 0.5,
        from: "start",
      },
      color: "white",
    });

    gsap.set(".rolling-text-02", { y: "390%" });

    gsap.to(".rolling-text-02", {
      delay: 1.2,
      y: "-294%",
      duration: 1.75,
      ease: "power1.inOut",
      stagger: {
        amount: 0.5,
        from: "start",
      },
      color: "white",
    });

    gsap.set(".side-text", { x: "50vw" });
    gsap.to(".side-text", {
      delay: 0.5,
      x: 0,
      ease: "power1.inOut",
      duration: 1.2,
      color: "white",
    });

    gsap.set(".side-text-02", { x: "-50vw" });
    gsap.to(".side-text-02", {
      delay: 0.75,
      x: 0,
      ease: "power1.inOut",
      duration: 1.2,
      color: "white",
    });
  }, []);

  return (
    <div className="bg-neutral-800 h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full text-white overflow-hidden">
        <div className="relative w-full flex items-center space-x-12 justify-center h-[120px] overflow-hidden mr-[15%]">
          <div className="relative h-[100%] flex flex-col items-center justify-center rolling-text">
            <h1 className="text-9xl font-bold text-green-500">Coding</h1>
            <h1 className="text-9xl font-bold text-green-500">Anime</h1>
            <h1 className="text-9xl font-bold text-green-500">Data</h1>
            <h1 className="text-9xl font-bold text-green-500">Develop</h1>
            <h1 className="text-9xl font-bold text-green-500">Binary</h1>
            <h1 className="text-9xl font-bold text-green-500">Project</h1>
            <h1 className="text-9xl font-bold mt-[50px]">Welcome</h1>
          </div>
          <div>
            <h1 className="text-9xl font-bold side-text">To</h1>
          </div>
        </div>
        <div className="relative w-full flex items-center space-x-12 justify-center h-[140px] overflow-hidden ml-[15%]">
          <div>
            <h1 className="text-9xl font-bold side-text-02">My</h1>
          </div>
          <div className="relative h-[100%] flex flex-col items-center justify-center rolling-text-02">
            <h1 className="text-9xl font-bold text-green-500">Compiler</h1>
            <h1 className="text-9xl font-bold text-green-500">Database</h1>
            <h1 className="text-9xl font-bold text-green-500">Algorithm</h1>
            <h1 className="text-9xl font-bold text-green-500">Develop</h1>
            <h1 className="text-9xl font-bold text-green-500">Terminal</h1>
            <h1 className="text-9xl font-bold text-green-500">Debugger</h1>
            <h1 className="text-9xl font-bold mt-[50px]">Portfolio</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
