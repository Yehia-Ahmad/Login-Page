import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggingIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLogin(true);
    }
  }, []);
  const onLoginHandler = () => {
    localStorage.setItem("isLoggingIn", "1");
    setIsLogin(true);
  };
  const onLogoutHandler = () => {
    localStorage.removeItem("isLoggingIn");
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
