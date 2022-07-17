import { VERSION_VK_API, ACCES_TOKEN_VK, GROUP_ID, ENDPOINT } from '../config';

async function getDataFromDB(url) {
  return (await require('axios').get(url)).data;
}

async function category() {
  const count = 30;
  const offset = 0;
  const url = `${ENDPOINT}market.getAlbums?owner_id=-${GROUP_ID}&offset=${offset}&count=${count}&access_token=${ACCES_TOKEN_VK}&v=${VERSION_VK_API}`;

  const result = await getDataFromDB(url);

  return result;
}

async function products(props = {}) {
  const { id } = props;
  const count = 100;
  const offset = 0;
  const url = `${ENDPOINT}market.get?owner_id=-${GROUP_ID}&album_id=${id}&count=${count}&offset=${offset}&access_token=${ACCES_TOKEN_VK}&v=${VERSION_VK_API}`;

  const result = await getDataFromDB(url);

  return result;
}

// async function product({ id }) {
//   const result = `${ENDPOINT}market.getById?item_ids=${id}&access_token=${ACCES_TOKEN_VK}&v=${VERSION_VK_API}`;

//   return result;
// }

export { category, products };
