import React, { useState } from "react";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";
const Journaling = () => {
  const [inputText, setInputText] = useState("");
  const [buttonText, setButtonText] = useState("Submit");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  var userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
  }
  function handleClick() {
    if (inputText === "") {
      alert("You cannot submit a blank entry!");
      return;
    }

    setButtonText("Submit Again");
    //TODO send entry to database
    setMessage("Great Job!");
  }

  return (
    <div className="outer-box">
      <div className="centered-box">
        <h2>
          Journaling can help control your symptoms and improve your mood by:{" "}
          <br />
          <br />
        </h2>
        <ul>
          <li>Helping you prioritize problems, fears, and concerns.</li>
          <li>
            Tracking any symptoms day-to-day so that you can recognize triggers
            and learn ways to better control them.
          </li>
          <li>
            Providing an opportunity for positive self-talk and identifying
            negative thoughts.
          </li>
        </ul>
        <textarea
          placeholder="Enter text here"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        ></textarea>

        <Button text={buttonText} handleClick={handleClick} />

        <p className="more-margin bigger">{message}</p>

        <a href="/activities/journaling/history">View Journal History</a>
      </div>
    </div>
  );
};

export default Journaling;
