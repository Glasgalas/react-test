import "./App.css";
import Profile from "./components/profile";
import Statistics from "./components/statistics";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import FriendList from "./components/friendlist-item";
import friends from "./friends.json";

function App() {
  return (
    <div>
      <Profile {...user} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
