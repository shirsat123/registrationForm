import { useEffect, useState } from "react";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <RegistrationForm />
    </div>
  );
}

function RegistrationForm() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Registered");
  }, [flag]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Fields are Mandatory");
    } else {
      setFlag(true);
    }
  };

  return (
    <div className="Container">
      <form>
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        <br />
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your password"
            name="password"
            onChange={handleData}
          />
        </div>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      {flag
        ? alert(`Hello ${inputData.name} Your Registration is Completed`)
        : ""}
    </div>
  );
}
