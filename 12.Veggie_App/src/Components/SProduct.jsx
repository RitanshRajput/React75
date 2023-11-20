import React from "react";

const SProduct = ({Image, Description}) => {
  return (
    <div className="card shadow-sm">
      <img src={Image} alt="" style={{height: "200px"}}/>
      <div className="card-body">
        <p className="text-dark">{Description}</p>
      </div>
    </div>
  );
};

export default SProduct;