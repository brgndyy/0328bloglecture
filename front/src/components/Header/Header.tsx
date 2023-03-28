import classes from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className={classes.header_container}>
        <div className={classes.main_Logo}>
          <Link href={"/"} className={classes.link}>
            <h1 className={classes.main_name}>BRGNDY&apos;s BLOG</h1>
          </Link>
        </div>
        <div className={classes.header_category_container}>
          <div className={classes.category}>
            <Link href={"/"} className={classes.link}>
              <span className={classes.link_span}>home</span>
            </Link>
          </div>
          <div className={classes.category}>
            <Link href={"/about"} className={classes.link}>
              <span className={classes.link_span}>about</span>
            </Link>
          </div>
          <div className={classes.category}>
            <Link href={"/posts"} className={classes.link}>
              <span className={classes.link_span}>posts</span>
            </Link>
          </div>
          <div className={classes.category}>
            <Link href={"/contact"} className={classes.link}>
              <span className={classes.link_span}>contact</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
