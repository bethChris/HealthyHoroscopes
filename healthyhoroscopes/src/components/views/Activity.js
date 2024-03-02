import React, {useEffect, useState} from 'react';
import Button from "../elements/Button";

const Activity = () => {
  const [inputText, setInputText] = useState('');
  const [inputText1, setInputText1] = useState('');
  const [inputText2, setInputText2] = useState('');
  const [buttonText, setButtonText] = useState('Submit');
  const [message, setMessage] = useState('');
  const [recs, setRecs] = useState(null);
  const [recDisplay, setRecDisplay] = useState(<></>);

  useEffect(() => {
    if (!recs || recs.length === 0) {
      setRecDisplay(<></>);
    } else {

      const theRecs = recs.map(function(item) {
        return (
          <li key={item.id}>
            {item.text}
          </li>
        )
      });

      setRecDisplay(
        <>
          <p>Based on your interests, here are three activities you may enjoy that can improve mental health: </p>
          {theRecs}
        </>
      );
    }

  }, [recs]);

  function handleClick() {

    if (inputText === '' || inputText1 === '' || inputText2 === '') {
      alert('You cannot submit a blank field!');
      return;
    }

    setButtonText('Submit Again');

    //TODO send interests to server and get recs
    setRecs([
      {
        id: 1,
        text: 'Go for a walk',
      },
      {
        id: 2,
        text: 'Go for a hike',
      },
      {
        id: 3,
        text: 'Go find a bird',
      }
    ]);
  }

  return (<>
    <div className="outer-box">

      <div className="centered-box">
        <h2>Enter three different activities you enjoy or interests you have:</h2>

        <input
          placeholder="Enter text here"
          onChange={e => setInputText(e.target.value)}
          value={inputText}
        ></input>

        <input
          placeholder="Enter text here"
          onChange={e => setInputText1(e.target.value)}
          value={inputText1}
        ></input>

        <input
          placeholder="Enter text here"
          onChange={e => setInputText2(e.target.value)}
          value={inputText2}
        ></input>

        <Button text={buttonText} handleClick={handleClick}/>

        <p className="more-margin bigger">{message}</p>

        {recDisplay}

      </div>

    </div>
  </>);
};

export default Activity;
