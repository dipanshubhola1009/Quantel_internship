import React from 'react';
import './style.css'


/**
* @author
* @function 
**/

const Header = (props) => {
  return(
      <React.Fragment>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <a href="#" className="navbar-brand Brand-Btn" >Quantel-Intership</a>
        <input className="Search" value="Search" ></input>
        <div className="SmallLogo">
            <img className="rounded-circle" src={require('./../picture/chatlogo.jpg')} width="40px" height="40px"></img>
            <img className="rounded-circle" src={require('./../picture/notificationlogo.jfif')} width="40px" height="40px"></img>
            <img className="rounded-circle" src={require('./../picture/settinglogo.jpg')} width="40px" height="40px"></img>
           
        </div>
    </nav>
    <nav className="Header">
    <button className="btn btn-group">
    <button className="btn mybtn">
        Home
    </button>
    <button className="btn mybtn">
       Events
    </button>
    <button className="btn mybtn">
       Internships
    </button>
    <button className="btn mybtn">
        Startups
    </button>
    </button>
    </nav>
</React.Fragment>
    
   )

 }

export default Header