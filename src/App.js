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
import EditShowLayout from "./layouts/EditShowLayout";
import MyShowsCard from "./components/MyShowsCard/MyShowsCard";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import ProfileLayout from "./layouts/ProfileLayout";
import { useSelector, useDispatch } from "react-redux";
import usersActions from "./redux/actions/usersActions";
import { useEffect } from "react";
import NewActivityLayout from "./layouts/NewActivityLayout";
import NewShowLayout from "./layouts/NewShowLayout";
import Comments from "./components/Comments/Comments";


function App() {

  let user = useSelector((store) => store.usersReducers);
  let logged = user.token
  let dispatch = useDispatch();
  let { reEnter } = usersActions;

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      dispatch(reEnter(token.token.user));
    }
    // eslint-disable-next-line
  }, []);


  
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
          <Route path="editCities/:id" element={<EditCityLayout />} />
          <Route path="edit/:id" element={<EditItineraryLayout />} />
        </Route>
        <Route path="/newcity" element={<NewCityLayout />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/myhotels" element={<MyHotelsCard />} />
        <Route path="/editHotel" element={<EditHotelLayout />} />
        <Route path="/mycities" element={<MyCitiesCard />} />
        <Route path="/editCities" element={<EditCityLayout />} />
        <Route path="/edit" element={<EditItineraryLayout />} />
        <Route path="/myhotels" element={<MyHotelsCard />} />
        <Route path="/editHotel" element={<EditHotelLayout />} />
        <Route path="/mycities" element={<MyCitiesCard />} />
        <Route path="/profile" element={<ProfileLayout />} />
        <Route path="/hotels">
          <Route index element={<CardsHotels />} />
          <Route path="detail/:id" element={<DetailHotel />} />
          <Route path="editHotel/:id" element={<EditHotelLayout />} />
          <Route path="editShows/:id" element={<EditShowLayout />} />
        </Route>
        <Route path="/signIn" element={<LoginFormLayout />} />
        <Route path="/newhotel" element={<NewHotelLayout />} />
        <Route path="*" element={<PagNotFoundLayout />} />

        <Route element={<ProtectedRoute isAllowed={!!logged} />}>
          <Route path="/myshows" element={<MyShowsCard />} />
          <Route path="/myshows/newShow" element={<NewShowLayout />} />
          <Route path="/myshows/editShow/:id" element={<EditShowLayout />} />
          <Route path="/myitinerary" element={<MyActivitiessCard />} />
          <Route path="/myitinerary/newItinerary" element={<NewActivityLayout />} />
          <Route path="/myitinerary/editItinerary/:id" element={<EditItineraryLayout />} />
        </Route>
      </Routes>
      <FooterLayout />
    </>
  );
}

export default App;
