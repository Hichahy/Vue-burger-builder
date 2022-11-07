<template>
  <div class="overlay" @click="$emit('close-modal')"></div>
  <div class="modal" :class="{ hideSummaryCard: hideSummaryCard }">
    <i class="bi bi-x-circle-fill" @click="$emit('close-modal')"></i>
    <div v-if="burgerPriceAcumulator > 0" class="summary-content">
      <h3>Looks delicious. Check your order 🍔</h3>
      <h4>🥯 Burger bun: {{ `${blackBun ? "black" : "white"}` }}</h4>
      <ul>
        <li
          v-for="i in ingredientstProp.filter((i) => i.counter > 0)"
          :key="i.id"
        >
          <p>{{ i.ingredient }} x{{ i.counter }}</p>
        </li>
      </ul>
      <h4>Price: {{ burgerPriceAcumulator }}$</h4>
      <button class="button-green" @click="hideSummaryCard = true">Next</button>
    </div>
    <div v-if="burgerPriceAcumulator === 0" class="empty-basket">
      <p>Your burger is empty. Select the ingredients first 🍔</p>
      <img src="/images/basket.svg" alt="burger" />
    </div>
  </div>
  <ModalForm
    v-if="hideSummaryCard"
    :hideSummaryCard="hideSummaryCard"
    @close-modal="$emit('close-modal')"
  />
</template>

<script>
import ModalForm from "../modalForm/ModalForm.vue";
import "./modalSummary.scss";

export default {
  emits: ["close-modal"],
  props: ["ingredients", "blackBun"],
  components: {
    ModalForm,
  },
  data() {
    return {
      ingredientstProp: this.ingredients,
      blackBunProp: this.blackBun,
      hideSummaryCard: false,
    };
  },
  computed: {
    burgerPriceAcumulator() {
      const price = this.ingredientstProp.map((i) => i.price * i.counter);
      const initialValue = 0;
      return price.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
    },
  },
};
</script>
