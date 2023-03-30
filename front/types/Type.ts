export type postsType = {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  path: string;
  imgUrl: string;
  featured: boolean;
};

export type PostData = postsType & { content: string };
