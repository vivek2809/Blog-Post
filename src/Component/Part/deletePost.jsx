import React from 'react'
import { useAuth } from '../Auth/Auth'

const DeletePost = () =>{

    const {deletePostId,Alertnotify} = useAuth();

    const deletePostfun = async () =>{
        // console.log(deletePostId,'delId')
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${deletePostId}`, {
          method: 'DELETE',
        });
        Alertnotify('Deleted Successfully')
        console.log(response)
      }
    

  return (
    <div className="modal fade" id="deletePostModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-body">
                    <p> Are You Sure!</p>
                    <div>
                        <button type="button" className="btn btn-secondary me-2" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={()=>deletePostfun()}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeletePost
