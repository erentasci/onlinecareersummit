import React, {useEffect} from "react";
import Navbar                       from "./Components/Navbar/Navbar";
import Header                       from "./Components/Header/Header";
import Explainer                    from "./Components/Explainer/Explainer";
import Equation                     from "./Components/Equation/Equation";
import WhoCanJoin                   from "./Components/WhoCanJoin/WhoCanJoin";
import Timetables                   from "./Components/Timetables/Timetables";
import Participants                 from "./Components/Participants/Participants";
import Form                         from "./Components/Form/Form";
import FAQ                          from "./Components/FAQ/FAQ";
import Footer                       from "./Components/Footer/Footer";
import "./App.css";

const App = () => {
    const smoothScroll = (target) =>{
        const {top} = target.getBoundingClientRect()
        if(target)
        window.scrollTo({
            top:      top - 88 + window.pageYOffset,
            behavior: "smooth"
        });
    }

    useEffect(()=>{
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = "smooth";
    },[])

    return (
        <div className = "App">
            <Navbar smoothScroll = {smoothScroll}/>
            <Header/>
            <Explainer/>
            <Equation/>
            <WhoCanJoin smoothScroll = {smoothScroll}/>
            <Timetables/>
            <Participants/>
            <Form smoothScroll = {smoothScroll}/>
            <FAQ/>
            <Footer/>
        </div>
    );
}

export default App;