import React, { useState } from "react";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase";

function getCurrentDateYYYYMMDD() {
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
  let day = ("0" + currentDate.getDate()).slice(-2);
  let formattedDate = year + month + day;
  return formattedDate;
}

const Journaling = () => {
  const [inputText, setInputText] = useState("");
  const [buttonText, setButtonText] = useState("Submit");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  var userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
  }
  async function handleClick() {
    if (inputText === "") {
      alert("You cannot submit a blank entry!");
      return;
    } else {
      const { data, error } = await supabase.from("journal").insert([
        {
          user_id: userId,
          content: inputText,
          date: getCurrentDateYYYYMMDD(),
        },
      ]);
    }
    setButtonText("Submit Again");

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
