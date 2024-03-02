import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabase";

const Treyson = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [journal, setJournal] = useState(null);
  const [affirmations, setAffirmations] = useState(null);
  const navigate = useNavigate();
  var userId = localStorage.getItem("userId");
  if (!userId) {
    navigate("/login");
  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: user } = await supabase.auth.getUser();
        console.log("user:", user);

        let { data: users, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", user.user.id);

        console.log("users:", users);

        let { data: journal, errors } = await supabase
          .from("journal")
          .select("*")
          .eq("user_id", user.user.id);

        console.log("journals:", journal);

        let { data: affirmations, errorsq } = await supabase
          .from("affirmations")
          .select("*")
          .eq("user_id", user.user.id);

        if (affirmations.length > 0) {
          setAffirmations(affirmations);
        }
        if (user.user !== null) {
          setUser(user);
        }
        if (users.length > 0) {
          setUsers(users);
        }
        if (journal.length > 0) {
          setJournal(journal);
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, []);

  const increment = () => {
    setCount(count + 1);
    addJournal();
  };

  const addJournal = async () => {
    const { data, error } = await supabase.from("journal").insert([
      {
        user_id: user.user.id,
        content: "This is my first journal entry",
        date: getCurrentDateYYYYMMDD(),
      },
    ]);
    console.log(data);
  };
  const removeJournal = async () => {
    const { data, error } = await supabase
      .from("journal")
      .delete()
      .eq("user_id", user.user.id);
    console.log(data);
  };

  const decrement = () => {
    setCount(count - 1);
    removeJournal();
  };

  // Construct the formatted date string

  return (
    <div>
      <h1>Treysons Site {count}</h1>
      {user && <p>User: {user.user.email}</p>}
      {users && (
        <p>
          Name: {users[0].name}
          <br /> Bday: {formatDate(users[0].bDay)}
        </p>
      )}
      {journal &&
        journal.map((entry, index) => (
          <p key={index}>
            Journal: {entry.content}
            <br /> Date: {entry.date}
          </p>
        ))}

      {affirmations &&
        affirmations.map((affirmation, index) => (
          <p key={index}>
            Affirmations: {affirmation.content}
            <br /> Date: {affirmation.date}
          </p>
        ))}
      <button onClick={increment}>Add a test journal</button>
      <button onClick={decrement}>Remove all of your journals lol</button>
    </div>
  );
};

function getCurrentDateYYYYMMDD() {
  // Get current date
  let currentDate = new Date();

  // Extract year, month, and day components
  let year = currentDate.getFullYear();
  let month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
  let day = ("0" + currentDate.getDate()).slice(-2);

  // Format the date as YYYYMMDD
  let formattedDate = year + month + day;

  return formattedDate;
}
function formatDate(inputDate) {
  const month = parseInt(inputDate.substring(0, 2));
  const day = parseInt(inputDate.substring(2, 4));
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month - 1];
  let daySuffix;
  if (day >= 11 && day <= 13) {
    daySuffix = "th";
  } else {
    switch (day % 10) {
      case 1:
        daySuffix = "st";
        break;
      case 2:
        daySuffix = "nd";
        break;
      case 3:
        daySuffix = "rd";
        break;
      default:
        daySuffix = "th";
    }
  }
  const formattedDate = monthName + " " + day + daySuffix;
  return formattedDate;
}

export default Treyson;
