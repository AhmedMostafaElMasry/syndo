import { useEffect, useState } from "react";
import "./App.scss";
import Topbar from "./components/topbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostTiltle from "./pages/post-title";
import Footer from "./components/footer";

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    const saved = localStorage.getItem("login");
    const initialValue = JSON.parse(saved);
    return initialValue || false;
  });
  const handleLogin = () => {
    setIsLogin(true);
  };
  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(isLogin));
  }, [isLogin]);
  return (
    <div
      style={
        isLogin
          ? { backgroundColor: "#ffffff", color: "#000000" }
          : { backgroundColor: "#000000", color: "#ffffff" }
      }
    >
      <Router>
        <Topbar
          isLogin={isLogin}
          handleLogin={handleLogin}
          setIsLogin={setIsLogin}
        />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/posts" component={Posts}></Route>
          <Route
            path="/post/title/:id"
            component={PostTiltle}
            isLogin={isLogin}
          ></Route>
        </Switch>
        <Footer isLogin={isLogin} />
      </Router>
    </div>
  );
}

export default App;
