import React from "react";
import "./Components/GlobalStyles.css";
import Header from "./Components/views/Header/Header";
import Login from "./Components/views/Login/Login";
import Signup from "./Components/views/Signup/Signup";
function App() {
  return (
    <div className="App">
      {/* npx create-react-app typescript_project --typescript */}
      <Header />
      {/* <Login /> */}
      <Signup />
    </div>
  );
}

export default App;
