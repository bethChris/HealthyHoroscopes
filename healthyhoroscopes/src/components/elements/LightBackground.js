import { useState, useEffect } from "react";
import supabase from "../../supabase";
const LightBackground = ({ content, backOption, name }) => {
  const [backButton, setBackButton] = useState(<></>);

  useEffect(() => {
    if (backOption) {
      setBackButton(<button className="logoutButton">Back</button>);
    }
  }, [backOption]);

  async function logOut() {
    const { error } = await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <div>
      <div className="navbar">
        <div className="left">{backButton}</div>
        <div className="center">
          <h1>{name}</h1>
        </div>
        <div className="right">
          <button className="logoutButton" onClick={logOut}>
            Log Out
          </button>
        </div>
      </div>

      <div className="content-body">{content}</div>
    </div>
  );
};

export default LightBackground;
