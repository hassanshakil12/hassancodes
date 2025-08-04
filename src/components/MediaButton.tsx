import { useRef, useState, useEffect } from "react";
import gsap from "gsap";

type MediaButtonProps = {
  text: string;
  link: string;
  icon: string;
};

const MediaButton = ({ text, link, icon }: MediaButtonProps) => {
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
    gsap.set(".anim-btn", {
      y: "200%",
    });
    gsap.to(".anim-btn", {
      delay: 0.5,
      y: "0%",
      duration: 1,
      ease: "power1.inOut",
      stagger: {
        amount: 0.15,
        from: "start",
      },
    });
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      className="anim-btn group relative border border-green-500 flex items-center space-x-2 rounded-full text-white py-2 px-4 overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${coords.x}px ${coords.y}px, rgba(2,183,75,0.3) 0%, rgba(2,183,75,1) 100%)`,
        transition: "background 0.3s ease",
      }}
    >
      <img
        src={icon}
        alt={`${text} icon`}
        className="w-6 h-6 transition-all duration-300 group-hover:invert"
      />
    </a>
  );
};

export default MediaButton;
