import React, {useEffect, useState} from 'react';
import Button from "../elements/Button";

const Affirmations = () => {
    const [inputText, setInputText] = useState('');
    const [response, setResponse] = useState(null);

    return (<div className="outer-box">

      <div className="centered-box">
        <h2>Write yourself a positive affirmation:</h2>
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

export default Affirmations;
