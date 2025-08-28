import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/context";
import { IconMoon, IconSun } from "@tabler/icons-react";
export default function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);

  const navLinks = ["about", "projects"];
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos < prevScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isScrollingDown || currentScrollPos < 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 backdrop-blur-2xl ${
        visible
          ? "translate-y-0 transition-transform"
          : "-translate-y-40 transition-transform"
      }`}
    >
      <div className="flex items-center justify-between mx-4 my-4 sm:mx-6">
        {/* Brand */}
        <a
          className="flex pb-2 sm:pb-0 items-baseline gap-1 transition-all ease-in hover:gap-0 group text-xl sm:text-4xl"
          href="/"
        >
          <div className="flex font-zbonus">AENDOARPHIN</div>
          <h6 className="text-sm font-zbonus duration-200 opacity-0 sm:text-lg group-hover:opacity-100">
            .com
          </h6>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 text-nowrap">
          {navLinks.map((link, index) => (
            <div key={index} className="group">
              <a
                href={`#${link}`}
                className="text-xs sm:text-base lg:text-xl uppercase font-semibold transition-all block"
              >
                {link}
              </a>
              <hr className="w-0 h-0.5 bg-current border-none transition-all duration-75 ease-in group-hover:w-full" />
            </div>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-1 transition-all hover:scale-110"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <IconSun className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <IconMoon className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
