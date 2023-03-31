import classes from "./ContactInfo.module.css";
import { AiFillGithub } from "react-icons/ai";

export default function ContactInfo() {
  return (
    <div className={classes.info_container}>
      <div className={classes.info}>
        <h1>Contact Me</h1>
        <span>
          <p>brgndy96@gmail.com</p>
        </span>
        <span className={classes.git_icon}>
          <AiFillGithub />
        </span>
      </div>
      <div className={classes.sendmail}>
        <h1>Or Send me an email</h1>
      </div>
    </div>
  );
}
