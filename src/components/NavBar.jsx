import { useWindowScroll } from "react-use";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const navItems = [
  {
    label: "News",
    href: "https://www.marvelrivals.com/news/",
  },
  { label: "Game Info", href: "www" },
  { label: "Hero", href: "" },
  { label: "Event", href: "" },
  { label: "Esports", href: "/esports" },
];
function NavBar() {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="flex transition-all duration-500  px-4 py-0 m-2 justify-between bg gap-6 fixed top-0 left-0 right-0 z-50"
    >
      <nav className="flex justify-between font-general uppercase  container mx-auto w-full gap-6">
        <a
          href="/"
          className="flex gap-2 items-center justify-center cursor-pointer"
        >
          <img className="w-15" src="img/logo.png" alt="" />
          <span className="font-zentry text-xl">Rivals</span>
        </a>
        <ul className="hidden md:flex gap-6 text-[12px] font-thin justify-center items-center">
          {navItems.map((item, index) => {
            const isExternal = item.href && item.href.startsWith("http");
            return (
              <li key={index} className="text-white cursor-pointer">
                <a
                  href={item.href}
                  className="nav-hover-btn"
                  {...(isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
