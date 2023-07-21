import { fetchAPI } from "./base";

interface BnrArr {
  "sourceUrl": string;
  "altText": string;
  "link": string;
}

export default async function getBanners() {

  const data = await fetchAPI(
    `query Banners {
            pages(where: {title: "トップページ　リンクバナー編集"}) {
              nodes {
                topPageBanner {
                  bnr1 {
                    sourceUrl
                    altText
                  }
                  bnrLink1
                  bnr2 {
                    sourceUrl
                    altText
                  }
                  bnrLink2
                  bnr3 {
                    sourceUrl
                    altText
                  }
                  bnrLink3
                  bnr4 {
                    sourceUrl
                    altText
                  }
                  bnrLink4
                  bnr5 {
                    sourceUrl
                    altText
                  }
                  bnrLink5
                }
              }
            }
          }`,
    {
      variables: {},
    }
  );

  let rawObj = data.pages.nodes[0].topPageBanner;

  function sortByKey(object: object[]) {
    return object.sort((a, b) => {
      const keyA = Object.keys(a)[0];
      const keyB = Object.keys(b)[0];

      if (keyA < keyB) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  // Convert object into array of objects
  let rawArr = [];
  for (const item in rawObj) {
    rawArr.push({ [item]: rawObj[item] });
  }

  // Remove Link objects and push to seperate array
  let bnrArr = rawArr.filter(obj => {
    return !Object.keys(obj)[0].includes("Link");
  });

  bnrArr = sortByKey(bnrArr);

  const returnArr = [];


  for (const item of bnrArr) {
    let arr = {};
    const vals = Object.values(item)[0];

    returnArr.push(vals);
  }

  let linkArr = rawArr.filter(obj => {
    return Object.keys(obj)[0].includes("Link");
  });



  linkArr = sortByKey(linkArr);

  const links = linkArr.map(e => Object.values(e)[0]);

  const finalArray = [];
  for (let i = 0; i < returnArr.length; i++) {
    const finalObj = {
      "sourceUrl": returnArr[i].sourceUrl,
      "altText": returnArr[i].altText,
      "link": links[i]
    };
    finalArray.push(finalObj);
  }

  return finalArray;
}
