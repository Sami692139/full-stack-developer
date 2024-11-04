import "./App.css";
import './commonResource/CSS/style.css';
import Header from "../src/commonResource/Header/Header";
import Footer from "../src/commonResource/Footer/Footer";
import SeactionOne from "./commonResource/SeactionOne/SeactionOne";
import SeactionTwo from "./commonResource/SectionTwo/SeactionTwo";
import SeactionThree from "./commonResource/SeactionThree/SeactionThree";
import SeactionFour from "./commonResource/SectionFour/SeactionFour";
import SeactionFive from "./commonResource/SectionFive/SeactionFive";
import SeactionSix from "./commonResource/SeactionSix/SeactionSix";
import Youtube from "./commonResource/Youtube/Youtube";

function App() {
  return (
    <div className="App">
      <Header/>
      <SeactionOne/>
      <SeactionTwo/>
      <SeactionThree/>
      <SeactionFour/>
      <SeactionFive/>
      <SeactionSix/>
      {/* <Youtube/> */}
      <Footer/>
    </div>
  );
}

export default App;
