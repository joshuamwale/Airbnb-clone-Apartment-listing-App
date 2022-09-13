import React from "react";

function Apartment({item, onDeleteItem}) {
    function handleDeleteClick() {
        fetch(`https://apartmentsairbnb.herokuapp.com/apartments/${item.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDeleteItem(item));
    }
    
//adding a button to Apartment component

return(
    <div>
    <button className="remove" onClick={handleDeleteClick}>
        Delete 
    </button>
    </div>
    );
    }
    export default Apartment;