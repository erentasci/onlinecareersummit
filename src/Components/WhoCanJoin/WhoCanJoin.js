import React from 'react';
import "./WhoCanJoin.css";

const WhoCanJoin = (props) => {
    return (
        <div className = "whoCanJoin">
            <div className = "whoCanJoinheaderContainer">
                <h2>Kimler{window.innerWidth > 900 &&
                                                    <br/>}
                    Katılabilir?
                </h2>
                <h3>Kampüsün En{window.innerWidth > 900 &&
                                                    <br/>}
                    Keyifli Alternatifi
                </h3>
            </div>
            <div className = "whoCanJoinText">
                <p>Üniversite, bölüm, sınıf fark etmeksizin herkes etkinliğe katılabilir!<br/>
                   <br/>
                   Ücretsiz gerçekleşecek Online Career Summit etkinliklerinde sen de yerini almak istiyorsan ‘’Kayıt Ol’’ butonuna tıklayarak formu doldurman yeterli.<br/>
                   <br/>
                   Etkinlik günü mailine gelecek yönlendirmeyle etkinliği canlı yayında takip edebilirsin.
                </p>
                <p onClick = {()=> props.smoothScroll(document.getElementsByTagName("form")[0])} className = "whoCanJoinTextCTA">Hemen Kayıt Ol!</p>
            </div>
        </div>
    )
}

export default WhoCanJoin;