import React from "react";
import { Link } from "react-router-dom";

function NavBar() {

return (

<nav className="navBar">
      <Link className="active" to="/">Home</Link>
      <Link to="/apartmentlist">ApartmentList</Link>
      <Link to="/apartmentform">AddApartment</Link>
</nav>
);
}
export default NavBar;
