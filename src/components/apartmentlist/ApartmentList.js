import React, { useEffect, useState } from "react";
import Apartment from "../apartment/Apartment";

function ApartmentList() {
const [apartments, setApartments] = useState([]);
    //adding the useEffect hook to initialize the side-effect event

    useEffect(() => {
        fetch("https://apartmentsairbnb.herokuapp.com/apartments")
        .then((response) => response.json())
        .then((apartments) => {
        
            setApartments(apartments)

        })
    }, []);
    let apartment = (
        apartments.map((x) => (
            <div key={x.id}>
                <p>Name:{x.name}</p>
                <p>Location:{x.location}</p>
                <p>Price:{x.price}</p>
                <p>Price:{x.rating}</p>
                <p>Owner:{x.id}</p>
                <Apartment/>
            </div>
        ))
        )
return (
<div className="apartmentlist">
   {apartment}
</div>
);
}
export default ApartmentList;         
