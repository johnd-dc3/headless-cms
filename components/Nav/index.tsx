import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import logo from "../../assets/images/logo.png";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  console.log(menuOpen);

  return (
    <>
      <header className="header">
        <div className="headerflex">
          <div className="left">
            <h1>
              <Link href="/">
                <Image
                  src={logo}
                  alt="">
                </Image>
              </Link></h1>
          </div>
          <div className="right">
            <nav className="gnav">
              <ul className="nonstyle">
                <li>
                  <Link href="/" className="px-4">
                    Home
                  </Link></li>
                <li>
                  <Link href="/access" className="px-4">
                    Access
                  </Link></li>
                <li>
                  <Link href="/about" className="px-4">
                    About
                  </Link></li>
                <li>
                  <Link href="/contact" className="px-4">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <nav className="sns pcblock">
              <ul className="ul_sns nonstyle">
                <li><a href="" target="_blank" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="" target="_blank" className="tw"><i className="fab fa-twitter"></i></a></li>
                <li><a href="" target="_blank" className="in"><i className="fab fa-instagram"></i></a></li>
                <li><a href="" target="_blank" className="yt"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div
        className={`hamburger spblock ${menuOpen && "active"}`}
        onClick={handleClick}
      >
        <span></span><span></span><span></span>
      </div >
      <div className={`navigation ${menuOpen && "open"}`}>
        <nav className="gnav">
          <ul className="nonstyle">
            <li>
              <Link href="/" className="px-4">
                Home
              </Link></li>
            <li>
              <Link href="/access" className="px-4">
                Access
              </Link></li>
            <li>
              <Link href="/about" className="px-4">
                About
              </Link></li>
            <li>
              <Link href="/contact" className="px-4">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};