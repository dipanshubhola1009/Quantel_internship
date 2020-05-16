import React from 'react'
import './style.css'
import LeftSide from './leftPArt'
import Rightside from './Rightpart'
/**
* @author
* @function Display
**/

const Display = (props) => {
  return(
    <React.Fragment>
        <div className="row">
           <LeftSide/>
           <Rightside/>
        </div>
    </React.Fragment>
   )

 }

export default Display