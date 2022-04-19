import React, {useState} from 'react';
export default function KindOfFood(props) {  
const [hover,setHover] = useState(false)
const hoverMenu = {
  color: '#FBB448'
};
const noHoverMenu = {
  color: '#596672'
}


  return (
    <li className="nav-item" onMouseEnter = {()=>{setHover(true)}} onMouseLeave = {()=>{setHover(false)}}  >
      <a
        className="nav-link "
        id={props.item.id}
        data-toggle="pill"
        href= {props.item.href}
        role="tab"
        aria-controls={props.item.ariaControls}
        aria-selected= {props.item.ariaSelected}
      >
        <div className="single_menu text-center">
          <div className="icon">
            <i className={props.item.icon} style = {hover? hoverMenu : noHoverMenu}  ></i>
          </div>
          <h4 style = {hover? hoverMenu : noHoverMenu} >{props.item.name}</h4>
        </div>
      </a>
    </li>
  );
}
