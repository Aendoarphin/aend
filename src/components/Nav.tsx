import { useState, useEffect } from 'react';
import { ModeToggle } from './ui/mode-toggle.tsx';
import { Button } from './ui/button.tsx';

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos: number = window.scrollY;
      const isScrollingDown: boolean = currentScrollPos < prevScrollPos;

      setPrevScrollPos(currentScrollPos);

      setVisible(isScrollingDown || currentScrollPos < 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div
        id="nav-bar"
        className={`backdrop-blur-md z-10 px-10 py-5 left-0 right-0 flex flex-col md:flex-row gap-2 justify-between font-mono text-[2vw] md:text-md lg:text-xl uppercase items-center sticky top-0 ${
        visible ? 'translate-y-0 transition-transform' : '-translate-y-full transition-transform'
      }`}
      >
        <h1 className="text-3xl font-bold text-nowrap md:text-3xl cursor-default text-shadow">&lt;aend/&gt;</h1>
        <nav className="m-2 text-center flex flex-wrap justify-center gap-4 items-baseline text-xs">
          <a className="text-nowrap grow" href="#">About_Me</a>
          <a className="text-nowrap grow" href="#my-stack">Technology</a>
          <a className="text-nowrap grow" href="#projects">Projects</a>
          <div className="flex flex-row flex-nowrap gap-4">
            <Button variant="outline" className="grow"><a href="#connect">Connect</a></Button>
            <div className="grow"><ModeToggle/></div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
