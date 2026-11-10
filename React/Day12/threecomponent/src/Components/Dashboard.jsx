
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("currentUser") || "null"
  );

  if (!user) {
    navigate("/login", { replace: true });
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("Logout Successful!");
    navigate("/login");
  };

  return (
    <>
      <h1>Welcome to Dashboard</h1>

      <h2>Hello, {user.name}!</h2>

      <h3>User Details</h3>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.number}</p>
      <p>Username: {user.username}</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Dashboard;
