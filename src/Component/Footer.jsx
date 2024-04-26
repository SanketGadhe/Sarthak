import React from 'react'

const Footer = () => {
  return (
      <div>
    <footer className="text-center text-lg-start text-white bg-[#474e5d]">
      <section className="d-flex justify-content-between p-4 bg-[#343a40]">
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
    
      </section>
  
      <section className="">
        <div className="container text-center text-md-start mt-5">
      
          <div className="row mt-3">
            
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
   
              <h6 className="text-uppercase fw-bold">Sarthak</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #28a745; height: 2px" />
              <p>
                A Dual Model Sign Language Interpreter
              </p>
  
            </div>
  
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
  
              <h6 className="text-uppercase fw-bold">Services</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #28a745; height: 2px" />
              <p>
                <a href="{% url 'speech_to_sign' %}" className="text-white">Speech To Sign</a>
              </p>
              <p>
                <a href="{% url 'sign_to_speech' %}" className="text-white">Sign To Speech</a>
              </p>
              <p>
                <a href="{% url 'sign_gesture' %}" className="text-white">Dictionary</a>
              </p>
              <p>
                <a href="#about" className="text-white">About us</a>
              </p>
            </div>
       
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
         
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #28a745; height: 2px" />
              <p>
                <a href="https://ieeexplore.ieee.org/document/10134768" className="text-white">Research Paper</a>
              </p>
              <p>
                <a href="{% url 'Add_New_Gesture' %}" className="text-white">Help us Add Signs</a>
              </p>
              <p>
                <a href="mailto:projectsarthak@gmail.com" className="text-white">Feedback</a>
              </p>
              <p>
                <a href="mailto:projectsarthak@gmail.com" className="text-white">Help</a>
              </p>
            </div>
  
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
  
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr className="mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #28a745; height: 2px" />
              <p><i className="fas fa-home mr-3"></i> Dhule, Maharashtra, India</p>
              <p><i className="fas fa-envelope mr-3"></i> <a className="text-white"
                  href="mailto:projectsarthak@gmail.com">projectsarthak@gmail.com </a> </p>
              <p><i className="fas fa-phone mr-3"></i> +91 7875114776</p>
              <p><i className="fas fa-print mr-3"></i> +91 9172102003</p>
              <p><i className="fas fa-print mr-3"></i> +91 7066516974</p>
            </div>
  
          </div>
  
        </div>
      </section>
  
  
      <div className="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
        © 2020 Copyright:
        <a className="text-white" href="https://ieeexplore.ieee.org/document/10134768">Sarthak.com</a>
      </div>
  
    </footer>
  
  </div>
  )
}

export default Footer
