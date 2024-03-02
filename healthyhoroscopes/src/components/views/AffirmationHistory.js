import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase";
const AffirmationHistory = () => {
  const [history, setHistory] = useState([]);
  const [list, setList] = useState(<p>Loading...</p>);
  const navigate = useNavigate();
  var userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
  }
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    async function fetchData() {
      //TODO const resp = await fetch(`http://localhost:2999/horoscope/bday:${userBirthday}/color:${userColor}`);
      //const result = await resp.json();
      let { data: affirmations, errors } = await supabase
        .from("affirmations")
        .select("*")
        .eq("user_id", userId);
      const result = [];
      for (let i = 0; i < affirmations.length; i++) {
        result.push({
          text: affirmations[i].content,
          date: affirmations[i].date,
          id: affirmations[i].id,
        });
      }
      result.reverse();

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
          <p>{new Date(entry.date).toLocaleDateString()}</p>
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

        <a href="/activities/affirmations">Back</a>
      </div>
    </div>
  );
};

export default AffirmationHistory;
