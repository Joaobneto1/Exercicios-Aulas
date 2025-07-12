import { PostProps } from "@/interfaces/BlogInterfaces";
import { createRequest } from "@/utils/createRequest";

async function getPost(id: string) {
  const post = await createRequest(`/posts/${id}`, {
    method: 'GET'
  })
  return post
}

export default async function Post({ params }: Readonly<PostProps>) {
  const post = await getPost(params.id)
  return (
    <div className="py-6 px-6 lg:py-12 text-center max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold tracking-tight">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
