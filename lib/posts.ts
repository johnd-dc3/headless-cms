import { fetchAPI } from "./base";

export async function getPosts(first = 10) {

  const data = await fetchAPI(
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            id
            title
            slug
            date
          }
        }
      }`,
    {
      variables: {
        first,
      },
    }
  );

  return data?.posts?.nodes;
}

export async function getPostsByCPT(first = 10) {

  const data = await fetchAPI(
    `query GetNewsPosts($first: Int = 10) {
      newsPlural(first: $first) {
        nodes {
          id
          title
          slug
          date
        }
      }
    }`,
    {
      variables: {
        first,
      },
    }
  );

  return data?.newsPlural?.nodes;
}

export async function getCustomPostBySlug(slug: string) {

  const data = await fetchAPI(
    `query GetNewsPost($id: ID = "") {
      newsSingular(id: $id, idType: SLUG) {
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        title
      }
    }`,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data?.newsSingular;
}


export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") { 
      post(id: $id, idType: SLUG) {
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        title
      }
    }`,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data?.post;
}