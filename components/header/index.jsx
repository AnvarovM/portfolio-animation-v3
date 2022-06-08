import { useRef, useEffect } from "react";

import { gsap, Power3 } from "gsap";

const Header = () => {
  const heading1 = useRef(null);
  const heading2 = useRef(null);

  const tl = gsap.timeline();
  const ease = Power3.easeOut;

  useEffect(() => {
    tl.fromTo(
      [heading1, heading2],
      1,
      {
        opacity: 0,
        duration: 1,
        y: -50,
      },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        ease: ease,
      }
    );
  }, [ease, tl]);

  return (
    <>
      <header className="min-h-screen flex flex-col items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-screen h-full object-cover"
        >
          <source src="/header.webm" type="video/webm" />
        </video>
        <h1
          ref={(el) => (heading1 = el)}
          className="animation_gradient_text2 z-10 text-[5rem] md:text-[10rem]"
        >
          Frontend.
        </h1>
        <h1
          ref={(el) => (heading2 = el)}
          className="animation_gradient_text2 z-10 text-[5rem] md:text-[10rem]"
        >
          Dev.
        </h1>
      </header>
    </>
  );
};

export default Header;
