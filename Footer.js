import React from "react";

const Footer = () => {
    let footerstyle = {
        position: "sticky", 
        top: "85vh",
        width: "100%", 
        border: "0.1px solid black",
        color: "green" ,
    }
    return (
        <>
            <footer className="w-100 bg-light text-center" style={footerstyle}>
                <p>

                 <b>   copyright &copy; tech n tell.com </b>
            </p>
                <p className="text-center">
                    Kavre, Nepal
            </p>
            </footer>
        </>
    );
};

export default Footer;