
import './App.css';


import Main from './commonResource/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SharedLayout from './commonResource/SharedLayout';
import Iphone from './Pages/Iphone/Iphone';
import Productpage from './Pages/Productpage/Productpage';
import Four04 from './Pages/Four04/Four04';
import Mac from './Pages/Mac/Mac';
import Ipad from './Pages/Ipad/Ipad';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="iphone" element={<Iphone />} />
        <Route path="ipad" element={<Ipad/>} />
        <Route path="/iphone/:pid" element={<Productpage />} />
        <Route path="Mac" element={<Mac />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
