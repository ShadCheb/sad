<template>
  <a-modal
    v-model="visible"
    title=""
    :footer="null"
    class="modal"
    :width="width"
    @cancel="onClose"
  >
    <div v-if="products" :class="$style.catalogModal">
      <div :class="$style.cartData">
        <div :class="$style.cartRow">
          <div :class="$style.cartInput">
            <a-input
              v-model="phone"
              :max-length="25"
              placeholder="Номер телефона"
              @change="changeInput"
            />
          </div>
        </div>
        <div :class="$style.cartRow">
          <a-radio-group v-model="delivery" button-style="solid">
            <a-radio-button value="delivery">
              Доставка
            </a-radio-button>
            <a-radio-button value="pickup">
              Самовывоз
            </a-radio-button>
          </a-radio-group>
        </div>
        <div :class="$style.cartRow">
          <a-input
            v-if="delivery === 'delivery'"
            v-model="addressDelivery"
            :max-length="200"
            placeholder="Адрес доставки"
          />
          <a-radio-group v-if="delivery === 'pickup'" v-model="addressPickup">
            <a-radio :style="{display: 'flex', alignItems: 'center', marginBottom: '5px'}" value="nursery">
              ул. Еловая, д. 3, Питомник "Ванюшкин Сад"
            </a-radio>
            <a-radio :style="{display: 'flex', alignItems: 'center'}" value="market">
              ул. Юрия Гагарина, д. 1 к. 1, Центральный рынок
            </a-radio>
          </a-radio-group>
        </div>
      </div>
      <div :class="$style.cartHeader">
        <div :class="$style.cartName">Наименование</div>
        <div :class="$style.cartCount">Количество</div>
      </div>
      <div v-for="item in products" :key="item.id" :class="$style.cartRow">
        <div :class="$style.cartName" v-if="item.product">
          {{ item.product.title }}
        </div>
        <div :class="$style.cartCount">
          <a href="" @click.prevent="increaseQuantity(item)">-</a>
          <p>{{ item.qty }}</p>
          <a href="" @click.prevent="reduceQuantity(item)">+</a>
          <a
            :class="$style.cartCountRemove"
            href=""
            @click.prevent="remove(item.product)"
            >x</a
          >
        </div>
      </div>
      <button @click="onOrder" :class="['btn-2', $style.cartButton]">
        Заказать
      </button>
    </div>
  </a-modal>
</template>

<script>
import { notification } from 'ant-design-vue';
import { mapActions, mapState } from 'vuex';

const WIDTH = 960;

export default {
  name: 'CartModal',
  data() {
    return {
      width: WIDTH,
      phone: '',
      addressDelivery: '',
      addressPickup: 'nursery',
      delivery: 'pickup',
      addresses: {
        nursery: 'ул. Еловая, д. 3, Питомник "Ванюшкин Сад"',
        market: 'ул. Юрия Гагарина, д. 1 к. 1, Центральный рынок'
      }
    };
  },
  computed: {
    ...mapState({
      visible: (state) => state.cart.visible,
      products: (state) => state.cart.products,
      success: (state) => state.cart.success,
      error: (state) => state.cart.error,
    }),
  },
  watch: {
    // эта функция запускается при любом изменении вопроса
    success(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        notification.open({
          message: 'Заказ успешно оформлен',
          description:
            'Ваш заказ оформлен, в ближайшее время с вами свяжется менеджер для его подтверждения.',
        });
      }
    },
    error(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        notification.open({
          message: 'Ошибка',
          description: newValue,
        });
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('resize', this.getDimensions);
  },

  methods: {
    ...mapActions({
      order: 'cart/order',
      removeProduct: 'cart/removeProduct',
      setProductQuantity: 'cart/setProductQuantity',
      changeVisibleMenu: 'cart/changeVisibleMenu',
    }),
    onOrder() {
      if (!this.phone || !this.products.length || (this.delivery === 'delivery' && !this.addressDelivery)) {
        notification.open({
          message: 'Ошибка',
          description:
            'Заполнены не все поля. Введите номер телефона и выберите необходимую продукцию',
        });

        return;
      }

      this.order({
        phone: this.phone,
        delivery: this.delivery,
        address: this.delivery === 'delivery' ? this.addressDelivery : this.addresses[this.addressPickup]
      });
      this.changeVisibleMenu();
      this.phone = '';
    },

    getDimensions() {
      const width = document.documentElement.clientWidth;

      this.width = width >= 960 ? WIDTH : '100%';
    },
    onClose() {
      this.changeVisibleMenu();
    },
    increaseQuantity(item) {
      const currentQty = item.qty - 1;

      if (currentQty <= 0) return;
      this.setProductQuantity({ productId: item.product.id, qty: currentQty });
    },
    reduceQuantity(item) {
      const currentQty = item.qty + 1;

      if (currentQty > 50) return;
      this.setProductQuantity({ productId: item.product.id, qty: currentQty });
    },
    remove(product) {
      this.removeProduct(product.id);
    },

    changeInput() {
      const numbers = this.phone.match(/\d/g).join('');

      this.phone = numbers;
    },
  },
};
</script>

<style lang="less" module>
@import url('./CartModal.less');
</style>
