import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/comp1.jpg";

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">

                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Description</p>
                        <NavLink to="" className="btn btn-primary">Buy Now</NavLink>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Card;