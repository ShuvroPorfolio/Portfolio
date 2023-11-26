import React from "react";
import "../sectioncard.css";
import Firstimage from "../../assets/sectionimage-2.jpg";
import Secondimage from "../../assets/sectioncard-1.jpg";
import Thirdimage from "../../assets/sectionimage-3.jpg";
import Fourthimage from "../../assets/sectionimage-5.jpg";
import Fifthimage from "../../assets/sectionimage-6.jpg";

const Sectioncard = () => {
  return (
    <section id="sectioncard">
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <img
              width={350}
              height={300}
              img
              src={Firstimage}
              alt="Firstimage"
              className="sectioncardimg-1"
            />
          </div>
          <div className="content">
            <h3 className="header">card Title 1</h3>
            <p className="description">
              lorem ipsum dolor sit amet, consectetur adipisicing elit directory
              going towards it
            </p>
            <a href="" className="button">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img
              width={350}
              height={300}
              img
              src={Secondimage}
              alt="Secondimagee"
              className="sectioncardimg-2"
            />
          </div>
          <div className="content">
            <h3 className="header">card Title 2</h3>
            <p className="description">
              lorem ipsum dolor sit amet, consectetur adipisicing elit directory
              going towards it
            </p>
            <a href="" className="button">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img
              width={350}
              height={300}
              img
              src={Thirdimage}
              alt="Thirdimage"
              className="sectioncardimg-3"
            />
          </div>
          <div className="content">
            <h3 className="header">card Title 3</h3>
            <p className="description">
              lorem ipsum dolor sit amet, consectetur adipisicing elit directory
              going towards it
            </p>
            <a href="" className="button">
              Read more
            </a>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <img
              width={350}
              height={300}
              img
              src={Fourthimage}
              alt="Fourthimagee"
              className="sectioncardimg-4"
            />
          </div>
          <div className="content">
            <h3 className="header">card Title 4</h3>
            <p className="description">
              lorem ipsum dolor sit amet, consectetur adipisicing elit directory
              going towards it
            </p>
            <a href="" className="button">
              Read more
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-image">
            <img
              width={350}
              height={300}
              img
              src={Fifthimage}
              alt="Fifthimage"
              className="sectioncardimg-5"
            />
          </div>
          <div className="content">
            <h3 className="header">card Title 5</h3>
            <p className="description">
              lorem ipsum dolor sit amet, consectetur adipisicing elit directory
              going towards it
            </p>
            <a href="" className="button">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectioncard;
