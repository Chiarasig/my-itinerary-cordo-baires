import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layouts/Header";
import AutoToTop from "./components/Home1/AutoToTop";
import BackToTopButton from "./components/Home2/BackToTopButton";
import FooterLayout from "./layouts/FooterLayout";
import Home1y2 from "./layouts/Home1y2";
import PagNotFoundLayout from "./layouts/PagNotFoundLayout";
import RegisterSignUp from "./layouts/RegisterSignUp";
import CardsCities from "./components/Cities/CardsCities";
import LoginFormLayout from "./layouts/LoginFormLayout";
import CardsHotels from "./components/Hotels/CardsHotel";
import DetailCity from "./components/Cities/DetailCity";
import DetailHotel from "./components/DetailHotel/DetailHotel";
import NewHotelLayout from "./layouts/NewHotelLayout";
import NewCityLayout from "./layouts/NewCityLayout";
import MyHotelsCard from "./components/MyHotels/MyHotelsCard";
import EditHotelLayout from "./layouts/EditHotelLayout";
import MyCitiesCard from "./components/MyCities/MyCitiesCard";
import EditCityLayout from "./layouts/EditCityLayout";
import EditItineraryLayout from "./layouts/EditItineraryLayout";
import MyActivitiessCard from "./components/MyActivities/MyActivityCard";

function App() {
  return (
    <>
      <Header></Header>
      <AutoToTop></AutoToTop>
      <BackToTopButton />
      <Routes>
        <Route path="/" element={<Home1y2 />} />
        <Route path="/register" element={<RegisterSignUp />} />
        <Route path="/cities">
          <Route index element={<CardsCities />} />
          <Route path="detail/:id" element={<DetailCity />} />
          <Route path="editCities/:id" element={<EditCityLayout/>} />
          <Route path="editItinerary/:id" element={<EditItineraryLayout/>} />

        </Route>
        <Route path="/myitinerary" element={<MyActivitiessCard/>}/>
        <Route path="/newcity" element={<NewCityLayout />} />
          <Route path="/myhotels" element={<MyHotelsCard/>} />
        <Route path="/editHotel" element={<EditHotelLayout/>} />
        <Route path= "/mycities" element={<MyCitiesCard />} />
        <Route path="/editCities" element={<EditCityLayout/>} />
        <Route path="/editItinerary" element={<EditItineraryLayout/>} />
        <Route path="/hotels">
          <Route index element={<CardsHotels />} />
          <Route path="detail/:id" element={<DetailHotel />} />
          <Route path="editHotel/:id" element={<EditHotelLayout/>} />

        </Route>
        <Route path="/signIn" element={<LoginFormLayout />} />
        <Route path="/newhotel" element={<NewHotelLayout />} />
        <Route path="*" element={<PagNotFoundLayout />} />
      </Routes>
      <FooterLayout />
    </>
  );
}

export default App;
