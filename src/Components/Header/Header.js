import React from "react";
import HeaderBackground from "../../Media/HeaderBackground.png";
import HeaderCenter from "../../Media/Header.png";
import HeaderMainText from "../../Media/HeaderMainText.png";
import "./Header.css";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        backgroundImage: `url(${HeaderBackground})`,
        backgroundRepeat: "cover",
        backgroundSize: "100vw 104vh",
        backgroundPosition: "top left",
      }}
    >
      <div className="headerContainer noSelect">
        <div className="headerCenterText">
          <img
            src={HeaderCenter}
            alt="Header Center Text"
            width={800}
            style={{ marginTop: "2rem" }}
          />
          <img
            src={HeaderMainText}
            alt="Kampüsün En Keyifli Alternatifi"
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
