import classes from "./FeaturedPostItem.module.css";
import Image from "next/image";
import Link from "next/link";

type postType = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  featured: boolean;
  imgUrl: string;
};

export default function FeaturedPostItem({
  title,
  description,
  date,
  category,
  path,
  featured,
  imgUrl,
}: postType) {
  return (
    <Link href={`/posts/${path}`} className={classes.post_link}>
      <li className={classes.postItem_li}>
        <div className={classes.postItem_img_container}>
          <Image
            src={imgUrl}
            alt={title}
            width={300}
            height={250}
            className={classes.post_img}
          />
        </div>
        <div className={classes.postItem_info_container}>
          <div className={classes.postItem_info_date}>
            <p>{date}</p>
          </div>
          <div className={classes.postItem_info_title}>
            <p>{title}</p>
          </div>
          <div className={classes.postItem_info_description}>
            <p>{description}</p>
          </div>
          <div className={classes.postItem_info_category}>
            <p>{category}</p>
          </div>
        </div>
      </li>
    </Link>
  );
}
