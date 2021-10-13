
import Home from "./Components/pages/home/Home";
import Login from "./Components/pages/login/Login";
import Register from "./Components/pages/register/Register";
import Settings from "./Components/pages/settings/Settings";
import Single from "./Components/pages/single/Single";
import Write from "./Components/pages/write/Write";
import Topbar from "./Components/topbar/Topbar";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Post from "./Components/post/Post";

function App() {
  const user=false;
  return (
    <div className="App">
     <Router>
       <Topbar/>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/register"> {user ? <Home/> : <Register/>} </Route>
         <Route path="/login">{user ? <Home/> : <Login/>} </Route>
         <Route path="/settings">{user ? <Settings/> : <Register/>} </Route>
         <Route path="/write"> {user ? <Write/> : <Register/> }</Route>
         <Route path="/post/:postId"> <Single/> </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
