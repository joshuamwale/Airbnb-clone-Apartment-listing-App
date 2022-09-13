import NavBar from "../navbar/NavBar";
import Home from "../home/Home";
import ApartmentList from "../apartmentlist/ApartmentList";
import AddApartment from "../apartmentform/AddApartment";
import { Routes, Route } from "react-router-dom";

function App() {
  return(
    <div>
      <NavBar/> 
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/apartmentlist" element={<ApartmentList />}/>
          <Route exact path="/apartmentform" element={<AddApartment/>}/>
      </Routes>
    </div>
    );
}
 export default App;