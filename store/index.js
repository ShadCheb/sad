const sampleSize = require('lodash.samplesize');

const sleep = m => new Promise(r => setTimeout(r, m));
const categories = [
  {
    id: 'cats',
    cTitle: 'Котики',
    cName: 'Котики',
    cSlug: 'cats',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/300x300/?cat,cats',
    products: []
  },
  {
    id: 'dogs',
    cTitle: 'Собачки',
    cName: 'Собачки',
    cSlug: 'dogs',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/300x300/?dog,dogs',
    products: []
  },
  {
    id: 'wolfs',
    cTitle: 'Волчки',
    cName: 'Волчки',
    cSlug: 'wolfs',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/300x300/?wolf',
    products: []
  },
  {
    id: 'bulls',
    cTitle: 'Бычки',
    cName: 'Бычки',
    cSlug: 'bulls',
    cMetaDescription: 'Мета описание',
    cDesc: 'Описание',
    cImage: 'https://source.unsplash.com/300x300/?bull',
    products: []
  }
];


function getProductsByIds (products, ids) {
  const innerProducts = products.filter(p => p.id === ids.find(id => p.id === id));
  if (!innerProducts) return null;
  return innerProducts.map(pr => {
    return {
      ...pr,
      category: categories.find(cat => cat.id === pr.category_id)
    }
  })
}

function addProductsToCategory (products, category) {
  const categoryInner = { ...category, products: [] };

  products.map(p => {
    if (p.category_id === category.id) {
      categoryInner.products.push({
        id: p.id,
        pName: p.pName,
        pSlug: p.pSlug,
        pPrice: p.pPrice,
        image: `https://source.unsplash.com/300x300/?${p.pName}`
      })
    }
  })

  return categoryInner;
}

function getProduct (products, productSlug) {
  const innerProduct = products.find(p => p.pSlug === productSlug);

  if (!innerProduct) return null;

  innerProduct.image = `https://source.unsplash.com/300x300/?${innerProduct.category_id}`

  return {
    ...innerProduct,
    // images: productsImages.find(img => img.id === innerProduct.id).urls,
    category: categories.find(cat => cat.id === innerProduct.category_id)
  }
}

function getBreadcrumbs (pageType, route, data) {
  const crumbs = []
  crumbs.push({
    title: 'Главная',
    url: '/'
  })
  switch (pageType) {
    case 'category':
      crumbs.push({
        title: data.cName,
        url: `/category/${data.cSlug}`
      })
      break
    case 'product':
      crumbs.push({
        title: data.category.cName,
        url: `/category/${data.category.cSlug}`
      })
      crumbs.push({
        title: data.pName,
        url: `/product/${data.pSlug}`
      })

      break

    default:
      break
  }
  return crumbs
}

export const state = () => ({
  categoriesList: [],
  currentCategory: {},
  currentProduct: {
    alsoBuyProducts: [],
    interestingProducts: [],
  },
  bredcrumbs: []
})
export const mutations = {
  SET_CATEGORIES_LIST (state, categories) {
    state.categoriesList = categories;
  },
  SET_CURRENT_CATEGORY (state, category) {
    state.currentCategory = category;
  },
  SET_CURRENT_PRODUCT (state, product) {
    state.currentProduct = product
  },
  SET_BREADCRUMBS (state, crumbs) {
    state.bredcrumbs = crumbs
  },
  RESET_BREADCRUMBS (state) {
    state.bredcrumbs = []
  },
  GET_PRODUCTS_BY_IDS () {},
}
export const actions = {
  async getProductsListByIds ({ commit }) {
    const products = await this.$axios.$get('/mock/products.json');
    commit('GET_PRODUCTS_BY_IDS');
    const idsArray = (sampleSize(products, 5)).map(p => p.id)
    return getProductsByIds(products, idsArray)
  },
  async setBreadcrumbs ({ commit }, data) {
    await commit('SET_BREADCRUMBS', data)
  },
  async getCategoriesList ({ commit }) {
    try {
      await sleep(300);
      await commit('SET_CATEGORIES_LIST', categories);
    } catch (err) {
      console.error(err);
      throw new Error('Внутреняя ошибка сервера, сообщите администратору');
    }
  },
  async getCurrentCategory ({ commit, dispatch }, { route }) {
    const category = categories.find((cat) => cat.cSlug === route.params.CategorySlug);
    const products = await this.$axios.$get('/mock/products.json');
    const crubms = getBreadcrumbs('category', route, category);

    await sleep(300);    
    await dispatch('setBreadcrumbs', crubms);
    await commit('SET_CURRENT_CATEGORY', addProductsToCategory(products, category));
  },
  async getCurrentProduct ({ commit, dispatch }, { route }) {
    const productSlug = route.params.ProductSlug;
    const [products, alsoBuyProducts, interestingProducts] = await Promise.all(
      [
        this.$axios.$get('/mock/products.json'),
        dispatch('getProductsListByIds'),
        dispatch('getProductsListByIds')
      ]
    );
    const product = getProduct(products, productSlug);

    console.log('product', product);
    const crubms = getBreadcrumbs('product', route, product);

    await sleep(300);
    await dispatch('setBreadcrumbs', crubms);
    await commit('SET_CURRENT_PRODUCT', { ...product, alsoBuyProducts, interestingProducts });
  },
}
