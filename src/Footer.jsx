import React from "react";

const Footer = () => {
    return(

            <footer className="text-center text-lg-start bg-light text-muted">
              <section className=" justify-content-center justify-content-lg-between p-4 border-bottom">

              </section>
             
              <section className>
                <div className="container text-center text-md-start mt-5">
                  
                  <div className="row mt-3">
                    
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    
                      <h6 className="fw-bold mb-4">
                        <i className="fas fa-gem me-3" /><h1>ALLeMNI</h1>
                      </h6>
                    </div>
                    
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      
                      <h6 className="text-uppercase fw-bold mb-4">
                        Products
                      </h6>
                      <p>
                        <a href="#!" className="text-reset">Angular</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">React</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">Vue</a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">Laravel</a>
                      </p>
                    </div>
                   
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      
                      <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                      </h6>
                      <p>
                      <a href="/" className="text-reset">Home</a>
                      </p>
                      <p>
                      <a href="/formations" className="text-reset">Formations</a>
                      </p>
                      <p>
                      <a href="/about" className="text-reset">About</a>
                      </p>
                      <p>
                      <a href="/contact" className="text-reset">Contact</a>
                      </p>
                    </div>
                   
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                     
                      <h6 className="text-uppercase fw-bold mb-4">
                        Contact
                      </h6>
                      <p><i className="fas fa-home me-3" /> Tunisia, Nabeul 8000, TN</p>
                      <p>
                        <i className="fas fa-envelope me-3" />
                        Allemni@gmail.com
                      </p>
                    </div>
                   
                  </div>
                  
                </div>
              </section>
             
              <div className="text-center p-4" style={{"background-color":"rgba(0, 0, 0, 0.05)"}}>
                © 2021 Copyright: <h4>ALLeMNI</h4>
              </div>
            </footer>
    );}
export default Footer;