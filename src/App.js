import { useState } from "react";
import "./App.css";
import NavBar from "./component/NavBar/NavBar";
import { Layout } from "./component/sharedCompoennts/Layout/Layout";
import Stories from "./component/Stories/Stories";
import DATA from "./Data/Data";
import RightNavbar from "./component/RightNavbar/RightNavbar";
import TimeLine from "./component/sharedCompoennts/TimeLine/TimeLine";

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
      <NavBar />
      <div>
        {" "}
        <Stories stories={users[0].stories} />
        <TimeLine data={users[0].timeLine.following} />
      </div>
      <RightNavbar />
    </Layout>
  );
};

export default App;
