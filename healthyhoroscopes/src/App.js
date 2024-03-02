// import { Auth } from "@supabase/auth-ui-react";
// import {
//   // Import predefined theme
//   ThemeSupa,
// } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/views/Landing";
import Home from "./components/views/Home";
import Affirmations from "./components/views/Affirmations";
import AffirmationHistory from "./components/views/AffirmationHistory";
import Journaling from "./components/views/Journaling";
import JournalHistory from "./components/views/JournalHistory";
import Music from "./components/views/Music";
import Activity from "./components/views/Activity";
import Meditations from "./components/views/Meditations";
import Resources from "./components/views/Resources";
import Treyson from "./components/views/Treyson";
import Login from "./components/views/Login";

import LightBackground from "./components/elements/LightBackground";
import Register from "./components/views/Register";
import TellMore from "./components/views/TellMore";

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

const App = () => {
  return (
    <Router>
      <Routes>

        <Route
          exact
          path="/"
          element={<Landing />}
        />

        <Route
          exact
          path="/home"
          element={<LightBackground name="" content={<Home />} />}
        />

        <Route path="/login" element={<Login supabase={supabase} />} />
        <Route path="/register" element={<Register supabase={supabase} />} />

        <Route
          path="/activities/affirmations"
          element={
            <LightBackground
              backOption={true}
              name="Affirmations"
              content={<Affirmations />}
            />
          }
        />
        <Route
          path="/activities/affirmations/history"
          element={
            <LightBackground
              backOption={true}
              name="Affirmations"
              content={<AffirmationHistory />}
            />
          }
        />
        <Route
          path="/activities/journaling"
          element={
            <LightBackground
              backOption={true}
              name="Journaling"
              content={<Journaling />}
            />
          }
        />
        <Route
          path="/activities/journaling/history"
          element={
            <LightBackground
              backOption={true}
              name="Journaling"
              content={<JournalHistory />}
            />
          }
        />
        <Route
          path="/activities/music"
          element={
            <LightBackground
              backOption={true}
              name="Music"
              content={<Music />}
            />
          }
        />
        <Route
          path="/activities/activity"
          element={
            <LightBackground
              backOption={true}
              name="Activity"
              content={<Activity />}
            />
          }
        />
        <Route
          path="/activities/meditations"
          element={
            <LightBackground
              backOption={true}
              name="Meditations"
              content={<Meditations />}
            />
          }
        />
        <Route
          path="/activities/resources"
          element={
            <LightBackground
              backOption={true}
              name="Resources"
              content={<Resources />}
            />
          }
        />
        <Route
          path="/more-info"
          element={
            <LightBackground
              backOption={true}
              name="Tell us more!"
              content={<TellMore />}
            />
          }
        />
        <Route path="/treyson" element={<Treyson />} />
      </Routes>
    </Router>
  );
};

export default App;
