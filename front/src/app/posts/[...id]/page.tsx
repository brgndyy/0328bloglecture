type Params = {
  id: string;
};

export default function page({ params }: { params: Params }) {
  console.log(params);

  return <div>{params.id} 페이지</div>;
}
