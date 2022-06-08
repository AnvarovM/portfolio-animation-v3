import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { gsap, Power3 } from "gsap";

import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { BsGithub, BsTelegram } from "react-icons/bs";

const Navbar = () => {
  const logo = useRef(null);
  const navList1 = useRef(null);
  const navList2 = useRef(null);
  const navList3 = useRef(null);
  const navList4 = useRef(null);
  const menu = useRef(null);

  const tl = gsap.timeline();
  const ease = Power3.easeOut;

  useEffect(() => {
    tl.fromTo(
      [logo, navList1, navList2, navList4, menu],
      1,
      {
        opacity: 0,
        duration: 1,
        y: 50,
      },
      {
        opacity: 1,
        duration: 1,
        y: 0,
        stagger: {
          amount: 0.3,
        },
        ease: ease,
      }
    );
  }, [ease, tl]);

  const link =
    "text-black hover:text-opacity-70 dark:text-white dark:hover:text-opacity-70 font-semibold cursor-pointer ";

  return (
    <>
      <nav className="fixed z-50 top-0 left-0 right-0 flex items-center justify-between py-3 md:py-4 px-4 bg-white backdrop-filter backdrop-blur-md bg-opacity-10 dark:bg-black dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-10">
        <div ref={(el) => (logo = el)}>
          <Link href="/">
            <Image
              className="cursor-pointer hover:opacity-80"
              src="/logo.png"
              width={40}
              height={40}
              alt="logo image"
            />
          </Link>
        </div>
        <ul className="nav-items flex items-center space-x-3 md:space-x-5">
          <Link href="/about">
            <li ref={(el) => (navList1 = el)} className={link}>
              About
            </li>
          </Link>
          <Link href="/">
            <li ref={(el) => (navList2 = el)} className={link}>
              Portfolio
            </li>
          </Link>
          <Link target="_blank" href="#!">
            <li
              ref={(el) => (navList4 = el)}
              className={link + "hidden md:block"}
            >
              Download CV
            </li>
          </Link>
        </ul>
        <div ref={(el) => (menu = el)} className="flex items-center space-x-3">
          <strong className="cursor-pointer hover:text-opacity-70">v.3</strong>
          <HiOutlineMenuAlt4
            className="cursor-pointer hover:text-opacity-80"
            size={30}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
