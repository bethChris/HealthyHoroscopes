import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import supabase from "../../supabase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log("data:", data);
      if (error) {
        throw error;
      }
      localStorage.setItem("userId", data.user.id);
      // Redirect to home page after successful login
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error.message);
    }
  };
  const handleRegister = () => {
    // Redirect to register page
    navigate("/register");
  };

  return (
    <div>
      <h2>Login</h2>
      
      <div>
      <input className="login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div className="login">
      <button className="login-input-button" onClick={handleLogin}>Login</button>
      <button className="login-input-button" onClick={handleRegister}>Register</button>
      </div>
      
    </div>
  );
};

export default Login;
