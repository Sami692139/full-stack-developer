
import './App.css';
import Header  from "../src/commonResource/Header/Header"
import Footer from "../src/commonResource/Footer/Footer"
import { Route, Routes } from "react-router-dom";
import Youtube from './commonResource/Youtube/Youtube';
import Main from './commonResource/Main/Main';

function App() {
  return (
    <Routes>
      <div className="App">
        <Header />
        <Main />
        {/* <Youtube/> */}
        <Footer />
      </div>
    </Routes>
  );
}

export default App;
