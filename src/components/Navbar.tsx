import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

const navItems = ["Home", "About", "Projects", "Skills", "Timeline", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        delay: 0.7,
        ease: "power2.inOut",
      }
    );

    gsap.fromTo(
      logoRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.inOut",
        delay: 1.2,
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.inOut",
        delay: 1.2,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <header
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-neutral-900/90 backdrop-blur border-b-1 border-neutral-200 dark:border-green-500 shadow-md"
    >
      <div className="py-4 px-10 flex justify-between items-center">
        <div
          ref={logoRef}
          className="text-2xl font-bold text-neutral-900 dark:text-white w-[20%]"
        >
          Muhammad Hassan
        </div>

        <nav className="hidden md:flex justify-center space-x-6 w-[60%] text-lg font-mono text-neutral-800 dark:text-white">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-green-500 transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        <div
          ref={buttonRef}
          className="w-[20%] flex justify-end items-center gap-4"
        >
          <button className="hidden md:inline-block border-1 border-green-500 text-lg text-white px-8 py-2 rounded-full hover:text-neutral-900 hover:bg-green-500/90 transition-all duration-300 cursor-pointer">
            Download Resume
          </button>

          <button
            className="md:hidden text-neutral-900 dark:text-white"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 bg-amber-50 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-0 left-0 h-full w-full bg-amber-50 dark:bg-neutral-900 px-8 py-10 transition-transform duration-500 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-10">
            <button
              onClick={() => setIsOpen(false)}
              className="text-neutral-800 dark:text-white"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center space-y-6 text-xl font-medium text-neutral-800 dark:text-white">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-green-500 transition-all duration-300"
                style={{
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                {item}
              </a>
            ))}

            <button className="mt-8 bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition">
              Download Resume
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
