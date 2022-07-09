/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import { dataUser } from "./data.js";
const AppContext = React.createContext();

const initState = {
  login: true,
  warn: false,
  valueEmail: "",
  valuePassWord: "",
  signWarn: false,
};

const AppProvider = ({ children }) => {
  const [UserGithub, dispatch] = useReducer(reducer, initState);
  const [loading, setLoading] = useState(true);
  const handleClickLogin = () => {
    dispatch({ key: "LOGIN" });
  };
  const handleClickSignup = () => {
    dispatch({ key: "SIGN_IN" });
  };
  const handleFocus = () => {
    dispatch({ key: "FOCUS" });
  };

  const handleSubmit = () => {
    if (UserGithub.login) {
      const checkUser = dataUser.filter((item) => {
        return item.user === UserGithub.valueEmail;
      });

      if (checkUser.length >= 1) {
        const checkPassword = checkUser[0].pass === UserGithub.valuePassWord;
        if (checkPassword) {
          setLoading(true);
          window.location = `https://github.com/${checkUser[0].name}`;
        } else {
          dispatch({ key: "WARN_USER" });
        }
      } else {
        dispatch({ key: "WARN_USER" });
      }
    } else {
      const checkUser = dataUser.filter((item) => {
        return item.user === UserGithub.valueEmail;
      });

      if (checkUser.length >= 1) {
        dispatch({ key: "SIGN_IN_WARN" });
      } else {
        dataUser.push({
          id: new Date().getTime().toFixed(),
          user: UserGithub.valueEmail,
          pass: UserGithub.valuePassWord,
        });
        setLoading(true);
        window.location = "https://github.com";
      }
    }
  };

  const handleChangePassword = (e) => {
    dispatch({ key: "CHANGE_PASSWORD", payload: e.target.value });
  };

  const handleChangeEmail = (e) => {
    dispatch({ key: "CHANGE_EMAIL", payload: e.target.value });
  };

  useEffect(() => {
    dispatch({ key: "SET_WARN" });
    dispatch({ key: "SET_SIGN_IN_WARN" });
  }, [UserGithub.valuePassWord || UserGithub.valueEmail]);

  useEffect(() => {
    const timeLoad = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeLoad);
  }, [window.location]);
  return (
    <AppContext.Provider
      value={{
        ...UserGithub,
        loading,
        handleClickLogin,
        handleClickSignup,
        handleFocus,
        handleSubmit,
        handleChangeEmail,
        handleChangePassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
