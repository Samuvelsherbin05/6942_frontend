
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(user).some(value => value.trim() === "")) {
      alert("Please fill all fields");
      return;
    }

    if (user.password !== user.confirmPassword) {
      alert("Password does not match");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    const existingUser = users.find(
      (item) =>
        item.email === user.email ||
        item.username === user.username
    );

    if (existingUser) {
      alert("Email or Username already exists");
      return;
    }

    const { confirmPassword, ...newUser } = user;

    users.push(newUser);

    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(users)
    );

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <>
      <h1>Register Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={user.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={user.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="tel"
          name="number"
          placeholder="Enter Your Number"
          value={user.number}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="username"
          placeholder="Enter Your Username"
          value={user.username}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={user.password}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Your Password"
          value={user.confirmPassword}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Register</button>

      </form>

      <p>
        Already have an account?
        <Link to="/login"> Login</Link>
      </p>
    </>
  );
};

export default Register;
