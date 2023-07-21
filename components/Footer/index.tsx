import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "../../assets/images/logo.png";

export const Footer = () => {
  const [pageTopBtn, setPageTopBtn] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const footer: HTMLElement | null = document.querySelector("footer");
    setFooterHeight(footer.offsetHeight);

    const handleScroll = () => {

      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );

      const windowHeight = window.innerHeight; // Height of the viewport
      const scrollY = window.scrollY; // Vertical scroll position
      const visibleHeight = windowHeight + scrollY;

      if (documentHeight - visibleHeight + 45 <= footerHeight) {
        setPageTopBtn(true);
      } else {
        setPageTopBtn(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, [footerHeight]);

  return (
    <>
      <footer>
        <div className="footerflex">
          <div className="left">
            <Link href="#">
              <Image src={logo} alt="">
              </Image></Link>
            <p className="add"><span className="postcode">〒990-0000</span>山形県山形市</p>
            <p className="tel">TEL.000-0000-0000</p>
          </div>
          <div className="right">
            <nav className="gnav">
              <ul className="nonstyle footer_ul">
                <li></li>
              </ul>
            </nav>
            <p className="copy">&copy;&nbsp;2022- .</p>
          </div>
        </div>

      </footer>
      <div
        className={`page_top ${pageTopBtn && "fix-btn-to-footer"}`}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      ></div>
      <style jsx>{`
        .fix-btn-to-footer {
          position: absolute;
          bottom: calc(${footerHeight}px - 30px);
        }
      `}</style>


    </>
  );
};