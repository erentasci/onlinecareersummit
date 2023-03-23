import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import Background from "../../Media/FormBackground.png";
import Alert from "react-popup-alert";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import "./Form.css";

const Form = (props) => {
  const [phoneInputValue, setPhoneInputValue] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [alert, setAlert] = useState({
    type: "success",
    text: "Form Başarıyla Gönderildi.",
    show: false,
  });

  const closeAlert = () => {
    setAlert({
      type: "success",
      text: "Form Başarıyla Gönderildi.",
      show: false,
    });
    setTimeout(() => {
      props.smoothScroll(document.getElementsByClassName("form")[0]);
    }, 10);
  };

  const showAlert = () => {
    setAlert({
      type: "success",
      text: "Form Başarıyla Gönderildi.",
      show: true,
    });
  };

  // eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp6XVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIi5wibmFtZSI6Ikpva2G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

  axios.defaults.baseURL = "https://api.mtstaj.co/api";
  axios.defaults.headers["X-Api-Token"] =
    "eyJhbGciOiJQUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.MqF1AKsJkijKnfqEI3VA1OnzAL2S4eIpAuievMgD3tEFyFMU67gCbg-fxsc5dLrxNwdZEXs9h0kkicJZ70mp6p5vdv-j2ycDKBWg05Un4OhEl7lYcdIsCsB8QUPmstF-lQWnNqnq3wra1GynJrOXDL27qIaJnnQKlXuayFntBF0j-82jpuVdMaSXvk3OGaOM-7rCRsBcSPmocaAO-uWJEGPw_OWVaC5RRdWDroPi4YL4lTkDEC-KEvVkqCnFm_40C-T_siXquh5FVbpJjb3W2_YvcqfDRj44TsRrpVhk6ohsHMNeUad_cxnFnpolIKnaXq_COv35e9EgeQIPAbgIeg";
  axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
  axios.defaults.headers["Access-Control-Allow-Credentials"] = "true";

  const fetchUniversity = () => {
    axios.get("university").then((res) => {
      const university = res.data;
      university.map((university) => {
        setUniversities((universities) => [...universities, university.name]);
      });
    });
  };

  useEffect(() => {
    fetchUniversity();
  }, []);

  const universityInputChange = (e) => {
    setSearch(e.target.value);
    setFiltered(
      universities
        .filter(
          (item) =>
            item.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 ||
            !search
        )
        .sort((a, b) => {
          if (
            a[0].toLowerCase() !== e.target.value[0].toLowerCase() &&
            b[0].toLowerCase() === e.target.value[0].toLowerCase()
          )
            return 1;
          if (
            a[0].toLowerCase() === e.target.value[0].toLowerCase() &&
            b[0].toLowerCase() !== e.target.value[0].toLowerCase()
          )
            return -1;
          return a["other"] - b["other"];
        }, [])
    );
  };

  const itemClickHandler = (item) => {
    setSelected(item);
    setSearch(item);
    document.getElementById("universityList").style.display = "none";
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios.defaults.baseURL =
      "https://api.webeyondcreative.com/api/form/store/we_onlinecareersummit2022";
    axios.defaults.headers["X-Api-Token"] =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp6XVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIi5wibmFtZSI6Ikpva2G4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
    axios.defaults.headers["Access-Control-Allow-Credentials"] = "true";
    axios
      .post(axios.defaults.baseURL, {
        ad: document.getElementById("name").value,
        soyad: document.getElementById("surname").value,
        telefon: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        universite: document.getElementById("university").value,
        bolum: document.getElementById("department").value,
        sinif: document.getElementById("class").value,
        soru: document.getElementById("questions").value,
        kvkk: "kvkk",
      })
      .then((response) => {
        showAlert();
      });
  };

  return (
    <div
      className="form"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2>Kayıt Ol</h2>
      <form onSubmit={submitHandler}>
        <div className="formSubContainer">
          <input
            placeholder="Adınız"
            type="text"
            name="Name"
            id="name"
            required
          />
          <input
            placeholder="Soyadınız"
            type="text"
            name="Name"
            id="surname"
            required
          />
        </div>
        <PhoneInput
          placeholder="Enter phone number"
          country="tr"
          inputProps={{ id: "phone" }}
          value={phoneInputValue}
          onChange={setPhoneInputValue}
        />
        <input
          placeholder="Mail Adresiniz"
          type="email"
          name="Email"
          id="email"
        />
        <div className="formSubContainer formSubContainer2">
          <input
            type="search"
            value={search}
            placeholder="Üniversiteniz"
            onChange={universityInputChange}
            name="University"
            id="university"
            required
            autoComplete="off"
          />
          {(search.length > 0 ||
            document.activeElement ===
              document.getElementById("University")) && (
            <ul id="universityList">
              {filtered.map((item, i) => (
                <li key={i} onClick={() => itemClickHandler(item)}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          <input
            placeholder="Bölümünüz"
            type="text"
            name="Department"
            id="department"
            required
          />
          <select
            placeholder="Sınıfınız"
            type="select"
            name="Class"
            id="class"
            required
          >
            <option value="1.Sınıf">1.Sınıf</option>
            <option value="2.Sınıf">2.Sınıf</option>
            <option value="3.Sınıf">3.Sınıf</option>
            <option value="4.Sınıf">4.Sınıf</option>
            <option value="Yeni Mezun">Yeni Mezun</option>
            <option value="Yüksek Lisans">Yüksek Lisans</option>
            <option value="Doktora">Doktora</option>
          </select>
        </div>
        <textarea
          placeholder="Merak ettiklerini sor, etkinlik günü şirketler cevaplasın!"
          name="Questions"
          id="questions"
        ></textarea>
        <div className="formCheckContainer">
          <input type="checkbox" name="Check" id="check" required />
          <p>
            <a href="/">Aydınlatma Metni’ni</a> okudum ve onaylıyorum.
          </p>
        </div>
        <input type="submit" value="GÖNDER" />
      </form>
      <Alert
        header={""}
        btnText={"Kapat"}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={closeAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{
          position: "fixed",
          top: "30vh",
          left: "0",
          right: "0",
          width: "30vw",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "32px 32px 64px 32px",
          borderRadius: "8px",
          borderBottomColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          boxShadow: "0 0 64px rgb(0, 0, 0, .28)",
          zIndex: "999",
        }}
        headerStyles={{}}
        textStyles={{ fontSize: "2rem" }}
        buttonStyles={{
          fontSize: "1.5rem",
          color: "white",
          padding: "10px 18px",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};

export default Form;
