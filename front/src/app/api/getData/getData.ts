export const getAllPostData = async () => {
  const res = await fetch("http:///localhost:3002/api/post", {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
};

export const getFeaturedPostData = async () => {
  const res = await fetch("http:///localhost:3002/api/post/featured", {
    cache: "no-store",
  });
  const data = await res.json();
  const totalData = data.featuredPosts;

  return totalData;
};
