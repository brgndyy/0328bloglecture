import classes from "./PostDetailPage.module.css";
import { PostData } from "../../../types/Type";
import MarkDownPost from "./MarkDownPost";
import Image from "next/image";
import { AiTwotoneCalendar } from "react-icons/ai";
import NextOrPrevPost from "./NextOrPrevPost";

type PostDetailPageProps = {
  postData: PostData["postData"];
  slideData: PostData["slideData"];
};

export default function PostDetailPage({
  postData,
  slideData,
}: PostDetailPageProps) {
  return (
    <div className={classes.post_detail_container}>
      <div className={classes.post_detail_img_container}>
        <Image
          className={classes.post_detail_img}
          src={postData.imgUrl}
          width={500}
          height={500}
          alt={postData.title}
        />
      </div>
      <div className={classes.postData_summary}>
        <div className={classes.date_container}>
          <div className={classes.icon}>
            <AiTwotoneCalendar />
          </div>
          <div className={classes.date}>{postData.date}</div>
        </div>
        <span>
          <h1 className={classes.title}>{postData.title}</h1>
        </span>
        <div className={classes.description_container}>
          <span className={classes.description}>{postData.description}</span>
        </div>
      </div>

      <MarkDownPost post={postData.content} />
      <NextOrPrevPost slideData={slideData} />
    </div>
  );
}
