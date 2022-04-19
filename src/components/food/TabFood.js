import React  from 'react';
import SingleFood from './SingleFood';
export default function TabFood(props) {

  return (
    <div
      className={props.item.active === "true"? "tab-pane fade active show " : "tab-pane fade"}
      id={props.item.id}
      role="tabpanel"
      aria-labelledby={props.item.ariaLabelledby}
    >
      <div className="row">
        {props.item.listItem.map((item, index) => (
          <div className="col-xl-6 col-md-6 col-lg-6">
            <SingleFood index={index} item={item} type={props.item.type} key = {index}/>
          </div>
        ))}
      </div>
   
    </div>
  );
}
