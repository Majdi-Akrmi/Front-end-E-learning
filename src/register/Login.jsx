import React from "react";
import sign from '../images/signin.svg'

const Login = () => {
  return (
    <>
     <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className="row ">    
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <div className="my-5">
                        <h1 className="text-center"> Sign In</h1>
                    </div>
<form>
      <div class="mb-3">
    <   label for="exampleInputEmail1" class="form-label">Email address</label>
    <   input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your mail"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password"/>
      </div>
        <button type="submit" class="btn btn-primary">Log in</button>
</form>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={sign} className="img-fluid-animated" alt="sign img"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Login;