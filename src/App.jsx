
import Home from "./Components/pages/home/Home";
import Settings from "./Components/pages/settings/Settings";
import Single from "./Components/pages/single/Single";
import Write from "./Components/pages/write/Write";
import Topbar from "./Components/topbar/Topbar"
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Settings/>
    </div>
  );
}

export default App;
