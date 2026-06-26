import React from "react";
import Navbar from "../../components/Layout/Navbar";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="add-task">
          <h1>Your Task</h1>
          <input type="search" placeholder="search your task" />
          <button className=" btn btn-primary">
            Create Task <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
