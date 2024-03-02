import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    return (<>
      <div className="container">

        <div className="greenBox">
          <h2>Your Daily Horoscope</h2>
          <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem. Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem.</p>
        </div>

        <div className="redBox">
          <h3>Activities</h3>
        </div>

        <div className="orangeBoxContainer">

          <div className="orangeBox lighter" onClick={() => {navigate('/activities/affirmations');}}>
            <p>Affirmations</p>
          </div>
          <div className="orangeBox darker" onClick={() => {navigate('/activities/journaling');}}>
            <p>Journaling</p>
          </div>
          <div className="orangeBox lighter" onClick={() => {navigate('/activities/music');}}>
            <p>Music Recommendations</p>
          </div>

          <div className="orangeBox darker" onClick={() => {navigate('/activities/activity');}}>
            <p>Activity Recommendations</p>
          </div>
          <div className="orangeBox lighter" onClick={() => {navigate('/activities/meditations');}}>
            <p>Meditations</p>
          </div>
          <div className="orangeBox darker" onClick={() => {navigate('/activities/resources');}}>
            <p>Resources</p>
          </div>

        </div>
      </div>
    </>);
};

export default Home;
