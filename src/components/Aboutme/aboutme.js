import React from "react";
import "../aboutme.css";
import UIDesign from "../../assets/portfolio-8.jpeg";
import WebDesign from "../../assets/portfolio-9.png";
import AppDesign from "../../assets/portfolio-12.jpeg";

const Aboutme = () => {
  return (
    <section id="aboutme">
      <span className="skillTitle">What I do</span>
      <span className="skilldesc">
        Throughout the 18 years of my work experience, I have worked in both
        National and International Programs. Some of these programs and shows
        were the first of their kind in Bangladesh. I have a natural instinct
        inside me to accept challenges and overcome them despite the odds. I
        love to experiment with traditional methods and bring up brand-new ideas
        in television production. I am very much excited to work with your team
        and bring new wonders to the industry.
      </span>
      <div className="skillsbars">
        <div className="skillbar">
          <img
            width={100}
            img
            src={UIDesign}
            alt="UIDesign"
            className="skillbarimg"
          />
          <div className="skillbartext">
            <h2 className="barheading">
              {" "}
              Above the Line (ATL) & Below the Line (BTL)
            </h2>
            <p className="text">
              Atl is the kind of marketing that has a very broad reach and is
              largely untargeted. Think about a national TV campaign, where
              viewers across the nation see the same advert aired across the
              various networks.Blt is the kind of marketing that targets
              specific groups of people with focus.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img
            width={100}
            img
            src={WebDesign}
            alt="WebDesign"
            className="skillbarimg"
          />
          <div className="skillbartext">
            <h2 className="barheading">Fiction & Non Fiction</h2>
            <p className="text">
              {" "}
              Fiction refers to something created in the imagination. Therefore,
              fictional writing is based on events that the author made up
              rather than real ones. Nonfiction is writing that revolves around
              facts, real people, and events that actually occurred.
            </p>
          </div>
        </div>
        <div className="skillbar">
          <img
            width={90}
            img
            src={AppDesign}
            alt="AppDesign"
            className="skillbarimg"
          />
          <div className="skillbartext">
            <h2 className="barheading">Event Management</h2>
            <p className="text">
              {" "}
              Event management is the process of planning and hosting a variety
              of public and private events for social or business purposes. They
              may be large-scale or small-scale events and can include Reality
              show, trade shows, press conferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
