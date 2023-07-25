import Spinner from "../../components/Spinner";
import { Post } from "../../types/Post";
import { useGetPostsQuery } from "../api/apiSlice";

export default function Posts() {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  const postsElement = posts?.map((post: Post) => (
    <article key={post.id} className="px-2 my-2 border border-blue-300 rounded">
      <h2 className="font-bold">{post.username}</h2>
      <div className="ml-8">
        <h3 className="font-semibold">{post.title}</h3>
        <p>{post.content}</p>
      </div>
    </article>
  ));

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <h3>oops something went wrong</h3>;
  }

  return <section className="min-h-full">{postsElement}</section>;
}
