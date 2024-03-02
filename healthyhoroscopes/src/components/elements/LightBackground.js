import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { useNavigate } from "react-router-dom";

const LightBackground = ({ content, logOut, backOption, name }) => {
  const [backButton, setBackButton] = useState(<></>);
  const [logoutButton, setLogoutButton] = useState(<></>);
  const navigate = useNavigate();
  useEffect(() => {
    if (logOut) {
      setLogoutButton(
        <button className="logoutButton" onClick={logItOut}>
          Log Out
        </button>
      );
    } else {
      setLogoutButton(<></>);
    }
  }, [logOut]);

  useEffect(() => {
    if (backOption) {
      setBackButton(
        <button onClick={goBack} className="logoutButton">
          Back
        </button>
      );
    } else {
      setBackButton(<></>);
    }
  }, [backOption]);

  async function logItOut() {
    const { error } = await supabase.auth.signOut();
    localStorage.removeItem("userId");
    window.location.href = "/login";
  }

  function goBack() {
    navigate("/home");
  }

  return (
    <div>
      <div className="navbar">
        <div className="left">{backButton}</div>
        <div className="center">
          <h1>{name}</h1>
        </div>
        <div className="right">{logoutButton}</div>
      </div>

      <div className="content-body">{content}</div>
    </div>
  );
};

export default LightBackground;
