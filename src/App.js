import { useState } from "react";

import "./App.css";

import DATA from "./Data/Data";

// the coming data is look like this
/*
[
  id: "text",
  firstName: "text",
  lastName: "text",
  email: "text",
  stories: ["array of stroies"],
  timeLine: ["array of posts"],
  peopleToFollow: ["array of random users"],
] 
*/

const App = () => {
  const [users, setUsers] = useState(DATA);
  // since this is not a real application we are going to work with only one user
  return <div className="App"></div>;
};

export default App;
