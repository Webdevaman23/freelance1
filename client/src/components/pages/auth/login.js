import React from "react";
import Form from "../../shared/layout/form";
import { useSelector } from "react-redux";
import Spinner from "../../shared/layout/spinner";
import { toast } from "react-toastify";

function Login() {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
    {error && <span>{toast.error(error)}</span> }
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assests/images/banner1.jpg" alt="LoginImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form formTitle={"Login"} submitBtn={"Login"} formType={"Login"} />
          </div>
        </div>
      )}
    </>
  );
}

export default Login;