import React, { useEffect, useState } from "react";
import Logo from "../../Media/NavbarLogo.webp";
import "./Navbar.css";

const Navbar = ({ smoothScroll }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleScroll = () => {
    let windowWidth = window.innerWidth;
    if (window.innerWidth > 900) {
      if (window.pageYOffset < 50) {
        //Navbar Default
        document.getElementsByTagName("nav")[0].style.backgroundColor =
          "transparent";
        document.getElementsByTagName("nav")[0].style.padding =
          windowWidth > 1400
            ? "40px 6vw 24px 5vw"
            : windowWidth > 1130
            ? "24px 6vw 24px 5vw"
            : "16px 6vw 24px 5vw";
        document.getElementsByTagName("nav")[0].style.width = "89vw";
        document.getElementsByTagName("nav")[0].style.boxShadow =
          "0 0 0px #b028a240";

        document.getElementsByClassName("navLogo")[0].style.transform =
          windowWidth > 1400
            ? "scale(.9)"
            : windowWidth > 1130
            ? "scale(.8)"
            : "scale(.6)";

        document.getElementsByClassName("navLogo")[0].style.marginLeft =
          windowWidth > 1130 ? "0" : "-16px";

        document.getElementById("navBarLinksContainer").style.gap =
          windowWidth > 1400 ? "6vw" : windowWidth > 1130 ? "3.5vw" : "2.5vw";
        document.getElementById("navbarCTA").style.padding =
          windowWidth > 1130 ? "15px 20px 16px" : "11px 16px 12px";

        document.getElementById("navbarCTA").style.fontSize =
          windowWidth > 1130 ? "1rem" : ".8rem";

        Array.from(
          document
            .getElementById("navBarLinksContainer")
            .getElementsByTagName("li")
        ).map((navLi) => {
          navLi.style.fontSize = windowWidth > 1130 ? "1rem" : ".85rem";
        });
      } else {
        //Navbar When Scrolled
        document.getElementsByTagName("nav")[0].style.backgroundColor =
          "#1F1F65";
        document.getElementsByTagName("nav")[0].style.padding =
          "0px 6vw 0px 4.3vw";
        document.getElementsByTagName("nav")[0].style.width = "89.7vw";
        document.getElementsByTagName("nav")[0].style.boxShadow =
          "0 0 16px #b028a240";

        document.getElementsByClassName("navLogo")[0].style.transform =
          windowWidth > 1130 ? "scale(.5)" : "scale(.4)";

        document.getElementsByClassName("navLogo")[0].style.marginLeft =
          windowWidth > 1130 ? "0" : "-16px";

        document.getElementById("navBarLinksContainer").style.gap =
          windowWidth > 1400 ? "6.2vw" : windowWidth > 1130 ? "3.5vw" : "2.5vw";

        document.getElementById("navbarCTA").style.padding =
          windowWidth > 1130 ? "11px 18px 12px" : "10px 16px 10px";

        document.getElementById("navbarCTA").style.fontSize =
          windowWidth > 1130 ? "1rem" : ".8rem";

        Array.from(
          document
            .getElementById("navBarLinksContainer")
            .getElementsByTagName("li")
        ).map((navLi) => {
          navLi.style.fontSize = windowWidth > 1130 ? "1rem" : ".85rem";
        });
      }
    } else {
      if (window.pageYOffset < 50) {
        //Navbar Default
        document.getElementsByTagName("nav")[0].style.backgroundColor =
          "transparent";
        document.getElementsByTagName("nav")[0].style.padding =
          "48px 6vw 32px 5vw";
        document.getElementsByTagName("nav")[0].style.width = "89vw";
        document.getElementsByTagName("nav")[0].style.boxShadow =
          "0 0 0px #b028a240";
        document.getElementsByClassName("navLogo")[0].style.transform =
          windowWidth > 500 ? "scale(.6)" : "scale(.45)";
      } else {
        //Navbar When Scrolled
        document.getElementsByTagName("nav")[0].style.backgroundColor =
          "#1F1F65";
        document.getElementsByTagName("nav")[0].style.padding =
          windowWidth > 500 ? "32px 6vw 32px 5vw" : "32px 6vw 28px 5vw";
        document.getElementsByTagName("nav")[0].style.width = "89.7vw";
        document.getElementsByTagName("nav")[0].style.boxShadow =
          "0 0 16px #b028a240";
        document.getElementsByClassName("navLogo")[0].style.transform =
          windowWidth > 500 ? "scale(.5)" : "scale(.35)";
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    if (isMenuActive) {
      setIsMenuActive(false);
    } else {
      setIsMenuActive(true);
    }
  };

  const handleItemClick = (element) => {
    setIsMenuActive(false);
    smoothScroll(element);
  };

  return (
    <nav>
      <img
        src={Logo}
        className="navLogo"
        alt="Etkileşim ve Gelişim Kampı"
        onClick={() => smoothScroll(document.getElementsByClassName("App")[0])}
      />
      <ul id="navBarLinksContainer">
        <li
          onClick={() =>
            smoothScroll(document.getElementsByClassName("explainer")[0])
          }
        >
          OCS Nedir?
        </li>
        <li
          onClick={() =>
            smoothScroll(document.getElementsByClassName("whoCanJoin")[0])
          }
        >
          Kimler Katılabilir
        </li>
        <li
          onClick={() =>
            smoothScroll(document.getElementsByClassName("timeTables")[0])
          }
        >
          Program Akışı
        </li>
        <li
          onClick={() =>
            smoothScroll(document.getElementsByClassName("participants")[0])
          }
        >
          Katılımcı Şirketler
        </li>
        <li
          onClick={() =>
            smoothScroll(document.getElementsByClassName("FAQ")[0])
          }
        >
          S.S.S
        </li>
        <li
          onClick={() =>
            smoothScroll(document.getElementsByClassName("form")[0])
          }
          id="navbarCTA"
        >
          Hemen Kayıt Ol
        </li>
      </ul>
      <div className="mobileNavBar">
        <div
          onClick={handleMenuClick}
          className={`hamburgerMenu ${
            isMenuActive ? "hamburgerMenuActive" : ""
          }`}
        >
          <div className="barTop"></div>
          <div className="barMiddle"></div>
          <div className="barBottom"></div>
        </div>
        <ul
          className={`mobileNavBarLinksContainer ${
            isMenuActive ? "mobileNavBarLinksContainerActive" : ""
          }`}
        >
          <li
            onClick={() =>
              handleItemClick(document.getElementsByClassName("explainer")[0])
            }
          >
            OCS Nedir?
          </li>
          <li
            onClick={() =>
              handleItemClick(document.getElementsByClassName("whoCanJoin")[0])
            }
          >
            Kimler Katılabilir
          </li>
          <li
            onClick={() =>
              handleItemClick(document.getElementsByClassName("timeTables")[0])
            }
          >
            Katılımcı Şirketler
          </li>
          <li
            onClick={() =>
              handleItemClick(
                document.getElementsByClassName("participants")[0]
              )
            }
          >
            Program Akışı
          </li>
          <li
            onClick={() =>
              handleItemClick(document.getElementsByClassName("FAQ")[0])
            }
          >
            S.S.S
          </li>
          <li
            onClick={() =>
              handleItemClick(document.getElementsByClassName("form")[0])
            }
          >
            Hemen Kayıt Ol
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
