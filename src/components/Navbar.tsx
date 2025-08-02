const Navbar = () => {
  return (
    <>
      <header className="bg-red-300 flex justify-between items-center py-4 px-10">
        <div className="w-[33%]">Muhammad Hassan</div>
        <nav className="w-[34%] flex justify-center">
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Timeline</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="w-[33%] flex justify-end">
          <button>Download Resume</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
