import React from "react";
import "../intro.css";
import bg from "../../assets/image1.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introcontent">
        <span className="hello">Hello,</span> <br />
        <span className="introtext">
          {" "}
          I'M Wahidul Islam <span className="nickname">Shuvrow</span>{" "}
        </span>{" "}
        <br />
        <span className="designation">Digital Creator</span>
        <p className="intropara">
          As a Digital Content creator I create & publish various types of
          digital content,
          <br /> including but not limited to social media posts, blog articles,
          videos, infographics.
        </p>
        <img src={bg} alt="profile" className="bg" />
      </div>
    </section>
  );
};

export default Intro;
