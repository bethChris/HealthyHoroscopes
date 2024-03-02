import React, {useEffect, useState} from 'react';
import Button from "../elements/Button";
import CheckboxInput from "../elements/CheckboxInput";
import Scale from "../elements/Scale";
import Dropdown from "../elements/DropdownInput";

const Music = () => {
  const [details, setDetails] = useState({
    age: '',
    hoursDay: '',
    working: false,
    instrument: false,
    compose: false,
    explore: false,
    foreign: false,
    anxiety: 5,
    depression: 5,
    insomnia: 5,
    ocd: 5,
    genre: '',
  });
  const [buttonText, setButtonText] = useState('Submit');
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
    const newOne = {...details};
    newOne[key] = newVal;
    setDetails(newOne);
  }

  function handleClick() {

    if (details.age === '' || details.hoursDay === '' || details.genre === '') {
      alert('Age, hours per day, and genre fields are required!');
      return;
    }

    console.log(details);

    setButtonText('Submit Again');

    //TODO send data to server and get recs
    setRecs('You should listen to this, this, and this because it will make you less depressy.');
  }

  return (<>
    <div className="outer-box">

      <div className="centered-box">
        <h2>Fill out the following information to get helpful music recommendations:</h2>

        <label>Age?</label>
        <input
          type="number"
          placeholder="Enter age here"
          onChange={e => updateDetails('age', e.target.value)}
          value={details.age}
        ></input>

        <label>How many hours a day do you listen to music?</label>
        <input
          type="number"
          placeholder="Enter number of hours here"
          onChange={e => updateDetails('hoursDay', e.target.value)}
          value={details.hoursDay}
        ></input>

        <CheckboxInput
          text="Do you listen to music while working?"
          value={details.working}
          whenChange={newVal => updateDetails('working', newVal)}
        />

        <CheckboxInput
          text="Do you play an instrument?"
          value={details.instrument}
          whenChange={newVal => updateDetails('instrument', newVal)}
        />

        <CheckboxInput
          text="Do you compose music?"
          value={details.compose}
          whenChange={newVal => updateDetails('compose', newVal)}
        />

        <CheckboxInput
          text="Do you enjoy exploring unfamiliar music types?"
          value={details.explore}
          whenChange={newVal => updateDetails('explore', newVal)}
        />

        <CheckboxInput
          text="Do you listen to music in foreign languages?"
          value={details.foreign}
          whenChange={newVal => updateDetails('foreign', newVal)}
        />

        <label>Rate the intensity of your symptoms of the following conditions in the past week. (1 meaning no symptoms, 10 meaning intense symptoms.)</label>

        <Scale
          text="Anxiety"
          value={details.anxiety}
          setValue={newVal => updateDetails('anxiety', newVal)}
        />

        <Scale
          text="Depression"
          value={details.depression}
          setValue={newVal => updateDetails('depression', newVal)}
        />

        <Scale
          text="Insomnia"
          value={details.insomnia}
          setValue={newVal => updateDetails('insomnia', newVal)}
        />

        <Scale
          text="Obsessive Compulsion"
          value={details.ocd}
          setValue={newVal => updateDetails('ocd', newVal)}
        />

        <Dropdown
          value={details.genre}
          setValue={newVal => updateDetails('genre', newVal)}
        />

        <Button text={buttonText} handleClick={handleClick}/>

        <p className="more-margin bigger"></p>

        {recDisplay}

      </div>

    </div>
  </>);
};

export default Music;
