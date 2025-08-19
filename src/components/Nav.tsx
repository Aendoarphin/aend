import { useState, useEffect } from "react";

export default function Nav() {
  const brandText: Array<string> = ["a", "e", "n", "d"];
  const navLinks: Array<string> = ["about", "projects", "tech"];
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
      className={`fixed left-0 right-0 top-0 ${
        visible
          ? "translate-y-0 transition-transform"
          : "-translate-y-40 transition-transform"
      }`}
    >
      <div className="flex items-center justify-between p-6">
        <a
          className="flex items-end content-center gap-1 text-4xl uppercase transition-all ease-in sm:text-6xl h-min hover:gap-0 group"
          href="/"
        >
          {brandText.map((letter) => (
            <p className="font-zbonus text-7xl max-h-11">{letter}</p>
          ))}
          <p className="text-sm font-zbonus duration-200 opacity-0 font-brand sm:text-lg group-hover:opacity-100">
            .dev
          </p>
        </a>
        <div id="links-container" className="flex flex-row gap-4 text-nowrap">
          {Object.values(navLinks).map((link) => (
            <div className="text-xs uppercase transition-all sm:text-base group">
              <a href={`#${link}`}>{link}</a>
              <br />
              <hr className="w-0 transition-all duration-75 ease-in group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
