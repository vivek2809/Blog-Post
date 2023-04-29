import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContent = createContext({});

const AuthContextProvider = (props) => {

  // for creating toast alert 
  const Alertnotify = (msg) => toast.success(msg);

  const errorNotify = (msg) => toast.error(msg)

  const [isUser, setIsUser] = useState(localStorage.getItem('token'));
  const [userName, setUserName] = useState(localStorage.getItem('username'));
  const [logInUser, setLogInUser] = useState({
    email:'',
    password:''
  })
  
  const [regUserDataList,setRegUserDataList] = useState([{
    email:'vivek@g',
    password:'ABC'
  }])

  //for listing post
  const [postDataArray, setPostDataArrayy] = useState([]);

  //for creating post
  const [posts,setPosts] = useState([]);

  // for deleting post
  const [deletePostId,setDeletePostId] = useState();

  // update post state

  const [updatePostData,setUpdatePostData] = useState();

  const [updateId,setUpdateId] = useState()




  const navigate = useNavigate();

  const logOutEvent = ()=>{
    localStorage.clear()
    setIsUser('')
    setUserName('')
    setLogInUser({
        email:'',
        password:''
    })
    // alert('LogOut Successful')
    Alertnotify('Logout successfull')
    navigate('/')
  }
  
  const checkAuth = (e)=>{
    let fillAlert = true;
    for(let x of regUserDataList){

        if(x.email === logInUser.email && x.password=== logInUser.password){
          localStorage.setItem('token',true)
          localStorage.setItem('username','Vivek')
          setIsUser(localStorage.getItem('token'))
          setUserName(localStorage.getItem('username'))
          Alertnotify('Login Successfull')
          // alert('Login successful')
          fillAlert = false;
          navigate('/home')
        }
      }
      if(fillAlert){
        // alert('Invalid user')
        errorNotify('Invalid user')
        e.target.reset();
      }
    }
    
    const [postUserSelect,setPostUserSelect] = useState('Select Author');


    
    
  return (
    <AuthContent.Provider 
    value={{isUser,
            setIsUser,
            userName,
            setUserName,
            setLogInUser,
            logInUser,
            navigate,
            logOutEvent,
            checkAuth,
            regUserDataList,
            setRegUserDataList,
            setPostDataArrayy,
            postDataArray,
            postUserSelect,
            setPostUserSelect,
            posts,
            setPosts,
            updatePostData,
            setUpdatePostData,
            deletePostId,
            setDeletePostId,
            updateId,
            setUpdateId,
            Alertnotify
        }}
    >
        {props.children}
    </AuthContent.Provider>);
};

export default AuthContextProvider;

export const useAuth = ()=> useContext(AuthContent);