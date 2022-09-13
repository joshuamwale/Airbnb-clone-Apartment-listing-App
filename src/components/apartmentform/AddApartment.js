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