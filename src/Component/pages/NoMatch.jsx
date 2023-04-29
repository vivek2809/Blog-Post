import { Link } from "react-router-dom";
import NoPageImage from "../image/pageNotFounds.png";

const NoMatch = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-around">
        <div className="w-50">
          <img src={NoPageImage} alt="no match" width='100%'/>
        </div>
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link to="/login" className="btn btn-danger">
            Log in
          </Link>
        </div>
      </div>
    </>
  );
};
export default NoMatch;
