import React, { useEffect, useState } from "react";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";
const Activity = () => {
  const [inputText, setInputText] = useState("");
  const [inputText1, setInputText1] = useState("");
  const [inputText2, setInputText2] = useState("");
  const [buttonText, setButtonText] = useState("Submit");
  const [message, setMessage] = useState("");
  const [recs, setRecs] = useState(null);
  const [recDisplay, setRecDisplay] = useState(<></>);
  const navigate = useNavigate();
  var userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
  }
  useEffect(() => {
    if (!recs || recs.length === 0) {
      setRecDisplay(<></>);
    } else {
      const theRecs = recs.map(function (item) {
        return <li key={item}>{item}</li>;
      });

      setRecDisplay(
        <>
          <p>
            Based on your interests, here are three activities you may enjoy
            that can improve mental health:{" "}
          </p>
          {theRecs}
        </>
      );
    }
  }, [recs]);

  async function handleClick() {
    if (inputText === "" || inputText1 === "" || inputText2 === "") {
      alert("You cannot submit a blank field!");
      return;
    }

    setMessage('Loading...');

    const response = await fetch(`http://localhost:2999/activity/${inputText}:activity1&${inputText1}:activity2&${inputText2}:activity3`);
    const result = await response.json();
    console.log(result);
    setRecs(result.stringList);

    setMessage('');

    setButtonText("Submit Again");
  }

  return (
    <>
      <div className="outer-box">
        <div className="centered-box">
          <h2>
            Enter three different activities you enjoy or interests you have:
          </h2>

          <input
            placeholder="Enter text here"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          ></input>

          <input
            placeholder="Enter text here"
            onChange={(e) => setInputText1(e.target.value)}
            value={inputText1}
          ></input>

          <input
            placeholder="Enter text here"
            onChange={(e) => setInputText2(e.target.value)}
            value={inputText2}
          ></input>

          <Button text={buttonText} handleClick={handleClick} />

          <p className="more-margin bigger">{message}</p>

          {recDisplay}
        </div>
      </div>
    </>
  );
};

export default Activity;
