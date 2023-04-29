import React from "react";
import { useAuth } from "../Auth/Auth";
// import CreatePost from "../pages/CreatePost";

const Post = ({title,body,userId,postId}) => {

  const { isUser,setUpdatePostData ,setDeletePostId,setUpdateId} = useAuth();

  

  const editPostFun = ({title,body,userId,postId}) =>{
    const updateObj = {
      postTitle:title,
      postContent:body,
      userId:userId,
      id:postId
    }
    setUpdatePostData(updateObj)
    setUpdateId(postId)
  }

  const setDeleteIdFun = (postId) =>{
    setDeletePostId(postId)
  }

  return (
    <div className="card bg-light text-start" style={{ width: "25rem" }}>
      <div className="card-body">
        <p className="d-flex justify-content-between"> <span>Author : {userId}</span> &nbsp; <span> Post No: {postId}</span></p>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {body}
        </p>
        {
          isUser
          ?<div>
              <button className="btn btn-success me-3" data-bs-toggle="modal" data-bs-target="#createPostModel" onClick={()=> editPostFun({title,body,userId,postId})}><i className="bi bi-pencil-square"></i> Edit</button>
              <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target='#deletePostModel' onClick={()=>setDeleteIdFun(postId)}><i className="bi bi-trash-fill"></i></button>
            </div>
          :''
        }
        
      </div>
    </div>
  );
};

export default Post;
