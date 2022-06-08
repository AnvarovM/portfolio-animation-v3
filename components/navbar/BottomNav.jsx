import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import { BsGithub } from "react-icons/bs";
import { FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { RiLightbulbLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";

const BottomNav = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter();
  const { locale } = router;

  const iconClass = 'text-xl md:text-2xl hover:text-gray-700 duration-300 cursor-pointer'

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <RiLightbulbLine
          title="Theme light"
          className={iconClass}
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <BsMoon
          title="Theme dark"
          className="text-xl md:text-[1.3rem] hover:text-gray-700 duration-300 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className="fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 w-[15rem] flex items-center rounded-xl py-4 px-4 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 dark:bg-black dark:backdrop-filter dark:backdrop-blur-lg dark:bg-opacity-10">
      <div className="space-x-4 flex items-center mx-auto">
        <FaTelegramPlane className={iconClass} />
        <BsGithub className={iconClass} />
        <FaLinkedinIn className={iconClass} />
        <TbPhoneCall className={iconClass} />
        {renderThemeChanger()}
      </div>
    </div>
  );
};

export default BottomNav;
