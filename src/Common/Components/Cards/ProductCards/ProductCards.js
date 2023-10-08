import React from "react";
const ProductCards = ({ data }) => {
  //we can use css module for making css file private just for this file that we add ,its performance is much better but as i used templates and the time is short i cant do this
  return (
    <>
      <div className="card container-fluid" style={{width:"18rem"}}>
        <img src={data.avatar} className="card-img-top" alt="..." height={200}/>
        <div className="card-body">
          <h5 className="card-title">{data.first_name} {data.last_name}</h5>
          <p className="card-text">
            {data.email}
          </p>
          <a href="" className="btn btn-primary">
            See Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductCards;
