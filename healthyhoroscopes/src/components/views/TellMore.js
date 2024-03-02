import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase";
const TellMore = () => {
  const navigate = useNavigate();
  var userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
  }
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const formatBirthday = (dateString) => {
    const date = new Date(dateString);
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${month}${day}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data: user } = await supabase.auth.getUser();
      const formattedBirthday = formatBirthday(birthday);
      const { data, error } = await supabase
        .from("users")
        .insert([{ id: user.user.id, name: name, bDay: formattedBirthday }]);
      if (error) {
        throw error;
      }
      // console.log("User added successfully:", data);
      navigate("/home");
      // Optionally, you can reset the form fields after successful submission
      setName("");
      setBirthday("");
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div >
      <label className="tellmore-label">
        Name:
        <input  className="login-input" type="text" value={name} onChange={handleNameChange} />
      </label>
      <label className="tellmore-label">
        Birthday:
        <input  className="login-input" type="date" value={birthday} onChange={handleBirthdayChange} />
      </label>
      </div>
      <div className="login">
      <button type="submit">Add User</button>
      </div>
    </form>
  );
};
export default TellMore;
