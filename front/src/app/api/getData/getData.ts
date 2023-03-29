type PostType = {
  id: number;
  title: string;
  description: string;
  date: string;
  path: string;
  category: string;
  featured: string;
  imgUrl: string;
};

export const getAllPostData = async () => {
  const res = await fetch("http:///localhost:3002/api/post", {
    cache: "no-store",
  });
  const data = await res.json();
  const totalData: PostType[] = data.posts;

  let withUrlData = totalData.map(
    ({ id, title, description, date, category, path, featured }: PostType) => {
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
