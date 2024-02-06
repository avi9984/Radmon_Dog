import React from "react";
import Layout from "../Layout/index";
const AddToCard = () => {
  let AddCardCount = localStorage.getItem("addToCardLocal");
  AddCardCount = JSON.parse(AddCardCount);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto my-4">
            <h5 className="my-5 text-center">Add To Cart Image</h5>
            <div>
              {AddCardCount?.map((value, index) => {
                return (
                  <>
                    <div className="card">
                      <div className="card-header">
                        <h5>Random Dog Image {index + 1}</h5>
                      </div>
                      <div className="card-body">
                        <img src={value} alt="dog-img" className="w-100" />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddToCard;
