import { useAuth } from "../Auth/Auth";

const UserLoginForm = () => {

  const {setLogInUser,logInUser,checkAuth} = useAuth();

  const userChnageEvent = (e) =>{
    const {id,value} = e.target;

    setLogInUser({...logInUser,[id]:value})
  }

  const formSubmitEvent = (e)=>{
    e.preventDefault()
    // console.log(logInUser)
    checkAuth(e)
  }

  return (
    <div>
      <form className=" mx-auto my-5 text-center bg-light p-5 rounded" style={{width:'25%'}} onSubmit={formSubmitEvent}>
        <img
          className="mb-4 "
          src="https://i0.wp.com/anderworx.com/wp-content/uploads/2018/09/cropped-Avatar-Round.png?w=512&ssl=1"
          alt="avtar"
          width="150"   
          height="150"
        />

        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            onChange={userChnageEvent}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={userChnageEvent}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-secondary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
