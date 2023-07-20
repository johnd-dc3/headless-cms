import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/default.jpg";

export const PostBlock = ({ post, postType }: { post: any, postType: any }) => {
  const date = new Date(post.date);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const day = date.getDate();

  return (
    <li>
      <Link href={`/${postType}/${post.slug}`}>
        <div className="img">
          <Image
            src={post.featuredImage?.node.sourceUrl ?? defaultImage}
            width={350}
            height={350}
            alt={post.title}
            className="absolute rounded-md h-full w-full object-cover"
          />
        </div>
        <div className="txt">
          <h3 className="title">{post.title}</h3>
          <div className="date">
            <time>
              {year}年{month}月{day}日
            </time>
          </div>
        </div>
      </Link>
    </li>
  );
};
