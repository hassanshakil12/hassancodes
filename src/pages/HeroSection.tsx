import { Navbar } from "../components";
const HeroSection = () => {
  return (
    <>
      <div className="bg-neutral-800 h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-9xl font-bold">
            Welcome To
          </h1>
          <h1 className="text-9xl font-bold">
            My Portfolio
          </h1>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
