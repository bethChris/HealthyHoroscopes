import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

const LightBackground = ({ content, backOption, name }) => {

  const [backButton, setBackButton] = useState(<></>);
  const navigate = useNavigate();

  useEffect(() => {
    if (backOption) {
      setBackButton(<button onClick={goBack} className="logoutButton">Back</button>);
    }
  }, [backOption]);

  function logOut() {
    console.log("Logging out");
  }

  function goBack() {
    navigate('/');
  }

  return (
    <div>

      <div className="navbar">
        <div className="left">
          {backButton}
        </div>
        <div className="center">
          <h1>{name}</h1>
        </div>
        <div className="right">
          <button className="logoutButton" onClick={logOut}>Log Out</button>
        </div>
      </div>


      <div className="content-body">
        {content}
      </div>

    </div>
  );
};

export default LightBackground;
