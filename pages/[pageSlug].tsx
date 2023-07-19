import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";

import { getPageSlugs, getSinglePage } from "../lib/pages";

export default function Page({ pageData }) {

  return (
    <>
      <section className="content-area py-8">
        <article>
          <h1 className="text-6xl text-center text-slate-700 relative py-8">
            {pageData.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="post-content container mx-auto lg:max-w-4xl" />
        </article>
      </section>
    </>

  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pageSlugs = await getPageSlugs();

  return {
    paths: pageSlugs.map((s) => (
      {
        params: {
          pageSlug: s.slug
        }
      }
    )),
    fallback: false,
  };

};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageData = await getSinglePage(params.pageSlug);

  return {
    props: {
      pageData,
    }
  };

};