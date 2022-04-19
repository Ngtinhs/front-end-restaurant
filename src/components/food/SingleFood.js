import React from 'react';
import ModalImage from '../modal/ModalImage';
export default function SingleFood(props) {
  return (
    <div className="single_delicious d-flex align-items-center">
      <ModalImage image={props.item.image} type = {props.type} name = {props.item.name}/>
      <div className="info">
        <h3>
          {props.index + 1}.  {props.item.name}
        </h3>
        {/* <p>{props.item.content}</p> */}
        <span>Giá:   {props.item.cost}.000VND</span>
      </div>
    </div>
  );
}
