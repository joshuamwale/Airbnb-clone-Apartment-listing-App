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