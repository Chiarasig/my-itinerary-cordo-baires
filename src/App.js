import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './layouts/Header';
import AutoToTop from './components/Home1/AutoToTop';
import Home1Layout from './layouts/Home1Layout';
import BackToTopButton from './components/Home2/BackToTopButton'
import FooterLayout from './layouts/FooterLayout'
import Home2 from "./layouts/Home2";
import Home1y2 from "./layouts/Home1y2";
import PagNotFoundLayout from "./layouts/PagNotFoundLayout";
import RegisterSignUp from "./layouts/RegisterSignUp";
import CardsCities from "./components/Cities/CardsCities";
import LoginFormLayout from "./layouts/LoginFormLayout";
import NewCity from "./components/NewCity/NewCity";
import CardsHotels from "./components/Hotels/CardsHotels";

function App() {
  return (
    <>
    <Header></Header>
    <AutoToTop></AutoToTop>
    <BackToTopButton/>
    <Routes>      
      <Route path="/" element={<Home1y2/>}/>
      <Route path="/home2" element={<Home2/>}/>
      <Route path="/home1" element={<Home1Layout/>}/>
      <Route path="/register" element={<RegisterSignUp/>}/>
      <Route path="/cities">
        <Route index element={<CardsCities/>}/>
      </Route>
      <Route path="/newcity" element={<NewCity/>}/>
      <Route path="/hotels">
        <Route index element={<CardsHotels/>}/>
      </Route>
      <Route path="/signIn" element={<LoginFormLayout/>}/>

      <Route path="*" element={<PagNotFoundLayout/>}/>
</Routes>
<FooterLayout/>
</>
  );
}

export default App;
