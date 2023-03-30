import classes from "./PostDetailPage.module.css";
import { PostData } from "../../../types/Type";
import MarkDownPost from "./MarkDownPost";
import Image from "next/image";

type postType = {
  postData: PostData;
};

export default function PostDetailPage({ postData }: postType) {
  return (
    <div>
      <Image
        src={postData.imgUrl}
        width={500}
        height={500}
        alt={postData.title}
      />
      <h1>{postData.title}페이지</h1>
      <MarkDownPost post={postData.content} />
    </div>
  );
}
