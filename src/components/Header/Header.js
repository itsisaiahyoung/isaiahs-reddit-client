import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate("/search");
    }

    const handleHomeClick = () => {
        navigate("/");
    }

    return (
        <div>
            <header className="App-header">
                <div className="Header-Text" onClick={handleHomeClick}>
                    <h1 style={{color: "white", marginRight: "20px"}}>Reddit Client</h1>
                    <h3 style={{color: "orange"}}>Beta</h3>
                </div>
                <button className="SearchButton" onClick={handleSearchClick}>🔎</button>
            </header>  
        </div>
    );
}

export default Header;