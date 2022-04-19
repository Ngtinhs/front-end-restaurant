import React from 'react';
export default function SingleFeedback(props) {
  return (
    <div className="single_carousel">
      <div className="single_testmonial ">
        <div className="author_opinion">
          <p>{props.data.content}</p>
        </div>
        <div className="testmonial_author">
          <div className="thumb">
            <img
              src={ props.data.image !== null ? props.data.image : 'https://i.ibb.co/8mFd8hG/download-1.png' }
              alt="Avatar"
              style={{ borderRadius: '50%', width: 100, height: 100 }}
            />
          </div>
          <div className="name">
            <h3>{props.data.name}</h3>
            <div className="icon">
              <i className="fa fa-star"></i> <i className="fa fa-star"></i>
              <i className="fa fa-star"></i> <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
