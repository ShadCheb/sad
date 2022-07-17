import { VERSION_VK_API, ACCES_TOKEN, GROUP_ID, ENDPOINT } from '../config';

async function getDataFromDB(url) {
  return (await require('axios').get(url)).data;
}

async function list() {
  const topicId = 37810122;
  const count = 20;
  const url = `${ENDPOINT}board.getComments?group_id=${GROUP_ID}&topic_id=${topicId}&count=${count}&extended=1&sort=desc&access_token=${ACCES_TOKEN}&v=${VERSION_VK_API}`;

  const result = await getDataFromDB(url);

  return result;
}

export { list };
