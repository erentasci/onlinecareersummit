import React    from 'react';
import bg1      from "../../Media/bg1.png";
import bg2      from "../../Media/bg2.png";
import bg3      from "../../Media/bg3.png";
import "./Equation.css";

const Equation = () => {
    return (
        <div className = "equation">
            <div className = "equationImageWrapper">
                <div className = "equationImage" style = {{backgroundImage: `url(${bg1})`, backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    <div className = "equationTextContainer">
                        <p> KARİYER<br/>
                            ETKİNLİKLERİNİN<br/>
                            PRESTİJİ
                        </p>
                    </div>
                </div>
            </div>

            <p className = "equationSymbol">+</p>

            <div className = "equationImageWrapper">
                <div className = "equationImage" style = {{ backgroundImage: `url(${bg2})`, backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    <div className = "equationTextContainer">
                        <p> O.O.C.’NİN<br/>
                            EĞLENCELİ<br/>
                            YAKLAŞIMI
                        </p>
                    </div>
                </div>
            </div>

            <p className = "equationSymbol">=</p>
            
            <div className = "equationImageWrapper">
                <div className = "equationImage" style = {{ backgroundImage: `url(${bg3})`, backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
                    <div className = "equationTextContainer">
                        <p> KAMPÜSE<br/>
                            KEYİFLİ BİR<br/>
                            ALTERNATİF
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equation;