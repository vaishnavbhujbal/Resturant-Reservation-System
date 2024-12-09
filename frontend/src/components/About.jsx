import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're looking about is food.</p>
            </div>
            <p className="mid">
              We are food chain sysytem that is running across 10 different countries. We serve a wide varity of food starting from Mexican, Itialian, French, Chinses Cuisine, Malacian, Indonesian also buffet system. Our burgers are also famous specially the Beef one. We have wide variety of desserts too.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;