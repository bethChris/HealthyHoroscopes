import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home';
import Affirmations from "./components/views/Affirmations";
import Journaling from "./components/views/Journaling";
import Music from "./components/views/Music";
import Activity from "./components/views/Activity";
import Meditations from "./components/views/Meditations";
import Resources from "./components/views/Resources";

import LightBackground from "./components/elements/LightBackground";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <LightBackground backOption={false} name="" content={<Home/>}/>
        } />

        <Route exact path="/login" element={<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />} />

        <Route path="/activities/affirmations" element={<Affirmations/>} />
        <Route path="/activities/journaling" element={<Journaling/>} />
        <Route path="/activities/music" element={<Music/>} />
        <Route path="/activities/activity" element={<Activity/>} />
        <Route path="/activities/meditations" element={<Meditations/>} />
        <Route path="/activities/resources" element={<Resources/>} />

      </Routes>
    </Router>
  );
};


export default App;
