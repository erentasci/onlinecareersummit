import React, { useState } from "react";
import Question from "./Question";
import "./FAQ.css";

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "Etkinliğe kimler katılabilir?",
      answer:
        "Kariyer yolunda sorularının yanıtını almak isteyen herkes Online Career Summit’e katılabilir!",
    },
    {
      id: 2,
      title: "Etkinliğe nasıl katılabilirim?",
      answer:
        "Etkinlik günü canlı yayın bağlantı linkini kayıt olduğun mail adresine göndereceğiz. Bilgisayarın veya mobil cihazınla canlı yayına katılabilirsin.",
    },
    {
      id: 3,
      title: "Etkinliğe katılmak için kayıt yaptırmalı mıyım?",
      answer:
        "Kariyer yolunda sorularının yanıtını almak isteyen herkes Online Career Summit’e katılabilir!",
    },
    {
      id: 4,
      title: "Etkinliğe katılmak için bir ücret ödemek gerekiyor mu?",
      answer:
        "Hayır, tamamen ücretsiz etkinliğimize katılmak için yayın saatinde bu sitede olman yeterli!",
    },
    {
      id: 5,
      title: "Etkinlik süresince kameramın açık olması gerekir mi?",
      answer:
        "Kameranızın açık olmasına gerek yok! Sadece arkana yaslan ve verilen tavsiyeleri izle.",
    },
    {
      id: 6,
      title: "Teknik bir arıza yaşadığımda nasıl çözebilirim?",
      answer:
        "İnternet bağlantını kontrol edebilir ya da sayfayı yenileyerek tekrar bağlantımıza geri dönebilirsin.",
    },
  ]);

  return (
    <div className="FAQ">
      <h2>Sıkça Sorulan Sorular</h2>
      <div className="questions">
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
