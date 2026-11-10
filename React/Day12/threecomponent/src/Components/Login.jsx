
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!login.username.trim() || !login.password) {
      alert("Please fill all fields");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    const validUser = users.find(
      (item) =>
        (item.username === login.username ||
         item.email === login.username) &&
        item.password === login.password
    );

    if (validUser) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify(validUser)
      );

      alert("Login Successful!");

      navigate("/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Enter Username or Email"
          value={login.username}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={login.password}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Login</button>

      </form>

      <p>
        Don't have an account?
        <Link to="/"> Register</Link>
      </p>
    </>
  );
};

export default Login;
