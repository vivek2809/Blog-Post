import React from "react";
import { useAuth } from "../Auth/Auth";

const Header = () => {

  const {setPostUserSelect} = useAuth();

  const selectUserValue = (e)=>{
    setPostUserSelect(e.target.value)
    // console.log(e.target.value)
  }

  return (
    <>
      <div className="bg-light py-3 px-5 d-flex justify-content-between">
        <select className="form-select" aria-label="Default select example" style={{width:'150px'}} id="userSelect" onChange={selectUserValue}> 
          <option defaultValue='selected'>Select Author</option>
          <option defaultValue="1">1</option>
          <option defaultValue="2">2</option>
          <option defaultValue="3">3</option>
          <option defaultValue="4">4</option>
          <option defaultValue="5">5</option>
          <option defaultValue="6">6</option>
          <option defaultValue="7">7</option>
          <option defaultValue="8">8</option>
          <option defaultValue="9">9</option>
          <option defaultValue="10">10</option>
          <option defaultValue="11">11</option>
        </select>
        <button
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#createPostModel"
        >
          <i className="bi bi-plus"></i> Create Post
        </button>
      </div>
    </>
  );
};

export default Header;
