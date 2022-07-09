/* eslint-disable react-hooks/rules-of-hooks */
import style from "./pagesDefault.module.scss";
import classNames from "classnames/bind";

// logo
import images from "../../assets/image";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);
function Defaultpages() {
  return (
    <div className={cx("Wrapper")}>
      <div className={cx("container")}>
        <img src={images.logo.default} alt="name" />
        <h1 className={cx("name")}>GITHUB USER</h1>
        <Link to="/sigin" className={cx("gradient-border")}>
          <span > Log In / Sign Up</span>
        </Link>
      </div>
      ;
    </div>
  );
}

export default Defaultpages;
