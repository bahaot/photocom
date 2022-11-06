import { useState } from "react";

import "./App.css";
import { Layout } from "./component/sharedCompoennts/Layout/Layout";
import Stories from './component/Stories/Stories'
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
  return (
    <Layout>
      <div>nav</div>
      <div> <Stories stories={users[0].stories} /> </div>
      <div>right</div>
    </Layout>
  );
};

export default App;
