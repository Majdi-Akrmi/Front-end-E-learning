import React from "react";
import up from '../images/signup.svg';

const Signup = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className="row ">    
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <div className="my-5">
                        <h1 className="text-center"> Sign Up </h1>
                    </div>
    <form>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Full name</label>
            <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter your name" />
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Enter your mail"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Phone</label>
            <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter your number"/>
        </div>
       
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password"/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm your password"/>
        </div>
        <div class="mb-3">
        <button type="submit" class="btn btn-primary">Register</button>
        </div>
    </form>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={up} className="img-fluid-animated" alt="sign img"/>
                    </div>        
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Signup;