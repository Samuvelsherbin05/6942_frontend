
import { useState, useEffect } from "react";

const App = () => {



  // Form State
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    username: ""
  });

  // Users State
  const [users, setUsers] = useState([]);

  // Fetch Existing Users
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // Handle Input Changes
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !user.name.trim() ||
      !user.email.trim() ||
      !user.phone.trim() ||
      !user.username.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(user.email)) {
      alert("Please enter a valid email");
      return;
    }

    if (!/^\d{10}$/.test(user.phone)) {
      alert("Phone number must be 10 digits");
      return;
    }

    try {
      // POST API
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        }
      );

      if (!res.ok) {
        throw new Error("Registration failed");
      }

      const data = await res.json();

      // Add New User to Table
      setUsers((prevUsers) => [...prevUsers, data]);

      alert("Registration Successful!");

      // Clear Input Fields
      setUser({
        name: "",
        email: "",
        phone: "",
        username: ""
      });

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>

      <h1>User Registration Application</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={user.phone}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={user.username}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

      <h2>Registered Users</h2>

      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "auto",
          borderCollapse: "collapse"
        }}
      >

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.username}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
};

export default App;
