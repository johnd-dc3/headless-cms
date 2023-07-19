import { PostBlock } from "@/components/PostBlock";
import { GetStaticProps } from "next";
import { getPosts } from "@/lib/posts";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts(100); // retrieve first 100 posts

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};



export default function BlogHome({ posts }: { posts: any }) {

  return (
    <>
      <h1 className="text-6xl text-center text-slate-100 relative z-10 py-8">BLOG</h1>
      <p className="relative z-10 text-center text-slate-200 text-2xl">Read our latest articles</p>
      <main>
        <section className="container mx-auto lg:max-w-5xl post-list mt-4">
          <ul>
            {posts.map((post: any) => {
              return <PostBlock key={post.slug} post={post} />;
            })}
          </ul>
        </section>
      </main>

    </>
  );
}