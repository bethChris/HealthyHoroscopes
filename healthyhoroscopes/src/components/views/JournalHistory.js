import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const JournalHistory = () => {
  const [history, setHistory] = useState([]);
  const [list, setList] = useState(<p>Loading...</p>);
  const navigate = useNavigate();
  var userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
  }
  useEffect(() => {
    const userId = "1234";

    async function fetchData() {
      //TODO const resp = await fetch(`http://localhost:2999/horoscope/bday:${userBirthday}/color:${userColor}`);
      //const result = await resp.json();
      const result = [
        {
          text: "here is journal 1",
          date: Date.now(),
          id: 1,
        },
        {
          text: "here is journal 2",
          id: 2,
          date: Date.now(),
        },
        {
          text: "here is journal 3",
          id: 3,
          date: Date.now(),
        },
      ];
      setHistory(result);
    }

    try {
      fetchData();
    } catch (e) {
      console.log(e.message);
      setList(<p>Error, please try again later.</p>);
    }
  }, []);

  useEffect(() => {
    console.log(history);

    if (!history || history.length === 0) {
      setList(<p>No saved entries available.</p>);
    }

    const newList = history.map(function (entry) {
      return (
        <li key={entry.id}>
          <p>{new Date(entry.date).toLocaleString()}</p>
          <p>{entry.text}</p>
          <br />
        </li>
      );
    });
    setList(newList);
  }, [history]);

  return (
    <div className="outer-box">
      <div className="centered-box resources">
        <ul>{list}</ul>
        <p className="more-margin"></p>

        <a href="/activities/journaling">Back</a>
      </div>
    </div>
  );
};

export default JournalHistory;
