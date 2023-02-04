import Link from "next/link";

const BlogsDetails = ({ SinglePost }) => {
  return (
    <div>
      <h1>{SinglePost.title}</h1>
      <p>{SinglePost.body}</p>
      <Link href="/" legacyBehavior>
        <a>Go to Home</a>
      </Link>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const SinglePost = await res.json();

  return {
    props: {
      SinglePost,
    },
  };
};
export default BlogsDetails;
