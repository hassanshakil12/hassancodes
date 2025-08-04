import { useEffect, useState, useRef } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCoords({ x, y });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      onClick={scrollToTop}
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      className="cursor-pointer w-20 h-20 flex justify-center items-center group relative border border-green-500 rounded-full text-white py-2 px-4 overflow-hidden transition-all duration-300 ease-in-out"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        transform: isVisible ? "scale(1)" : "scale(0.9)",
        transition:
          "opacity 0.4s ease, transform 0.4s ease, background 0.3s ease, visibility 0.4s ease",
        background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(2,183,75,0.3) 0%, rgba(2,183,75,1) 100%)`,
      }}
      aria-label="Scroll to top"
    >
      <ChevronUp className="text-white h-6 w-6 invert group-hover:invert-0" />
    </a>
  );
};

export default ScrollToTopButton;
