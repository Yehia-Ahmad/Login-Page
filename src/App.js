import React, { useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const onLoginHandler = () => {
    setIsLogin(true);
  };
  const onLogoutHandler = () => {
    setIsLogin(false);
  };
  return (
    <>
      <MainHeader isLogin={isLogin} onClosePage={onLogoutHandler} />
      <main>{isLogin ? <Home /> : <Login onLogin={onLoginHandler} />}</main>
    </>
  );
}

export default App;
