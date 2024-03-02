import React, {useEffect, useState} from 'react';
import Button from "../elements/Button";

const Affirmations = () => {
    const [inputText, setInputText] = useState('');
    const [buttonText, setButtonText] = useState('Submit');
    const [message, setMessage] = useState('');

    function handleClick() {

      if (inputText === '') {
        alert('You cannot submit a blank field!');
        return;
      }

      setButtonText('Submit Again');
      //TODO send affirmation to server
      if (Date.now() % 2 === 0) {
        //accept
        setMessage('Great Job!');
      } else {
        //reject
        setMessage('');
        alert("Your affirmation should focus on the positive! Try again, a little more positive!");
      }
    }

    return (<div className="outer-box">

      <div className="centered-box">
        <h2>Write yourself a positive affirmation:</h2>
        <textarea
          placeholder="Enter text here"
          onChange={e => setInputText(e.target.value)}
          value={inputText}
        ></textarea>

        <Button text={buttonText} handleClick={handleClick}/>

        <p className="more-margin bigger">{message}</p>

        <a href="/activities/affirmations/history">View Affirmation History</a>
      </div>

    </div>);
};

export default Affirmations;
