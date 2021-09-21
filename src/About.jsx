import React from "react";
import about from './images/about.jpg'

const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className="row ">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1 className="text-center"> About Us</h1>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={about} className="img-fluid-animated" alt="home img"/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
      </section>
    </>
  )
}

export default About;