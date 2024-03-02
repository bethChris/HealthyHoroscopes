import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [horoscope, setHoroscope] = useState("Loading...");
  const navigate = useNavigate();
  var userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
  }
  useEffect(() => {
    const userBirthday = "03-02-2003";
    const userColor = "yellow";

    async function fetchData() {
      const resp = await fetch(
        `http://localhost:2999/horoscope/bday:${userBirthday}/color:${userColor}`
      );
      const result = await resp.json();
      setHoroscope(result.text);
    }

    try {
      fetchData();
    } catch (e) {
      console.log(e.message);
      setHoroscope("Error, please try again later.");
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="greenBox">
          <h2>Your Daily Horoscope</h2>
          <p>{horoscope}</p>
        </div>

        <div className="redBox">
          <h3>Activities</h3>
        </div>

        <div className="orangeBoxContainer">
          <div
            className="orangeBox lighter"
            onClick={() => {
              navigate("/activities/affirmations");
            }}
          >
            <p>Affirmations</p>
          </div>
          <div
            className="orangeBox darker"
            onClick={() => {
              navigate("/activities/journaling");
            }}
          >
            <p>Journaling</p>
          </div>
          <div
            className="orangeBox lighter"
            onClick={() => {
              navigate("/activities/music");
            }}
          >
            <p>Music Recommendations</p>
          </div>

          <div
            className="orangeBox darker"
            onClick={() => {
              navigate("/activities/activity");
            }}
          >
            <p>Activity Recommendations</p>
          </div>
          <div
            className="orangeBox lighter"
            onClick={() => {
              navigate("/activities/meditations");
            }}
          >
            <p>Meditations</p>
          </div>
          <div
            className="orangeBox darker"
            onClick={() => {
              navigate("/activities/resources");
            }}
          >
            <p>Resources</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
