import "./header.component.styles.scss";
import { RxRadiobutton } from "react-icons/rx";

export default function Header() {
  return (
    <div className="header-wraper">
      <div className="header-left-side">
        <div className="header-icon">
          <RxRadiobutton />
        </div>
        <p>Products</p>
        <p>App</p>
        <p>About</p>
        <p>FAQ</p>
      </div>
      <div className="header-right-side">
        <div className="log-in">
          <p className="log-in-text">LOG IN</p>
          <div className="sign-up">
            <p className="sign-up-text">SIGN UP</p>
          </div>
        </div>
      </div>
    </div>
  );
}
