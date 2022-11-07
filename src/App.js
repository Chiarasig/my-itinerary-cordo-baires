import { Route, Routes } from "react-router-dom";
import './App.css';
/* import Header from './layouts/Header'; */
import AutoToTop from './components/Home1/AutoToTop';
import Home1Layout from './layouts/Home1Layout';
import BackToTopButton from './components/Home2/BackToTopButton'
import FooterLayout from './layouts/FooterLayout'
import Home2 from "./layouts/Home2";

function App() {
  return (
    <>
    {/* <Header></Header> */}
    <AutoToTop></AutoToTop>
    <BackToTopButton/>
    <Routes>
      <Route path="/home2" element={<Home2/>}/>
      <Route path="/home1" element={<Home1Layout/>}/>
</Routes>
<FooterLayout/>
</>
  );
}

export default App;
