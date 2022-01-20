import React from 'react'
import logo from '../assets/baYs9AuHxx9QXeYBiMvSLU.jpg';

const Nav = () => {
    return (
        <div className="nav">
            <div><img className="logo" src={logo} alt="Logo" /></div>
            <div>
            <h1>Spacestagram</h1>
            <h2>Astronomy Picture of the Day</h2>
            <p className="nav-title">Brought to you by  &#123; NASA  API's &#125; </p>
            </div>
        </div>
    )
}

export default Nav;
