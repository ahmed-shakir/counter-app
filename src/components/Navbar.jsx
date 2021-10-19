import React from "react";

function Navbar({ totalCounters }) {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">
                    Navbar
                    <span className="position-relative ms-2">
                        <i className="fas fa-shopping-cart fa-lg m-2" aria-hidden="true" />
                        <span
                        style={{fontSize: ".6em"}}
                            className="position-absolute top-1 start-100 translate-middle mt-1 badge rounded-pill bg-secondary">
                            {totalCounters}
                            <span className="visually-hidden">Items in cart</span>
                        </span>
                    </span>
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
