import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: "https://example.com/welcome",
        },
      });
      if (error) {
        throw error;
      }

      localStorage.setItem("userId", data.user.id);
      navigate("/more-info");
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Register;
