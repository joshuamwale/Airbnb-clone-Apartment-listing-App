export default function CreateApartment() {
    // post a request to add a new apartment to the list
    
    const AddApartment = async (e) => {
        e.preventDefault();
        const apartment = {
            name: e.target.name.value,
            location: e.target.location.value,
            price: e.target.price.value,
            rating: e.target.rating.value,
        };
        const response = await fetch("https://apartmentsairbnb.herokuapp.com/apartments", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apartment),
        }
        );
        const data = await response.json();
        console.log(data);
        // if successful, redirect to the apartment page
    };

    //clear form after submit

const clearForm = (e) => {
    e.target.name.value = "";
    e.target.location = "";
    e.target.price = "";
    e.target.rating = "";
    window.render()
}

return (
    <div className="container">
        <h1>Post An Apartment</h1>
        <form onSubmit={  AddApartment } className="form-center">
            <label>Name:</label>
            <input type="text" name="name" />
            <label>Location:</label>
            <input type="text" name="location" />
            <label>Price:</label>
            <input type="integer" name="price" />
            <label>Rating:</label>
            <input type="integer" name="rating" />
            <button type="submit" onClick={clearForm} >
                Submit
            </button>
        </form>
    </div>
);
}
