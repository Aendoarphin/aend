import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/context";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);

  const brandText: Array<string> = ["a", "e", "n", "d"];
  const navLinks: Array<string> = ["about", "projects"];
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos: number = window.scrollY;
      const isScrollingDown: boolean = currentScrollPos < prevScrollPos;

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
      className={`fixed left-0 right-0 top-0 backdrop-blur-2xl ${
        visible
          ? "translate-y-0 transition-transform"
          : "-translate-y-40 transition-transform"
      }`}
    >
      <div className="flex items-center gap-4 justify-between m-4 mx-6">
        <a
          className="flex items-end content-center gap-1 text-4xl uppercase transition-all ease-in sm:text-6xl h-min hover:gap-0 group"
          href="/"
        >
          {brandText.map((letter) => (
            <p className="font-zbonus text-4xl max-h-4 sm:text-7xl sm:max-h-11">
              {letter}
            </p>
          ))}
          <p className="text-sm font-zbonus duration-200 opacity-0 font-brand sm:text-lg group-hover:opacity-100">
            .dev
          </p>
        </a>
        <div
          id="links-container"
          className="flex flex-row gap-4 text-nowrap items-center"
        >
          {Object.values(navLinks).map((link) => (
            <div className="uppercase transition-all font-semibold sm:text-base group">
              <a href={`#${link}`} className="text-xs lg:text-xl">
                {link}
              </a>
              <br />
              <hr className="w-0 transition-all duration-75 ease-in group-hover:w-full" />
            </div>
          ))}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
