import React from 'react'
import "../scss/contactus.scss";
const Contact = () => {
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div>
      <div className="feedback-section container-fluid mt-5 pt-5">
        <div className="heading-section mb-5">
        <h1 className='text-center w-25 mx-auto'>Contact Us</h1>
        </div>
           <div className="d-flex justify-content-center">
            <div className="feedback">
              <div className="content">
                <div className="left-side">
                  <div className="address details">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="topic">Address</div>
                    <div className="text-one">Pakistan, NP12</div>
                    <div className="text-two">Faisalabad 38000</div>
                  </div>
                  <div className="phone details">
                    <i className="fas fa-phone-alt"></i>
                    <div className="topic">Phone</div>
                    <div className="text-one">+0092 9893 5647</div>
                    <div className="text-two">+0092 3434 5678</div>
                  </div>
                  <div className="email details">
                    <i className="fas fa-envelope"></i>
                    <div className="topic">Email</div>
                    <div className="text-one">abc123@gmail.com</div>
                    <div className="text-two">info.abc123@gmail.com</div>
                  </div>
                </div>
                <div className="right-side">
                  <div className="topic-text">Send us a message</div>
                  <p className="text-white">If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                <form action="#" onSubmit={handleSubmit}>
                  <div className="input-box">
                    <input type="text" id="User-Name-Feedback" placeholder="Enter your name" required />
                  </div>
                  <div className="input-box">
                    <input type="email" id="User-Email-Feedback" placeholder="Enter your email" required />
                  </div>
                  <div className="input-box message-box">
                    <textarea name="" id="User-Feedback-Message" cols="30"  rows="10" placeholder="Enter Feedback Here" required></textarea>
                  </div>
                  <div className="feedback-btn-section mt-3">
                    <button className="btn p-2 px-3 feedback-btn">Send Now</button>
                  </div>
                </form>
              </div>
              </div>
            </div>
           </div>
          </div>
    </div>
  )
}

export default Contact