import React, { useEffect, useState } from "react";
import Layout from "../Layout/index";
import axios from "axios";

const Home = () => {
  const [imageData, setImageData] = useState("");
  const handleGetApi = async () => {
    try {
      const getdata = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setImageData(getdata?.data?.message);
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleHistory = async () => {
    const getLocalData = localStorage.getItem("historyAllData");
    const parsedLocalData = JSON.parse(getLocalData) || [];
    const historyData = [...parsedLocalData, imageData];
    localStorage.setItem("historyAllData", JSON.stringify(historyData));
    handleGetApi();
    window.location.reload();
  };
  useEffect(() => {
    handleGetApi();
  }, []);
  const getMayurData = localStorage.getItem("historyAllData");
  console.log("getMayurData", getMayurData);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto my-4">
            <h5 className="my-5 text-center">Home Images</h5>
            <div>
              <div className="card">
                <div className="card-header">
                  <h5>Random Dog Image</h5>
                </div>
                <div className="card-body">
                  <img src={imageData} alt="dog-img" className="w-100" />
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleHistory()}
                  >
                    Featch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
