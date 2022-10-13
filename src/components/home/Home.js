import React from "react";
import { Link } from "react-router-dom";


function Home() {
    return(

        <div id="home">
            <center style={{marginTop: 5 +'em', fontSize: 20 + 'px'}}>
                <p>
                This is a premier site that lists exquisite apartments you can book and lodge in while on tour or vacation.<br></br>
                The plan is simple: scroll through the list to find your preffered facility. <br></br>
                The app also allows you to add other apartments you have previously enjoyed staying in.
                </p>
                
                <Link to="/apartmentlist" className="homebtn">Our Apartments</Link>
            </center>
        </div>
    )
}
export default Home;