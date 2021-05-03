import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">

                    <div className="col-10 mx-auto">



                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/"> <b>Tech N Tell </b></NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>


                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/service">services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/customise">Customise</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="nav-link" to="/about">about us </NavLink>
                                        </li>

<li className="nav-item dropdown">
    <NavLink className="nav-link dropdown-toggle" to=" " id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true"> 
Dropdown
    </NavLink>
<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><NavLink className="dropdown-item" to=" ">television</NavLink></li>
     <li><NavLink className="dropdown-item" to=" "> radio</NavLink></li>
</ul>
</li>









                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Menu;