import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onlogin: (emil, password) => {},
});

export const AuthContextProvider = (props) => {
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
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: onLoginHandler,
        onLogOut: onLogoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
