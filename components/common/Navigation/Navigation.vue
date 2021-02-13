<template>
  <div :class="$style.navigation">
    <div :class="$style.navigationContainer">
      <div :class="$style.navigationBlock">
        <ul :class="$style.navigationList">
          <li
            v-for="item in list"
            :key="item.id"
          >
            <n-link
              :to="item.url"
            >
              {{ item.title }}
            </n-link>
          </li>
        </ul>
        <div :class="$style.navigationRight">
          <!-- class="nav-search" -->
          <div
            :class="[{ active: searchText }, `nav-search` ]"
          >
            <a-auto-complete
              v-model="searchText"
              class="nav-search__compite"
              option-label-prop="value"
              @focus="onFocusSearch"
              @blur="onBlurSearch"
            >
              <a-input>
                <a-icon
                  slot="suffix"
                  type="search"
                  class="certain-category-icon"
                />
              </a-input>
            </a-auto-complete>
          </div>

          <div
            :class="[$style.cart, 'cart-icon' ]"
          >
            <div
              v-if="numFilterOfGoods"
              :class="$style.cartNum"
            >
              {{ numFilterOfGoods }}
            </div>
            <a-tooltip
              placement="bottomRight"
              overlay-class-name="tooltip"
            >
              <template slot="title">
                <div :class="$style.cartlistList">
                  <div :class="$style.cartlistItem">
                    <div :class="$style.cartlistImg">
                      <img
                        v-lazy="require('~/assets/img/0429-03.png')"
                        alt="Название чехла 1"
                      >
                    </div>
                    <div :class="$style.cartlistDescription">
                      <p :class="$style.cartlistName">
                        Название чехла 1
                      </p>
                      <div :class="$style.cartlistCharacteristics">
                        <p :class="$style.cartlistCount">
                          iPhone 11 Pro Max
                        </p>
                        <p :class="$style.cartlistCount">
                          Противоударный
                        </p>
                        <p :class="$style.cartlistCount">
                          1 шт.
                        </p>
                      </div>
                      <div :class="$style.cartlistItemFooter">
                        <p :class="$style.cartlistPrice">
                          Р 390
                        </p>
                      </div>
                      <a :class="$style.cartlistDel">
                        <a-icon
                          slot="suffix"
                          type="delete"
                        />
                      </a>
                    </div>
                  </div>
                  <div :class="$style.cartlistItem">
                    <div :class="$style.cartlistImg">
                      <img
                        v-lazy="require('~/assets/img/0429-03.png')"
                        alt="Название чехла 1"
                      >
                    </div>
                    <div :class="$style.cartlistDescription">
                      <p :class="$style.cartlistName">
                        Название чехла 1
                      </p>
                      <div :class="$style.cartlistCharacteristics">
                        <p :class="$style.cartlistCount">
                          iPhone 11 Pro Max
                        </p>
                        <p :class="$style.cartlistCount">
                          Противоударный
                        </p>
                        <p :class="$style.cartlistCount">
                          1 шт.
                        </p>
                      </div>
                      <div :class="$style.cartlistItemFooter">
                        <p :class="$style.cartlistPrice">
                          Р 390
                        </p>
                      </div>
                      <a :class="$style.cartlistDel">
                        <a-icon
                          slot="suffix"
                          type="delete"
                        />
                      </a>
                    </div>
                  </div>
                  <div :class="$style.cartlistItem">
                    <div :class="$style.cartlistImg">
                      <img
                        v-lazy="require('~/assets/img/0429-03.png')"
                        alt="Название чехла 1"
                      >
                    </div>
                    <div :class="$style.cartlistDescription">
                      <p :class="$style.cartlistName">
                        Название чехла 1
                      </p>
                      <div :class="$style.cartlistCharacteristics">
                        <p :class="$style.cartlistCount">
                          iPhone 11 Pro Max
                        </p>
                        <p :class="$style.cartlistCount">
                          Противоударный
                        </p>
                        <p :class="$style.cartlistCount">
                          1 шт.
                        </p>
                      </div>
                      <div :class="$style.cartlistItemFooter">
                        <p :class="$style.cartlistPrice">
                          Р 390
                        </p>
                      </div>
                      <a :class="$style.cartlistDel">
                        <a-icon
                          slot="suffix"
                          type="delete"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div :class="$style.cartlistTotal">
                  <p :class="$style.cartlistTotalText">Итого</p>
                  <p :class="$style.cartlistTotalValue">Р 320</p>
                </div>
                <div :class="$style.cartlistBtn">
                  <n-link
                    to="/cart"
                    class="btn-4"
                  >
                    Заказать
                  </n-link>
                </div>
              </template>
              <svg>
                <use href="~/assets/svg/sprite.svg#cart" />
              </svg>
            </a-tooltip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigation: '',
      list: [
        {
          id: 0,
          url: '#0',
          title: 'О нас',
          type: 'about',
        },
        {
          id: 1,
          url: '/catalog',
          title: 'Каталог',
          type: 'catalog',
        },
        {
          id: 2,
          url: '#0',
          title: 'Промо-акции',
          type: 'stock',
        },
        {
          id: 3,
          url: '#0',
          title: 'Вопрос-ответ',
          type: 'question',
        },
        {
          id: 4,
          url: '#0',
          title: 'Вакансии',
          type: 'vacancy',
        },
      ],

      searchText: '',

      numberOfGoods: 3,
    }
  },
  computed: {
    numFilterOfGoods() {
      return this.numberOfGoods > 9
        ? '>9'
        : '' + this.numberOfGoods
    }
  },
  methods: {
    onFocusSearch() {
      if (!this.searchText) {
        this.searchText = ' ';
      }
    },
    onBlurSearch() {
      if (this.searchText === ' ') {
        this.searchText = '';
      }
    },
  }
}
</script>

<style lang="less" module>
  @import url('./Navigation.less');
</style>
