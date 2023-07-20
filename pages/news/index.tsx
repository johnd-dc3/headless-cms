import { PostBlock } from "@/components/PostBlock";
import { GetStaticProps } from "next";
import { getPostsByCPT } from "@/lib/posts";

export default function BlogHome({ posts }: { posts: any }) {
  const postType = "news";

  return (
    <>
      <main>
        <h1>BLOG</h1>
        <p>Read our latest articles</p>
        <section>
          <ul>
            {posts.map((post: any) => {
              return <PostBlock key={post.slug} postType={postType} post={post} />;
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsByCPT(100); // retrieve first 100 posts

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};
