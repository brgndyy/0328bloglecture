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

export type PostData = {
  postData: postsType & {
    content: string;
  };
  slideData: postsType[];
};
