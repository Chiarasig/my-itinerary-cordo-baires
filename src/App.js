import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from './layouts/Header';
import AutoToTop from './components/Home1/AutoToTop';
import Home1Layout from './layouts/Home1Layout';

function App() {
  return (
    <>
    <Header></Header>
    <AutoToTop></AutoToTop>
    
    <Routes>
      <Route path="/home1" element={<Home1Layout/>}/>
</Routes>
</>
  );
}

export default App;
