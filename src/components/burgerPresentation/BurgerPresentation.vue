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
  <IngredientsForm :ingredientsCollect="ingredientsCollect" />
</template>

<script>
import IngredientsForm from "../ingredientsForm/IngredientsForm.vue";
import ToggleBtn from "../layout/toggleBtn/ToggleBtn.vue";
import "./burgerPresentation.scss";

export default {
  components: {
    IngredientsForm,
    ToggleBtn,
  },
  data() {
    return {
      ingredientsCollect: [],
      blackBun: false,
    };
  },
  methods: {
    toggle() {
      this.blackBun = !this.blackBun;
    },
  },
};
</script>
