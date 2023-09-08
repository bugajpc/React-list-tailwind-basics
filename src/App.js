import "./App.css";
import NameList from "./NameList";
import Profile from "./Post";
function App() {
  return (
    <div className="px-6 place-content-center grid grid-cols-2 gap-4">
      <div>
        <NameList />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default App;
