import React, { useState, useEffect } from "react";

import supabase from "../../supabase";

const Treyson = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [journal, setJournal] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: user } = await supabase.auth.getUser();
        // console.log("user:", user);
        // let { data: users, error } = await supabase
        //   .from("users")
        //   .select("*")
        //   .eq("id", user.user.id);

        // console.log("users:", users);

        let { data: journal, errors } = await supabase
          .from("journal")
          .select("*");

        console.log("journals:", journal);

        setUser(user);
        setUsers(users);
        setJournal(journal);
      } catch (error) {
        console.error("Error fetching user:", error.message);
      }
    };

    fetchUser();
  }, []);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
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

    // Construct the formatted date string
    const formattedDate = monthName + " " + day + daySuffix;
    return formattedDate;
  }

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
      {journal && (
        <p>
          Journal: {journal[0].content}
          <br /> Date: {journal[0].date}
        </p>
      )}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Treyson;
