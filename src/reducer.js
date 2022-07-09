const reducer = (reducer, action) => {
  switch (action.key) {
    case "LOGIN": {
      return {
        ...reducer,
        login: true,
      };
    }

    case "SIGN_IN": {
      return {
        ...reducer,
        login: false,
      };
    }

    case "FOCUS": {
      return {
        ...reducer,
        focus: !reducer.focus,
      };
    }

    case "CHANGE_EMAIL": {
      return {
        ...reducer,
        valueEmail: action.payload,
      };
    }

    case "CHANGE_PASSWORD": {
      return {
        ...reducer,
        valuePassWord: action.payload,
      };
    }

    case "WARN_USER": {
      return {
        ...reducer,
        warn: true,
      };
    }

    case "SET_WARN": {
      return {
        ...reducer,
        warn: false,
      };
    }

    case "SIGN_IN_WARN": {
      return {
        ...reducer,
        signWarn: true,
      };
    }

    case "SET_SIGN_IN_WARN": {
      return {
        ...reducer,
        signWarn: false,
      };
    }

    default:
      throw new Error("new Error");
  }
};

export default reducer;
