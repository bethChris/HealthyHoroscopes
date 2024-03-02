import { useState } from "react";

import supabase from "../../supabase";
const TellMore = () => {
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
      console.log("User added successfully:", data);
      // Optionally, you can reset the form fields after successful submission
      setName("");
      setBirthday("");
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Birthday:
        <input type="date" value={birthday} onChange={handleBirthdayChange} />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};
export default TellMore;
