import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";

import { PostBlock } from "@/components/PostBlock";
import { getPostsByCPT } from "@/lib/posts";
import getBanners from "@/lib/banners";

export default function HomePage({ posts, banners }: { posts: any, banners: any }) {
  const postType = "news";
  console.log(banners);

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
              return <PostBlock key={post.slug} post={post} postType={postType} />;
            })}
          </ul>
          <div className="btn_wrap">
            <Link className="btn_link" href="/news/">一覧へ</Link>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="inner">
          <h2>
            <span className="icon"><i className="far fa-file-alt"></i></span>
            <span className="en">News</span>
            <span className="ja">お知らせ画像なし</span>
          </h2>
          <ul className="nonstyle ul_newstxt">
            {posts.map((post: any) => {
              const date = new Date(post.date);
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
              const day = date.getDate();
              return (
                <li key={post.id}>
                  <Link href={`/news/${post.slug}`}>
                    <div className="date"><time>{year}年{month}月{day}日</time></div>
                    <div className="title">{post.title}</div>
                  </Link>
                </li>
              );

            })}
          </ul>
          <div className="btn_wrap">
            <a href="<?php echo esc_url( home_url( '/news/' ) ); ?>" className="btn_link">一覧へ</a>
          </div>
        </div>
      </section>

      <section className="bnr bg">
        <div className="inner">
          <ul className="nonstyle">
            {banners.map((banner: any) => {

              const key = Math.random();

              return (
                <li key={key}>
                  <Link href={banner.link} target="_blank">
                    <Image
                      src={banner.sourceUrl}
                      width={350}
                      height={350}
                      alt={banner.altText}>
                    </Image>
                  </Link>
                </li>

              );
            })}

          </ul>
        </div>
      </section>
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsByCPT(3); // retrieve first 3 posts
  const banners = await getBanners(); // retrieve banners

  return {
    props: {
      posts,
      banners,
    },
    revalidate: 3600,
  };
};