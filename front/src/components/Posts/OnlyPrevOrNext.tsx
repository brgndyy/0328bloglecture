import classes from "./OnlyPrevOrNext.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type dataType = {
  id: number;
  title: string;
  imgUrl: string;
  description: string;
  path: string;
};

export default function OnlyPrevOrNext({ slideData }: { slideData: dataType }) {
  const { imgUrl, title, description, id, path } = slideData;
  return (
    <>
      <div className={classes.img_container}>
        <Image
          className={classes.prevOrNextImg}
          src={imgUrl}
          width={100}
          height={300}
          alt={title}
        />
      </div>
      <Link href={`/posts/${path}`} className={classes.post_info_container}>
        <div className={classes.arrow}>
          <AiOutlineArrowLeft className={`${id === 2 ? classes.hide : ""}`} />
        </div>
        <div className={classes.info}>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
        <div className={classes.arrow}>
          <AiOutlineArrowRight className={`${id === 8 ? classes.hide : ""}`} />
        </div>
      </Link>
    </>
  );
}
