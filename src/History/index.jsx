import React, { useEffect, useState } from "react";
import Layout from "../Layout/index";
import axios from "axios";
const History = () => {
  let HistoryData = localStorage.getItem("historyAllData");
  HistoryData = JSON.parse(HistoryData);
  console.log("HistoryData", HistoryData);

  const handleAddToCard = (image) => {
    const addTocard = localStorage.getItem("addToCardLocal");
    const parsedAddLocalData = JSON.parse(addTocard) || [];
    const cardArray = [...parsedAddLocalData, image];
    localStorage.setItem("addToCardLocal", JSON.stringify(cardArray));
    window.location.reload();
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto my-4">
            <h5 className="my-5 text-center">History Images</h5>
            <div>
              {HistoryData?.map((value, index) => {
                return (
                  <>
                    <div className="card">
                      <div className="card-header">
                        <h5>Random Dog Image {index + 1}</h5>
                      </div>
                      <div className="card-body">
                        <img src={value} alt="dog-img" className="w-100" />
                      </div>
                      <div className="card-footer">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleAddToCard(value)}
                        >
                          Add To Card
                        </button>
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

export default History;
