<template>
  <a-modal
    v-model="visible"
    title=""
    :footer="null"
  >
    <div>
      <div>
        <div>
          <a-select
            show-search
            :default-value="defaultModel"
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
        <div>
          <a-select
            :default-value="defaultMaterial"
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
        <div>
          <button
            class="btn-3"
            @click="onAddToCart"
          >В корзину</button>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script>
export default {
  props: ['case'],
  data() {
    return {
      activeCase: '',

      visible: false,
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
      defaultModel: 'iphone7',
      defaultMaterial: 'shockproof',

      data: {
        material: '',
        model: ''
      }
    }
  },
  created() {
    this.visible
  },
  methods: {
    onCloseDescription() {
      console.log('=============CLOSE');
      this.isVisibleMDescription = false;
      this.activeCase = '';
    },
    onOpenDescription() {
      console.log('=============OPEN');
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
