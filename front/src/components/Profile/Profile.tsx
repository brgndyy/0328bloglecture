import classes from "./Profile.module.css";
import profileImg from "../../../public/image/profile.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className={classes.profile_container}>
      <div className={classes.profile_img_container}>
        <Image
          className={classes.profile_img}
          src={profileImg}
          alt="profile"
          width={200}
          height={200}
          priority
        />
      </div>
      <div className={classes.profile_info}>
        <h1 className={classes.profile_main_logo}>Hi, I&apos;m BRGNDY</h1>
        <span>Be Creative</span>
        <span>공부중</span>
        <div className={classes.link_container}>
          <Link href={"/contact"} className={classes.profile_link}>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
