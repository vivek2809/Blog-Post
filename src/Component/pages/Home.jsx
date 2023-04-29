import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAuth } from "../Auth/Auth";
import DeletePost from "../Part/deletePost";
import Header from "../Part/Header";
import Post from "../Part/Post";
import CreatePost from "./CreatePost";

const Home = () => {
  const { isUser ,postUserSelect,setPosts,posts} = useAuth();


  async function ListingPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonifiedResponse = await response.json();
    return setPosts(jsonifiedResponse)
  }

  useEffect(()=> {
    if(posts.length == 0){
     ListingPosts()
    }
  } ,[])

  const {Alertnotify} = useAuth()

  return (
    <>
      {isUser ? <Header /> : ""}
      <div className="container-fluid row mx-auto my-4 p-3 g-5 justify-content-around">
          { postUserSelect === 'Select Author'
            ? posts.map((post,index)=>{
              return (
                <Post title={post.title} body={post.body} key={post.id + index} userId={post.userId} postId={post.id}/>
              )
            })
            : posts.filter(post=>post.userId == postUserSelect).map((post,index)=>{
              return (
                <Post title={post.title} body={post.body} key={post.id + index} userId={post.userId} postId={post.id}/>
              )
            })
          }
      </div>

      

      <CreatePost />
      <DeletePost/>
    </>
  );
};

export default Home;
