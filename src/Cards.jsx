import React from 'react';

function Card (props){
    return(
      <>
        <div className="cards">
          <div className="card">
            <img src={props.imgsrc} alt="my_pic" className="card_img" />
            <div className="card__info">
              <span className="card_category"> {props.title} </span>
              <h3 className="card_title"> {props.sname} </h3>
              <a href={props.link} target="_blank">
                <button> Click Here </button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Card;