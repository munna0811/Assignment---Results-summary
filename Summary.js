import React from "react";
import "../components/Summary.css";
import img1 from "../images/icon-reaction.svg";
import img2 from "../images/icon-memory.svg";
import img3 from "../images/icon-verbal.svg";
import img4 from "../images/icon-visual.svg";

const Summary = () => {
  const data = [
    {
      category: "Reaction",
      score: 80,
      icon: img1,
      color: "hsl(0, 100%, 67%)",
      background: "hsla(0, 100%, 67%,0.1)",
    },
    {
      category: "Memory",
      score: 92,
      icon: img2,
      color: "hsl(39, 100%, 56%)",
      background: "hsla(39, 100%, 56%,0.1)",
    },
    {
      category: "Verbal",
      score: 61,
      icon: img3,
      color: "hsl(166, 100%, 37%)",
      background: "hsla(166, 100%, 37%,0.1)",
    },
    {
      category: " Visual ",
      score: 72,
      icon: img4,
      color: "hsl(234, 85%, 45%)",
      background: "hsla(234, 85%, 45%,0.1)",
    },
  ];

  return (
    <>
      <div className="card">
        <div className="card-image">
          <p>Your Result</p>
          <div className="box">
            <h1>76</h1>
            <p>of 100</p>
          </div>
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="card-data">
          <h2 className="summary">Summary</h2>
          {data.map((e) => (
            <div
              className="summary-data"
              style={{ backgroundColor: e.background }}
            >
              <img src={e.icon} alt={e.category} className="icon" />
              <div className="category" style={{ color: e.color }}>
                {e.category}
              </div>
              <div>
                {e.score}
                <span className="score">/100</span>
              </div>
            </div>
          ))}
          <button>Continue</button>
        </div>
      </div>
    </>
  );
};

export default Summary;
