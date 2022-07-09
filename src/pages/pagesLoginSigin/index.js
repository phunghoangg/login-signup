import images from "../../assets/image";

import style from "./pagesLoginSigin.module.scss";
import classNames from "classnames/bind";
import { FcGoogle } from "react-icons/fc";
import { FiTwitter } from "react-icons/fi";
import { useGlobalContext } from "../../context";

const cx = classNames.bind(style);

function PagesLoginSigin() {
  const {
    login,
    handleClickLogin,
    handleClickSignup,
    handleSubmit,
    valueEmail,
    valuePassWord,
    handleChangeEmail,
    handleChangePassword,
    warn,
    signWarn,
  } = useGlobalContext();
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("header")}>
          <div>
            <img className={cx("img")} src={images.imageSigin} alt="ảnh" />
          </div>
          <div className={cx("name")}>{login ? "GITHUB USER " : "Sign Up"}</div>
        </div>

        <div className={cx("content")}>
          <div className={cx("btn")}>
            <div
              className={
                login ? cx("btn-CLick", "btn-box") : cx("btn-No-CLick")
              }
              onClick={handleClickLogin}
            >
              Log in
            </div>
            <div
              className={cx(!login ? "btn-CLick" : "btn-No-CLick")}
              onClick={handleClickSignup}
            >
              Sign Up
            </div>
          </div>

          <div className={cx("content-signup")}>
            <div className={cx("connect-Social-Network-google")}>
              <div className={cx("google")}>
                <span className={cx("icon")}>
                  <FcGoogle />
                </span>
                <span className={cx("text")}>
                  {login ? "Sign in with Google" : "sign up with Google"}
                </span>
              </div>

              <div className={cx("twitter")}>
                <span className={cx("icon")}>
                  <FiTwitter />
                </span>
                <span className={cx("text")}>
                  {login ? "Sign in with Twitter" : "sign up with Twitter"}
                </span>
              </div>
            </div>
          </div>

          <div className={cx("or")}>
            <span>or</span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className={cx("user-name")}>
              <div className={cx("user-name-1", "check")}>
                <span className={cx("icon")}>
                  <img
                    className={cx("user-pass-icon")}
                    src={images.namesvg.default}
                    alt="ảnh"
                  />
                </span>
                <input
                  className={cx("input")}
                  type="email"
                  name="email"
                  id="email"
                  value={valueEmail}
                  placeholder="yours@example.com"
                  onChange={(e) => handleChangeEmail(e)}
                />
              </div>

              <div className={cx("user-passwork")}>
                <span className={cx("icon")}>
                  <img
                    className={cx("user-pass-icon")}
                    src={images.lock.default}
                    alt="ảnh"
                  />
                </span>
                <input
                  className={cx("input")}
                  type="password"
                  name="password"
                  id="password"
                  value={valuePassWord}
                  onChange={(e) => handleChangePassword(e)}
                  placeholder="your password"
                />
              </div>
            </div>

            <div className={cx("warn")}>
              {warn || signWarn ? (
                <span className={cx("error")}>
                  {!signWarn
                    ? "wrong username or password"
                    : "Username available"}
                </span>
              ) : (
                <span>
                  {login
                    ? "Don't remember your password?"
                    : "By signing up, you agree to our terms of service and privacy policy."}
                </span>
              )}
            </div>

            <button type="submit" className={cx("btn-login")}>
              <div>{login ? "LOG IN" : "SIGN UP"}</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PagesLoginSigin;
