import { postsType } from "../../../../types/Type";
import { readFile } from "fs/promises";
import path from "path";
import { PostData } from "../../../../types/Type";

export const getAllPostData = async () => {
  const res = await fetch("http:///localhost:3002/api/post", {
    cache: "no-store",
  });
  const data = await res.json();
  const totalData: postsType[] = data.posts;

  let withUrlData = totalData.map(
    ({ id, title, description, date, category, path, featured }: postsType) => {
      const imgUrl = `/images/posts/${id}.png`;
      return {
        id,
        title,
        description,
        date,
        category,
        path,
        featured: !!featured,
        imgUrl,
      };
    }
  );
  return withUrlData;
};

export const getFeaturedPostData = async () => {
  const allData = await getAllPostData();

  const featuredData = allData.filter((item) => item.featured);

  return featuredData;
};

export const getCarouselData = async () => {
  const allData = await getAllPostData();

  const carouselData = allData.filter((item) => !item.featured);

  return carouselData;
};

export const getPostData = async (fileName: string): Promise<PostData> => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "posts",
    `${fileName}.md`
  );
  const allData = await getAllPostData();
  const metaData = allData.find((post) => post.path === fileName.toString());

  if (!metaData) {
    throw new Error(`해당 파일을 찾을 수 없습니다: ${fileName}`);
  }

  const content = await readFile(filePath, "utf-8");

  return { ...metaData, content };
};
