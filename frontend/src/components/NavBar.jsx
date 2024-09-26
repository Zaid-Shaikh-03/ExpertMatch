import React from "react";
import { Button, Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar fluid className="py-4">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-3xl font-semibold text-black font-['GIORDANI_Registry'] tracking-wider xl:ml-16 dark:text-white">
            Expert match
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 xl:mx-16">
          <Button className="bg-[#795757]">Get started</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link
            href="/"
            className={`text-lg ${pathname === "/" ? "active" : ""}`}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/newExpertPage"
            className={`text-lg ${
              pathname === "/newExpertPage" ? "active" : ""
            }`}
          >
            Enter New Expert
          </Navbar.Link>
          <Navbar.Link
            href="/experts"
            className={`text-lg ${
              pathname === "/experts" ? "active" : ""
            } active:bg-zinc-500`}
          >
            Experts
          </Navbar.Link>
          <Navbar.Link
            href="#contact"
            className={`text-lg ${pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
