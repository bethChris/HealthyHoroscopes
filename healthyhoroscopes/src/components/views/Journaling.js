import React, {useEffect, useState} from 'react';
import Button from "../elements/Button";

const Journaling = () => {
  const [inputText, setInputText] = useState('');

  return (<div className="outer-box">

    <div className="centered-box">
      <h2>Journaling can help control your symptoms and improve your mood by: <br/><br/>
      </h2>
      <ul>
        <li>
          Helping you prioritize problems, fears, and concerns.
        </li>
        <li>
          Tracking any symptoms day-to-day so that you can recognize triggers and learn ways to better control them.
        </li>
        <li>
          Providing an opportunity for positive self-talk and identifying negative thoughts.
        </li>
      </ul>
      <textarea
        placeholder="Enter text here"
        onChange={e => setInputText(e.target.value)}
        value={inputText}
      ></textarea>

      <Button text="Submit" handleClick={() => console.log("click")}/>

      <p className="more-margin"></p>
    </div>

  </div>);
};

export default Journaling;
