export const getPostData = async () => {
  const res = await fetch("http:localhost:3002/api/post");
  const data = await res.json();

  return data;
};
