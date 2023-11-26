import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const Intro = () => {
// <section id="intro">
//   <div className="introcontent"></div>
//   <span className="hello">Hello,</span>
//   <span className="introtext">
//     {" "}
//     I'M <span className="introname">wahidul Islam Shuvrow</span> <br />{" "}
//     Digital Creator
//   </span>
//   <img src={bg} alt="profile" className="bg" />
// </section>;
// };
