import React, { useCallback, useState } from "react";
import { useAuth } from "../Auth/Auth";

const Register = () => {

  const {navigate,setRegUserDataList,regUserDataList,Alertnotify} = useAuth();

  const [registerUser, setRegisterUser] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:''
  });

  const onChangeEventHandle = (e)=>{
    const {id,value} = e.target;
    
    setRegisterUser({...registerUser,[id]:value})
  }

  const onSubmitRegistorUserEvent = useCallback(((e) => {
    const userRegisterList = []
    const createUserAuthObj = {
      email:registerUser.email,
      password:registerUser.password
    } 

    userRegisterList.push(createUserAuthObj);
    setRegUserDataList([...regUserDataList,...userRegisterList])
    e.preventDefault()
    e.target.reset()
    Alertnotify('Register Success')
    // alert('Register Success')
    navigate('/login')
  }), [registerUser])

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form className="mx-1 mx-md-4" name="RegisterUsersForm" onSubmit={onSubmitRegistorUserEvent}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <input
                            type="text"
                            id="firstname"
                            className="form-control py-2"
                            placeholder="First name"
                            onChange={onChangeEventHandle}
                          />
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <input
                            type="text"
                            id="lastname"
                            className="form-control py-2"
                            placeholder="Last name"
                            onChange={onChangeEventHandle}
                          />
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <input
                            type="email"
                            id="email"
                            className="form-control py-2"
                            placeholder="Email"
                            onChange={onChangeEventHandle}
                          />
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control py-2"
                            placeholder="Password"
                            onChange={onChangeEventHandle}
                          />
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-success btn-lg" >
                            Register
                          </button>
                        </div>
                      </form> 
                      
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
