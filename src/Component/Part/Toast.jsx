import React, { useState } from "react";
import { Button, Toast } from "react-bootstrap";
import { useAuth } from "../Auth/Auth";

const ToastAlert = () => {
  const { setToast, showToast } = useAuth();

  return (
    //     <div>
    //     <Toast
    //       onClose={() => setToast(false)}
    //       autohide
    //       show={showToast}
    //       delay={2200}
    //       style={{position:'absolute'}}
    //     >
    //       <Toast.Header>
    //         <strong className="mr-auto">React Toast</strong>
    //         <small>50 mins ago</small>
    //       </Toast.Header>
    //       <Toast.Body>Lorem ipsum dolor sit adipiscing elit.</Toast.Body>
    //     </Toast>
    //     <Button onClick={() => setToast(true)}>Show Toast</Button>
    //   </div>
    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>
  );
};

export default ToastAlert;
