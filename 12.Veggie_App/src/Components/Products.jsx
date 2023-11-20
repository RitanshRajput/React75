import React from "react";
import Product1 from "../assets/Images/brinjal.png";
import Product2 from "../assets/Images/cf.png";
import Product3 from "../assets/Images/carrot.png";
import Product4 from "../assets/Images/kado.png";
import Product from "./Product";

const Products = () => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between">
        <h3 className="text-success">Customer Favorites</h3>
        <button className="btn btn-transparent fw-bold px-3 rounded-0 border border-success text-light">
          All Products
        </button>
      </div>
      <div className="row mt-5">
        <Product
          Image={Product1}
          Name="Eggplant"
          Price="$0.5/kg"
          Color="#001524 "
        />
        <Product
          Image={Product2}
          Name="Cauliflower"
          Price="$0.7/kg"
          Color="#001524 "
        />
        <Product
          Image={Product3}
          Name="Carrot"
          Price="$0.4/kg"
          Color="#001524 "
        />
        <div className="col-12 col-md-8">
          <div className="p-1">
            <div className="border border-success shadow-sm d-flex #001524 ">
              <div className="text-center px-0 px-lg-5">
                <img src={Product4} alt="" className="p-Image" />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h3 className="text-light">Best Fresh Testing Pumpkin</h3>
                <p className="text-light">$0.80/kg</p>
                <button className='btn border border-success w-100 rounded-0 text-light'>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="p-1">
            <div className="border border-success shadow-sm py-4 px-3 #001524 ">
              <h3 className="text-light">Best Fresh Testing Bell Pepper</h3>
              <p className="text-light">$1/kg</p>
              <button className='btn border border-success w-100 rounded-0 text-light'>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;