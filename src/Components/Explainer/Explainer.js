import React, { useEffect } from "react";
import "./Explainer.css";

const Explainer = () => {
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const handleLettersIntoView = () => {
    const letter1 = document.getElementById("letter1");
    const letter2 = document.getElementById("letter2");
    const letter3 = document.getElementById("letter3");
    let windowWidth = window.innerWidth;

    if (isInViewport(letter1)) {
      letter1.style.opacity = "1";
      letter1.style.color = "#1f1f65";
      letter1.style.transform =
        windowWidth > 1250
          ? "translate(-70px, -180px) rotate(0deg)"
          : "translate(-60px, -64px) rotate(0)";
    }

    if (isInViewport(letter2)) {
      letter2.style.opacity = "1";
      letter2.style.color = "#1f1f65";
      letter2.style.transform =
        windowWidth > 1250
          ? "translate(-50px, -380px) rotate(0deg)"
          : "translate(-40px, -40px) rotate(0)";
    }

    if (isInViewport(letter3)) {
      letter3.style.opacity = "1";
      letter3.style.color = "#1f1f65";
      letter3.style.transform =
        windowWidth > 1250
          ? "translate(-30px, -600px) rotate(0deg)"
          : "translate(-20px, -50px) rotate(0)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleLettersIntoView);
    window.addEventListener("resize", handleLettersIntoView);
    return () => {
      window.removeEventListener("scroll", handleLettersIntoView);
      window.removeEventListener("resize", handleLettersIntoView);
    };
  }, []);

  return (
    <div className="explainer">
      <p id="letter1" className="noSelect">
        O
      </p>
      <p id="letter2" className="noSelect">
        C
      </p>
      <p id="letter3" className="noSelect">
        S
      </p>

      <div className="explainerText" id="explainerText1">
        <h2 id="firstExplainerHeader">Online Career Summit</h2>
        <p>
          {" "}
          Birçok sektörden öncü şirketlerin işveren markalarını, ülke çapında
          binlerce öğrenciyle buluşturan ve genç yeteneklerin gelişimlerine
          destek olarak akıllarındaki soruların yanıtlandığı online bir
          platformdur.
          <br />
          <br />
          Online olarak gerçekleştirilmesi sayesinde şirketler ve genç
          yetenekler fiziksel sınırların engeline takılmadan buluşabilir.
          <br />
          <br />
          Online Career Summit her yıl Nisan ayında şirketlerin kendilerini
          tanıttığı ve gündemlerini genç yeteneklerle paylaştığı içeriklerle
          gerçekleşir. Her Ekim ayında ise Mühendislik&Teknoloji ve
          Satış&Pazarlama’ya ilgili genç yetenekleri şirketlerle bir araya
          getirmektedir.
        </p>
      </div>

      <div className="explainerText" id="explainerText2">
        <h2>Engineering&Technology Edition</h2>
        <p>
          {" "}
          Mühendislik ve Teknoloji, toplumun günlük olarak kullandığı altyapı,
          cihazlar, araçlar ve bilgi sistemlerinin tasarımı, üretimi ve bakımı
          ile ilgili her şeyi ele alan konular kümesidir.
          <br />
          <br />
          Teknolojinin, endüstriyel tasarımın ve uygulamalı bilimin geleceğini
          şekillendirmek için ihtiyaç duyulan bilgi ve trendleri aktarmak için;
          sektörün prestijli şirketlerinde yer alan deneyimli mühendisler Online
          Career Summit:Engineering&Technology Edition’da genç yeteneklerle bir
          araya gelir.
        </p>
      </div>

      <div className="explainerText" id="explainerText3">
        <h2 id="lastExplainerHeader">Sales&Marketing Edition</h2>
        <p>
          {" "}
          3İKinsights* araştırmalarına göre pazarlama, genç yeteneklerin
          geleceklerini kurmak istedikleri departmanların başında geliyor!
          <br />
          <br />
          Bu durumun başlıca sebebi, birçok departmanla birlikte çalışarak çok
          yönlü bakış açısı kazanmaları ve yaratıcı yönlerini farklı projelere
          dahil edebilme fırsatına sahip olmaları.
          <br />
          <br />
          Satış ise mevcut genç kuşağın işverenlerden en büyük beklentisi olan
          kendini daha hızlı gösterme ve yükselme imkânı sunmasından dolayı genç
          yetenekler için tercih sebebi.
          <br />
          <br />
          Sektörün prestijli şirketlerinde yer alan deneyimli uzmanlar Online
          Career Summit:Sales&Marketing Edition’da genç yeteneklerle bir araya
          gelerek Pazarlama ve Satış alanlarında bilgi ve deneyimlerini aktarır.
        </p>
      </div>
    </div>
  );
};

export default Explainer;
