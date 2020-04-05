import React from 'react';

export function Card (props){
  return (
  <div className="card">
    <div className="all_body_card">
      <img src={props.data.img} className="card-img-top img_crd" alt="author icon"/>
      <div className="info">
        <div className="card-body card_b">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text describe">{props.data.describe}</p>
          <div className="button_block">
            <button type="button" className="btn btn-outline-light">Info</button>
            <p className="card-text price"><small className="text-muted">{props.data.price}</small></p>
            <button type="button" className="btn btn-outline-light">Buying</button>
          </div>
        </div>
      </div>
    </div>
  </div>);
}
