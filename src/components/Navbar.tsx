import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const navItems = ["Home", "About", "Projects", "Skills", "Timeline", "Contact"];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const sidebarRef = useRef(null);
  const lastScroll = useRef<number>(0);
  const showNav = useRef(true);

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

    gsap.fromTo(
      gsap.utils.toArray("#nav-link"),
      { y: -100 },
      {
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        delay: 0.25,
        stagger: 0.08,
      }
    );

    gsap.set(gsap.utils.toArray("#res-nav-link"), {
      x: -550,
    });

    gsap.set(menuBtnRef.current, { y: 100, opacity: 0 });

    gsap.set(sidebarRef.current, { opacity: 0, x: -800 });
  }, []);

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) return;

    lastScroll.current = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScroll.current;

      if (delta > 0 && currentScroll > 800 && showNav.current) {
        showNav.current = false;
        gsap.to(navbar, {
          y: "-100%",
          duration: 0.6,
          ease: "power2.out",
          opacity: 0,
        });
      }

      if (delta < -5 && !showNav.current) {
        showNav.current = true;
        gsap.to(navbar, {
          y: "0%",
          duration: 0.4,
          ease: "power2.out",
          opacity: 1,
        });
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
              id="nav-link"
              className="hover:text-green-500 transition-all duration-300"
              ref={menuRef}
            >
              {item}
            </a>
          ))}
        </nav>

        <div
          ref={buttonRef}
          className="w-[20%] flex justify-end items-center gap-4"
        >
          <a
            href="https://drive.google.com/file/d/1gLcAOEgiSXIkTLJDQJN8f6iOM_8_JfPM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block border-1 border-green-500 text-lg text-white px-8 py-2 rounded-full hover:text-neutral-900 hover:bg-green-500/90 transition-all duration-300 cursor-pointer"
          >
            Download Resume
          </a>

          <button
            className="md:hidden text-neutral-900 dark:text-white cursor-pointer hover:text-green-500 transition-all duration-300"
            onClick={() => {
              setIsOpen(true);
              gsap.fromTo(
                sidebarRef.current,
                { opacity: 0, x: -800 },
                {
                  opacity: 1,
                  x: 0,
                  duration: 0.75,
                  ease: "power3.inOut",
                }
              );
              gsap.set(gsap.utils.toArray("#res-nav-link"), {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.inOut",
                stagger: 0.02,
                delay: 0.25,
              });
              gsap.set(menuBtnRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: 0.75,
                ease: "power2.inOut",
              });
            }}
            aria-label="Open menu"
          >
            <Menu size={48} />
          </button>
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={`fixed inset-0 z-999 transition-opacity duration-300 bg-green-500 h-screen md:hidden`}
      >
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500`}
          onClick={() => {
            gsap.fromTo(
              sidebarRef.current,
              {
                x: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power3.inOut",
              },
              { x: -800, opacity: 1 }
            );
            gsap.fromTo(
              gsap.utils.toArray("#res-nav-link"),
              {
                x: 0,
              },
              {
                x: -550,
                duration: 0.1,
                ease: "power3.inOut",
                stagger: 0.02,
              }
            );
            gsap.fromTo(
              menuBtnRef.current,
              {
                y: 0,
                opacity: 1,
              },
              {
                y: 100,
                opacity: 0,
                duration: 0.1,
                delay: 0.25,
                ease: "power3.inOut",
              }
            );
            setTimeout(() => {
              setIsOpen(false);
            }, 1000);
          }}
        />

        <div
          className={`absolute top-0 left-0 h-full w-full bg-amber-50 dark:bg-neutral-900 px-8 py-10 transition-transform duration-500 transform`}
        >
          <div className="absolute top-11 right-11 z-99999">
            <button
              onClick={() => {
                gsap.fromTo(
                  sidebarRef.current,
                  {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power3.inOut",
                  },
                  {
                    x: -800,
                    opacity: 1,
                    delay: 0.5,
                    duration: 0.5,
                    ease: "power3.inOut",
                  }
                );
                gsap.fromTo(
                  gsap.utils.toArray("#res-nav-link"),
                  {
                    x: 0,
                  },
                  {
                    x: -550,
                    duration: 0.1,
                    ease: "power3.inOut",
                    stagger: 0.02,
                  }
                );
                gsap.fromTo(
                  menuBtnRef.current,
                  {
                    y: 0,
                    opacity: 1,
                  },
                  {
                    y: 100,
                    opacity: 0,
                    duration: 0.1,
                    delay: 0.25,
                    ease: "power3.inOut",
                  }
                );
                setTimeout(() => {
                  setIsOpen(false);
                }, 1000);
              }}
              className="text-neutral-800 dark:text-white cursor-pointer"
              aria-label="Close menu"
            >
              <X size={48} />
            </button>
          </div>

          <nav className="flex flex-col items-start justify-center space-y-6 font-medium text-neutral-800 dark:text-white">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => {
                  gsap.fromTo(
                    sidebarRef.current,
                    {
                      x: 0,
                      opacity: 1,
                      duration: 0.5,
                      ease: "power3.inOut",
                    },
                    {
                      x: -800,
                      opacity: 1,
                      delay: 0.5,
                      duration: 0.5,
                      ease: "power3.inOut",
                    }
                  );
                  gsap.fromTo(
                    gsap.utils.toArray("#res-nav-link"),
                    {
                      x: 0,
                    },
                    {
                      x: -550,
                      duration: 0.1,
                      ease: "power3.inOut",
                      stagger: 0.02,
                    }
                  );
                  gsap.fromTo(
                    menuBtnRef.current,
                    {
                      y: 0,
                      opacity: 1,
                    },
                    {
                      y: 100,
                      opacity: 0,
                      duration: 0.1,
                      delay: 0.25,
                      ease: "power3.inOut",
                    }
                  );
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 1000);
                }}
                id="res-nav-link"
                className="hover:text-green-500 transition-all duration-300 text-5xl"
                style={{
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                {item}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1gLcAOEgiSXIkTLJDQJN8f6iOM_8_JfPM/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              ref={menuBtnRef}
              className="absolute bottom-10 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 lg:py-6 lg:px-12 rounded-full border border-green-500 hover:bg-green-500 hover:text-neutral-900 transition-all duration-300 cursor-pointer"
            >
              Download Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
