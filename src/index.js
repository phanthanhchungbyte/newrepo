import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

function App() {
  const fullName = "Phan Thành Chung";
  const className = "SE17D08";
  const schoolName = "FPT University";
  const description = "Test React";

  return (
    <div>
      <h1>User Information</h1>
      <p>Full Name: {fullName}</p>
      <p>Class: {className}</p>
      <p>School: {schoolName}</p>
      <p>Description: {description}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();