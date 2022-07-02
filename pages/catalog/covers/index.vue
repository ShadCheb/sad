<template>
  <div>
    <div :class="$style.covers">
      <div :class="$style.coversContent">
        <div :class="$style.coversHeader">
          <div :class="$style.coversCaption">
            <h2>Trends summer 2020</h2>
          </div>
        </div>

        <div :class="$style.coversFilters">
          <div>

          </div>
          <div>
            
          </div>
        </div>

        <div :class="$style.coversBlocks">
          <div :class="$style.block">
            <div>
              <div :class="$style.blockImg">
                <img
                  v-lazy="require('~/assets/img/0429-03.png')"
                  alt="Название чехла 1"
                >
              </div>
              <div :class="$style.blockText">
                <h2 :class="$style.blockName">Название чехла 1</h2>
                <div :class="$style.footer">
                  <div :class="$style.footerPrice">
                    <p :class="$style.price">Р 390</p>
                  </div>
                  <div :class="$style.footerBtn">
                    <button
                      class="btn-3"
                      @click="onOpenDescription('idx')"
                    >Подробнее</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="$style.block">
            <div>
              <div :class="$style.blockImg">
                <img
                  v-lazy="require('~/assets/img/0429-03.png')"
                  alt="азвание чехла 1"
                >
              </div>
              <div :class="$style.blockText">
                <h2 :class="$style.blockName">Название чехла 1</h2>
                <div :class="$style.footer">
                  <div :class="$style.footerPrice">
                    <p :class="$style.price">Р 390</p>
                  </div>
                  <div :class="$style.footerBtn">
                    <button
                      class="btn-3"
                      @click="onOpenDescription('idx')"
                    >Подробнее</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="$style.block">
            <div>
              <div :class="$style.blockImg">
                <img
                  v-lazy="require('~/assets/img/0429-03.png')"
                  alt="азвание чехла 1"
                >
              </div>
              <div :class="$style.blockText">
                <h2 :class="$style.blockName">Название чехла 1</h2>
                <div :class="$style.footer">
                  <div :class="$style.footerPrice">
                    <p :class="$style.price">Р 390</p>
                  </div>
                  <div :class="$style.footerBtn">
                    <button
                      class="btn-3"
                      @click="onOpenDescription('idx')"
                    >Подробнее</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div :class="$style.block">
            <div>
              <div :class="$style.blockImg">
                <img
                  v-lazy="require('~/assets/img/0429-03.png')"
                  alt="азвание чехла 1"
                >
              </div>
              <div :class="$style.blockText">
                <h2 :class="$style.blockName">Название чехла 1</h2>
                <div :class="$style.footer">
                  <div :class="$style.footerPrice">
                    <p :class="$style.price">Р 390</p>
                  </div>
                  <div :class="$style.footerBtn">
                    <button
                      class="btn-3"
                      @click="onOpenDescription('idx')"
                    >Подробнее</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <a-modal
      v-model="isVisibleMDescription"
      title=""
      :footer="null"
      class="modal"
      :width="600"
    >
      <div :class="$style.cart">
        <div :class="$style.cartImg">
          <img
            v-lazy="require('~/assets/img/0429-03.png')"
            alt="азвание чехла 1"
          >
        </div>
        <div :class="$style.cartDescription">
          <div :class="$style.cartHeader">
            <p :class="$style.cartName">
              Название чехла 1
            </p>
            <p :class="$style.cartPrice">
              Р 390
            </p>
          </div>
          <div :class="$style.cartSelects">
            <div :class="$style.select">
              <p :class="$style.selectLabel">
                Модель
              </p>
              <!-- :default-value="defaultModel" -->
              <a-select
                show-search
                placeholder="Выберите модель"
                @change="onChangeModel"
              >
                <a-select-option
                  v-for="model in optionsModel"
                  :key="model.id"
                  :value="model.brief"
                >
                  {{ model.name }}
                </a-select-option>
              </a-select>
            </div>
            <div :class="$style.select">
              <p :class="$style.selectLabel">
                Материал
              </p>
              <!-- :default-value="defaultMaterial" -->
              <a-select
                placeholder="Выберите материал"
                @change="onChangeMaterial"
              >
                <a-select-option
                  v-for="material in optionsMaterial"
                  :key="material.id"
                  :value="material.brief"
                >
                  {{ material.name }}
                </a-select-option>
              </a-select>
            </div>
          </div>
          <div :class="$style.cartBtns">
            <button
              class="btn-3 btn-3_border"
              @click="onAddToCart"
            >
              Заказать
            </button>
            <button
              class="btn-3"
              @click="onAddToCart"
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  // components: {
  //   ModalDescription: () => import('../../../components/covers/ModalCart')
  // },
  data() {
    return {
      activeCase: '',
      isVisibleMDescription: false,

      optionsModel: [
        {
          id: 0,
          name: 'iPhone 5/5S/SE',
          brief: 'iphone5',
          addCost: 0,
        },
        {
          id: 1,
          name: 'iPhone 6/6S',
          brief: 'iphone6',
          addCost: 0,
        },
        {
          id: 2,
          name: 'iPhone 6 Plus/6S Plus',
          brief: 'iphone6plus',
          addCost: 0,
        },
        {
          id: 3,
          name: 'iPhone 7/8',
          brief: 'iphone7',
          addCost: 0,
        },
        {
          id: 4,
          name: 'iPhone 7 Plus/8 Plus',
          brief: 'iphone7plus',
          addCost: 0,
        },
        {
          id: 5,
          name: 'iPhone X/XS',
          brief: 'iphonex',
          addCost: 0,
        },
        {
          id: 6,
          name: 'iPhone XR',
          brief: 'iphonexr',
          addCost: 0,
        },
        {
          id: 7,
          name: 'iPhone XS Max',
          brief: 'iphonexsmax',
          addCost: 0,
        },
        {
          id: 8,
          name: 'iPhone 11',
          brief: 'iphone11',
          addCost: 0,
        },
        {
          id: 9,
          name: 'iPhone 11 Pro',
          brief: 'iphone11pro',
          addCost: 0,
        },
        {
          id: 10,
          name: 'iPhone 11 Pro Max',
          brief: 'iphone1promax',
          addCost: 0,
        },
      ],
      optionsMaterial:[
        {
          id: 0,
          name: 'Ультратонкий',
          brief: 'ultrathin',
          addCost: 0,
        },
        {
          id: 1,
          name: 'Противоударный',
          brief: 'shockproof',
          addCost: 100,
        },
      ],
      // defaultModel: 'iphone7',
      // defaultMaterial: 'shockproof',

      data: {
        material: '',
        model: ''
      }
    }
  },
  methods: {
    // onCloseDescription() {
    //   console.log('=============CLOSE');
    //   this.isVisibleMDescription = false;
    //   this.activeCase = '';
    // },
    onOpenDescription() {
      console.log('=============OPEN');
      this.activeCase = { test: 'isTest' };
      this.isVisibleMDescription = true;
    },
    onAddToCart(data) {
      console.log('addToCart', data);
    },
    onChangeModel(value) {
      console.log('changeModel', value);
    },
    onChangeMaterial(value) {
      console.log('changeMaterial', value);
    }
  }
}
</script>

<style lang="less" module>
  @import url(./style.less);
</style>
