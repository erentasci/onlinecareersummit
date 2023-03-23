import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  logos2020,
  logos2021,
  logos2022,
  logos2023,
} from "./ParticipantCompanies";
import "./Participants.css";

const Participants = () => {
  const [selectedYear, setSelectedYear] = useState("2020");

  return (
    <div className="participants">
      <h2>Katılımcı Şirketler</h2>
      <div className="yearSelector">
        <p
          onClick={() => setSelectedYear("2020")}
          className={`${selectedYear === "2020" ? "yearSelected" : ""}`}
        >
          2020
        </p>
        <p
          onClick={() => setSelectedYear("2021")}
          className={`${selectedYear === "2021" ? "yearSelected" : ""}`}
        >
          2021
        </p>
        <p
          onClick={() => setSelectedYear("2022")}
          className={`${selectedYear === "2022" ? "yearSelected" : ""}`}
        >
          2022
        </p>
        <p
          onClick={() => setSelectedYear("2023")}
          className={`${selectedYear === "2023" ? "yearSelected" : ""}`}
        >
          2023
        </p>
      </div>
      <div className="participantCompanies">
        {selectedYear === "2020"
          ? logos2020.map((logo, i) => {
              return (
                <div key={i}>
                  <LazyLoadImage src={logo} alt="" />
                </div>
              );
            })
          : selectedYear === "2021"
          ? logos2021.map((logo, i) => {
              return (
                <div key={i}>
                  <LazyLoadImage src={logo} alt="" />
                </div>
              );
            })
          : selectedYear === "2022"
          ? logos2022.map((logo, i) => {
              return (
                <div key={i}>
                  <LazyLoadImage src={logo} alt="" />
                </div>
              );
            })
          : logos2023.map((logo, i) => {
              return (
                <div key={i}>
                  <LazyLoadImage src={logo} alt="" />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Participants;
