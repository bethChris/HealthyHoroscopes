import React, { useEffect, useState } from "react";
import Button from "../elements/Button";
import CheckboxInput from "../elements/CheckboxInput";
import Scale from "../elements/Scale";
import Dropdown from "../elements/DropdownInput";
import { useNavigate } from "react-router-dom";
const Music = () => {
  const navigate = useNavigate();
  var userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
  }
  const [details, setDetails] = useState({
    age: "",
    hoursDay: "",
    working: false,
    instrument: false,
    compose: false,
    explore: false,
    foreign: false,
    anxiety: 5,
    depression: 5,
    insomnia: 5,
    ocd: 5,
    genre: "",
  });
  const [buttonText, setButtonText] = useState("Submit");
  const [recs, setRecs] = useState(null);
  const [recDisplay, setRecDisplay] = useState(<></>);

  useEffect(() => {
    if (!recs || recs === "") {
      setRecDisplay(<></>);
    } else {
      setRecDisplay(
        <>
          <p>{recs}</p>
        </>
      );
    }
  }, [recs]);

  function updateDetails(key, newVal) {
    const newOne = { ...details };
    newOne[key] = newVal;
    setDetails(newOne);
  }

  function getBinary(val) {
    if (val) {
      return 1;
    } else {
      return 0;
    }
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

  async function handleClick() {
    if (details.age === "" || details.hoursDay === "" || details.genre === "") {
      alert("Age, hours per day, and genre fields are required!");
      return;
    }

    const dataForSending = {
      "Age": details.age,
      "Anxiety": details.anxiety,
      "Composer": getBinary(details.compose),
      "Depression": details.depression,
      "Exploratory": getBinary(details.explore),
      "ForeignLanguages": getBinary(details.foreign),
      "FavGenre": details.genre,
      "HoursPerDay": details.hoursDay,
      "Insomnia": details.insomnia,
      "Instrumentalist": getBinary(details.instrument),
      "OCD": details.ocd,
      "WhileWorking": getBinary(details.working)
    }

    setRecs(
      `Loading...`);

    const result = await postData('http://localhost:2999/model/music', dataForSending);
    console.log(result);

    let theList = "";

    for (let i = 0; i < result.genres.length - 1; i++) {
      theList += (result.genres[i] + ", ")
    }
    theList += ("and " + result.genres[result.genres.length - 1]);

    setRecs(
      `Recommended music genres for you: ${theList}.`
    );
    setButtonText("Submit Again");
  }

  return (
    <>
      <div className="outer-box">
        <div className="centered-box">
          <h2>
            Fill out the following information to get helpful music
            recommendations:
          </h2>

          <label>Age?</label>
          <input
            type="number"
            placeholder="Enter age here"
            onChange={(e) => updateDetails("age", e.target.value)}
            value={details.age}
          ></input>

          <label>How many hours a day do you listen to music?</label>
          <input
            type="number"
            placeholder="Enter number of hours here"
            onChange={(e) => updateDetails("hoursDay", e.target.value)}
            value={details.hoursDay}
          ></input>

          <CheckboxInput
            text="Do you listen to music while working?"
            value={details.working}
            whenChange={(newVal) => updateDetails("working", newVal)}
          />

          <CheckboxInput
            text="Do you play an instrument?"
            value={details.instrument}
            whenChange={(newVal) => updateDetails("instrument", newVal)}
          />

          <CheckboxInput
            text="Do you compose music?"
            value={details.compose}
            whenChange={(newVal) => updateDetails("compose", newVal)}
          />

          <CheckboxInput
            text="Do you enjoy exploring unfamiliar music types?"
            value={details.explore}
            whenChange={(newVal) => updateDetails("explore", newVal)}
          />

          <CheckboxInput
            text="Do you listen to music in foreign languages?"
            value={details.foreign}
            whenChange={(newVal) => updateDetails("foreign", newVal)}
          />

          <label>
            Rate the intensity of your symptoms of the following conditions in
            the past week. (1 meaning no symptoms, 10 meaning intense symptoms.)
          </label>

          <Scale
            text="Anxiety"
            value={details.anxiety}
            setValue={(newVal) => updateDetails("anxiety", newVal)}
          />

          <Scale
            text="Depression"
            value={details.depression}
            setValue={(newVal) => updateDetails("depression", newVal)}
          />

          <Scale
            text="Insomnia"
            value={details.insomnia}
            setValue={(newVal) => updateDetails("insomnia", newVal)}
          />

          <Scale
            text="Obsessive Compulsion"
            value={details.ocd}
            setValue={(newVal) => updateDetails("ocd", newVal)}
          />

          <Dropdown
            value={details.genre}
            setValue={(newVal) => updateDetails("genre", newVal)}
          />

          <Button text={buttonText} handleClick={handleClick} />

          <p className="more-margin bigger"></p>

          {recDisplay}
        </div>
      </div>
    </>
  );
};

export default Music;
