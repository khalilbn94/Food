import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus
          ex, suscipit ac rutrum ut, tristique vitae mi. Sed libero orci,
          posuere non mollis nec, egestas non elit.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt=""/>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin risus ex, suscipit ac rutrum ut, tristique vitae mi. Sed libero orci, posuere non mollis nec, egestas non elit. 
        Vivamus nibh quam, pharetra vel purus non, feugiat congue orci.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Khalil Ben Nasr</h2>
      </div>
    </div>
  );
};

export default Testimonial;
