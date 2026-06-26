import React,{useState} from "react";
import Navbar from "../../components/Layout/Navbar";
import PopModel from "../../components/Layout/PopModel";

const Home = () => {
  const [showModal,setShowModal]=useState(false);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");


  const openhandleShowModal=()=>{
    setShowModal(true);
  } 
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="add-task">
          <h1>Your Task</h1>
          <input type="search" placeholder="search your task" />
          <button className=" btn btn-primary" onClick={openhandleShowModal}>
            Create Task <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <PopModel
        showModal={showModal}
        setShowModal={setShowModal}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}/>
      </div>
    </div>
  );
};

export default Home;
