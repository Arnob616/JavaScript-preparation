import React, { useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import TaskList from "./components/TaskList/TaskList";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "abc@gmail.com" && password == "123") {
      setUser("admin");
    } else if (email == "ab@gmail.com" && password == "12") {
      setUser("employee");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="h-screen bg-black">
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
      {/* <EmployeeDashboard />*/}
      {/* <AdminDashboard /> */}
    </div>
  );
};

export default App;
