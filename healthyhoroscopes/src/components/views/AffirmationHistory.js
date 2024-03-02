import React, {useEffect, useState} from "react";

const AffirmationHistory = () => {

  const [history, setHistory] = useState([]);
  const [list, setList] = useState(<p>Loading...</p>);

  useEffect(() => {
    const userId = '1234';

    async function fetchData() {
      //TODO const resp = await fetch(`http://localhost:2999/horoscope/bday:${userBirthday}/color:${userColor}`);
      //const result = await resp.json();
      const result = [
        {
          text: "here is affirmation 1",
          id: 1,
        },
        {
          text: "here is affirmation 2",
          id: 2,
        },
        {
          text: "here is affirmation 3",
          id: 3
        }
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

    const newList = history.map(function(entry) {
        return (
          <li key={entry.id}>
            {entry.text}
          </li>
        )
      });
    setList(newList);
  }, [history]);


  return (<div className="outer-box">

    <div className="centered-box resources">
      <ul>
        {list}
      </ul>
      <p className="more-margin"></p>

      <a href="/activities/affirmations">Back</a>
    </div>

  </div>);
};

export default AffirmationHistory;
