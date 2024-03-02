import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (<>

    <div className="container landing-box">
      <div className="blue-box">
        <h1 className="title-text">Healthy Horoscopes</h1>
      </div>

      <div className="button-container">
        <button className="button" onClick={() => navigate('/login')}>Log In</button>
        <button className="button" onClick={() => navigate('/register')}>Sign Up</button>
      </div>
    </div>

  </>);
};

export default Landing;
