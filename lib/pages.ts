import { fetchAPI } from "./base";

export async function getPageSlugs() {
  const data = await fetchAPI(
    `query getPageSlugs {
    pages {
      nodes { 
        slug
      }
    }
  }`);

  const slugs = data.pages.nodes;
  return slugs;
}

export async function getSinglePage(slug: string | string[] | undefined) {

  const data = await fetchAPI(
    `query getSinglePage {
      pages(where: {name: "${slug}"}) {
        nodes {
          content(format: RENDERED)
          date
          modified
          slug
          title(format: RENDERED)
        }
      }
    }`
  );

  const pageData = data.pages.nodes[0];
  return pageData;

}

