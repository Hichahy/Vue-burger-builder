<template>
  <div class="burger-pre-containter">
    <div class="title-pre">
      <h2>Your crazy burger</h2>
      <ToggleBtn :blackBun="blackBun" @onToggle="toggle" />
    </div>
    <div class="ingredients-box">
      <div :class="`${blackBun ? 'black-bun-up' : 'bun-up '}`">
        <div class="seeds"></div>
        <div class="seeds2"></div>
      </div>
      <div
        v-for="i in ingredientsCollect"
        :key="i"
        :class="`${blackBun && i === 'bun-center' ? 'bun-center-black' : i}`"
      ></div>
      <div :class="`${blackBun ? 'bun-bottom-black' : 'bun-bottom '}`"></div>
    </div>
  </div>
  <IngredientsForm
    :ingredientsCollect="ingredientsCollect"
    :ingredients="ingredients"
  />
  <div class="order-btn-box">
    <button class="button-green" id="show-modal" @click="showModal = true">
      Order Now!
    </button>
  </div>
  <ModalSummary
    v-if="showModal"
    @close-modal="showModal = false"
    :blackBun="blackBun"
    :ingredients="ingredients"
  />
</template>

<script>
import IngredientsForm from "../ingredientsForm/IngredientsForm.vue";
import ToggleBtn from "../layout/toggleBtn/ToggleBtn.vue";
import ModalSummary from "../modalSummary/ModalSummary.vue";
import "./burgerPresentation.scss";

export default {
  components: {
    IngredientsForm,
    ToggleBtn,
    ModalSummary,
  },
  data() {
    return {
      ingredientsCollect: [],
      blackBun: false,
      showModal: false,
      ingredients: [
        {
          id: 0,
          ingredient: "🥩",
          ingredientName: "meat",
          counter: 0,
          price: 10,
        },
        {
          id: 1,
          ingredient: "🧀",
          ingredientName: "cheese",
          counter: 0,
          price: 3,
        },
        {
          id: 2,
          ingredient: "🥬",
          ingredientName: "salad",
          counter: 0,
          price: 1,
        },
        {
          id: 3,
          ingredient: "🥯",
          ingredientName: "bun-center",
          counter: 0,
          price: 3,
        },
        {
          id: 4,
          ingredient: "🥓",
          ingredientName: "bacon",
          counter: 0,
          price: 7,
        },
        {
          id: 5,
          ingredient: "🐟",
          ingredientName: "fish",
          counter: 0,
          price: 12,
        },
        {
          id: 6,
          ingredient: "🍅",
          ingredientName: "tomato",
          counter: 0,
          price: 2,
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.blackBun = !this.blackBun;
    },
  },
};
</script>
