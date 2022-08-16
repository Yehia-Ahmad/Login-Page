import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./Store/auth-context";

function App() {
  const [isLoggedIn, setIsLogin] = useState(false);

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
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, onLogOut: onLogoutHandler }}
    >
      <MainHeader />
      <main>{isLoggedIn ? <Home /> : <Login onLogin={onLoginHandler} />}</main>
    </AuthContext.Provider>
  );
}

export default App;
