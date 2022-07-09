import style from "./loading.module.scss"
import classNames from "classnames/bind";
const cx= classNames.bind(style)
function Loading() {
  return (
    <div className={cx("spinner")}>
      <div className={cx("blob blob-0")}></div>
    </div>
  );
}

export default Loading;
