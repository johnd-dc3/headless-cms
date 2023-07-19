

import { GetStaticProps } from "next";
import Link from "next/link";

import { PostBlock } from "@/components/PostBlock";
import { getPostsByCPT } from "@/lib/service";

export default function HomePage({ posts }: { posts: any }) {
  console.log(posts);
  return (
    <>
      <section className="news">
        <div className="inner">
          <h2>
            <span className="icon"><i className="far fa-file-alt"></i></span>
            <span className="en">News</span>
            <span className="ja">お知らせ画像あり</span>
          </h2>

          <ul className="nonstyle ul_flex">
            {posts.map((post: any) => {
              return <PostBlock key={post.slug} post={post} />;
            })}
          </ul>
          <div className="btn_wrap">
            <Link className="btn_link" href="/news/">一覧へ</Link>
          </div>
        </div>
      </section>
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getPosts(100); // retrieve first 100 posts

//   return {
//     props: {
//       posts,
//     },
//     revalidate: 3600,
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsByCPT(3); // retrieve first 3 posts

  return {
    props: {
      posts,
    },
    revalidate: 3600,
  };
};