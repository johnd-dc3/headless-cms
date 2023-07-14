import Link from "next/link";
import Image from "next/image";

import defaultImage from "@/assets/images/default.jpg";

export const PostBlock = ({ post }: { post: any }) => {
  return (
    <li className="post-block p-2 rounded-md">
      <Link href={`/posts/${post.slug}`}>
        <div className="img relative h-80 transition-all duration-200 ease-linear hover:-translate-y-[3px]">
          <Image
            src={post.featuredImage?.node.sourceUrl ?? defaultImage}
            fill
            alt={post.title}
            className="absolute rounded-md h-full w-full object-cover"
          />
        </div>
      </Link>
      <Link href={`/posts/${post.slug}`} className="post-content my-4">
        <h3 className="title text-2xl py-4">{post.title}</h3>
        <div
          className="italic"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        ></div>
      </Link>
      <div className="date">
        <time>
{/* Insert datte as Y年m月d日 */}
        </time>
        </div>
    </li>
  );
};
