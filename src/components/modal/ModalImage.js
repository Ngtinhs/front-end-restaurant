import React  from 'react';
// import ReactFancyBox from 'react-fancybox';
// import 'react-fancybox/lib/fancybox.css';
export default function ModalImage(props) {
  return (
    <div>
      <div className="thumb">
      <img src={`img/${props.type}/${props.image}`}  height="150" width="150" alt ='img'/>
      </div>
    </div>
  );
}
