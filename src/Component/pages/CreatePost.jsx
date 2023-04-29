import { useCallback,useState } from "react";
import { useAuth } from "../Auth/Auth";

const CreatePost = () => {
  const [postData, setPostData] = useState({
    userId: "",
    postTitle: "",
    postContent: "",
  });

  const { setPosts, posts ,updatePostData,setUpdatePostData,updateId,Alertnotify} = useAuth();

  const postOnChange = (e) => {
    const { id, value } = e.target;
    setPostData({ ...postData, [id]: value });
  };

  const createResponseData = [];

  const postOnSubmit = useCallback(async (e) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: postData.postTitle,
        body: postData.postContent,
        userId: postData.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const jsonifiedResponse = await response.json();
    createResponseData.push(jsonifiedResponse);
    setPosts([...posts, ...createResponseData]);
    Alertnotify('Created Successfully')
    setPostData({
      userId: "",
      postTitle: "",
      postContent: "",
    })
  });

  const updateOnChange = (e)=>{
    const { id, value } = e.target;
    setUpdatePostData({ ...updatePostData, [id]: value });
  }

  const updatePostDataEvent = async ()=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${updateId}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: updatePostData.id,
        title:updatePostData.postTitle,
        body: updatePostData.postContent,
        userId: updatePostData.userId,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const updatedData = await response.json();
    Alertnotify('updated successfully')
    // alert('updated successfully')
    console.log(updatedData)
    clearUpdateState()
  }

  const clearUpdateState = () =>{
    setUpdatePostData();
  }

 

  return (
    <div className="modal fade" id="createPostModel" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Blog Post</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            { updatePostData 
            ? (
              <form action="#" id="updatePostDataForm" onSubmit={updatePostDataEvent}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="userId"
                    placeholder="userID"
                    onChange={updateOnChange}
                    value={updatePostData.userId}
                  />
                  <label htmlFor="userId">userId</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="postTitle"
                    placeholder="title"
                    onChange={updateOnChange}
                    value={updatePostData.postTitle}
                  />
                  <label htmlFor="postTitle">Title</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="postContent"
                    placeholder="content"
                    onChange={updateOnChange}
                    style={{ height: "100px" }}
                    value={updatePostData.postContent}
                  />
                  <label htmlFor="postContent">Content</label>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                    onClick={clearUpdateState}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Update
                  </button>
                </div>
              </form>
            ) : (
              <form action="#" onSubmit={postOnSubmit}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="userId"
                    placeholder="userID"
                    onChange={postOnChange}
                    value={postData.userId}
                  />
                  <label htmlFor="userId">userId</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="postTitle"
                    placeholder="title"
                    onChange={postOnChange}
                    value={postData.postTitle}
                  />
                  <label htmlFor="postTitle">Title</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="postContent"
                    placeholder="content"
                    onChange={postOnChange}
                    value={postData.postContent}
                    style={{ height: "100px" }}
                  />
                  <label htmlFor="postContent">Content</label>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    save 
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
