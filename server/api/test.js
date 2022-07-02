const axios = require('axios');


// "access_token": "e372f49ffd253388200d99c78dfd0e4e794a1e51"
const accessToken = 'e372f49ffd253388200d99c78dfd0e4e794a1e51';
const urlapi = 'https://online.moysklad.ru/api/remap/1.2/entity';

async function getPriceList() {
  const uri = `${urlapi}/product`;

  console.log('=============URI', uri);
  return await axios.get( 
    uri,
    {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }
  )
}

async function priceList() {
  try {
    const res = await getPriceList();
    return { success: 1, data: res.data }
  } catch (err) {
    return { success: 0, error: 'Ошибка priceList.', err } 
  }
}

export { priceList };



// /variant/metadata
// https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata/characteristics/cfd96680-b9fa-11ea-0a80-0749002363c5
/*
  прозрачный, размер, универсальная, мультяшки, fashion, sandy, с попсокетом, print
  meta: {
    href: 'https://online.moysklad.ru/api/remap/1.2/entity/variant/metadata',
    mediaType: 'application/json'
  },
  characteristics: [
    ...
    {
      meta: [Object],
      id: 'cc73acd7-bb97-11ea-0a80-09d20008524c',
      name: 'голограмма',
      type: 'string',
      required: false
    },
    ...
  ]
*/

// /productfolder
// Список групп
// Запрос на получение отдельной группы товаров с указанным id.
// "https://online.moysklad.ru/api/remap/1.2/entity/productfolder/7944ef04-f831-11e5-7a69-971500188b19"
/*
  {
      meta: [Object],
      id: '9f1dd6d3-d0d7-11ea-0a80-006d000c5d84',
      accountId: '3c6501b6-ac90-11ea-0a80-090d000064fd',
      owner: [Object],
      shared: true,
      group: [Object],
      updated: '2020-07-28 16:38:29.434',
      name: 'Usb 3.0',
      externalCode: 'mcAQ3C90g4yM0Awp6EZc91',
      archived: false,
      pathName: 'Группа/Карты памяти',
      productFolder: [Object]
    },
    {
      meta: [Object],
      id: '9fc47cd7-dc9e-11ea-0a80-03ea000b5d3b',
      accountId: '3c6501b6-ac90-11ea-0a80-090d000064fd',
      owner: [Object],
      shared: true,
      group: [Object],
      updated: '2020-08-13 08:36:51.250',
      name: 'iPhone XR',
      externalCode: 'miXJJGJLgXe86ZZayAK812',
      archived: false,
      pathName: 'Чехлы/Накладки/iPhone',
      productFolder: [Object]
    },
    {
      meta: [Object],
      id: '9fd76f28-dc9e-11ea-0a80-03ea000b5d54',
      accountId: '3c6501b6-ac90-11ea-0a80-090d000064fd',
      owner: [Object],
      shared: true,
      group: [Object],
      updated: '2020-08-13 08:36:34.964',
      name: 'iPhone XS Max',
      externalCode: '9Uwv1S-qiwnmcIIbebogO0',
      archived: false,
      pathName: 'Чехлы/Накладки/iPhone',
      productFolder: [Object]
    },
    {
      meta: [Object],
      id: 'a0919cd6-b575-11ea-0a80-012c000f46a6',
      accountId: '3c6501b6-ac90-11ea-0a80-090d000064fd',
      owner: [Object],
      shared: true,
      group: [Object],
      updated: '2021-01-29 10:17:02.956',
      name: 'Тренды',
      externalCode: '8DfFP6dchwSMMDW88E5OL1',
      archived: false,
      pathName: 'Группа',
      productFolder: [Object]
    },
*/

// /assortment
// Список асортимента
/*

*/

// /product
// Список товаров Очень много (max 1000)
/*
{
      meta: [Object],
      id: '05111bca-6b94-11eb-0a80-02e9000c107c',
      accountId: '3c6501b6-ac90-11ea-0a80-090d000064fd',
      owner: [Object],
      shared: true,
      group: [Object],
      updated: '2021-02-10 14:35:04.901',
      name: 'Закаленное стекло iPhone XS Max /11 Pro Max Remax GL-53 Антишпион черный',
      code: '14044',
      externalCode: 'qp5dljCCjHulX6bs5IXQH3',
      archived: false,
      pathName: 'Защита экрана/Закаленные стекла/2D стекла',
      productFolder: [Object],
      uom: [Object],
      images: [Object],
      minPrice: [Object],
      salePrices: [Array],
      buyPrice: [Object],
      barcodes: [Array],
      paymentItemType: 'GOOD',
      discountProhibited: false,
      weight: 0,
      volume: 0,
      variantsCount: 0,
      isSerialTrackable: false,
      trackingType: 'NOT_TRACKED',
      files: [Object]
    },
*/
