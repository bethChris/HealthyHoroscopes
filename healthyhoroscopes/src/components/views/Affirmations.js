import React, { useEffect, useState } from "react";
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
const Affirmations = () => {
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
      alert("You cannot submit a blank field!");
      return;
    }

    setMessage("Loading...");
    const result = await postData("http://localhost:2999/model/affirmation", {
      affirmation: inputText,
    });

    if (result.prediction === "positive") {
      //accept
      setMessage("Great Job!");

      const { data, error } = await supabase.from("affirmations").insert([
        {
          user_id: userId,
          content: inputText,
          date: getCurrentDateYYYYMMDD(),
        },
      ]);
    } else {
      //reject
      setMessage("");
      alert(
        "Your affirmation should focus on the positive! Try again, a little more positive!"
      );
    }
    setButtonText("Submit Again");
  }

  async function postData(url, data, contentType = "application/json") {
    const resp = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      connection: "keep-alive",
      headers: {
        Accept: "application.json",
        "Content-Type": contentType,
      },
      body: JSON.stringify(data),
    });
    return await resp.json();
  }

  return (
    <div className="outer-box">
      <div className="centered-box">
        <h2>Write yourself a positive affirmation:</h2>
        <textarea
          placeholder="Enter text here"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        ></textarea>

        <Button text={buttonText} handleClick={handleClick} />

        <p className="more-margin bigger">{message}</p>

        <a href="/activities/affirmations/history">View Affirmation History</a>
      </div>
    </div>
  );
};

export default Affirmations;
