<template>
  <div class="ingredients-form-container">
    <h2>Choise your ingredients</h2>
    <h2>Price: {{ burgerPrice }}$</h2>
    <ul>
      <li
        :class="{ maxAmount: i.counter === 5 }"
        v-for="i in ingredientsProp"
        :key="i.id"
      >
        <p>{{ i.ingredient }}</p>
        <button @click="handleSubstractIngredient(i.id)">-</button>
        <span>{{ i.counter }}</span>
        <button @click="handleAddIngredient(i.id)">+</button>
      </li>
    </ul>
  </div>
</template>

<script>
import "./ingredientsForm.scss";

export default {
  props: ["ingredientsCollect", "ingredients"],
  data() {
    return {
      ingredientsCollectProp: this.ingredientsCollect,
      ingredientsProp: this.ingredients,
      burgerPrice: 0,
    };
  },
  methods: {
    handleSubstractIngredient(id) {
      const index = this.ingredientsProp.findIndex((el) => el.id === id);
      if (this.ingredientsProp[index].counter > 0) {
        this.ingredientsProp[index].counter--;
        this.burgerPrice = this.burgerPrice - this.ingredientsProp[index].price;
      }
      const indexIngredient = this.ingredientsCollectProp.indexOf(
        this.ingredientsProp[index].ingredientName
      );
      if (indexIngredient > -1) {
        this.ingredientsCollectProp.splice(indexIngredient, 1);
      }
    },
    handleAddIngredient(id) {
      const index = this.ingredientsProp.findIndex((el) => el.id === id);
      if (this.ingredientsProp[index].counter < 5) {
        this.ingredientsProp[index].counter++;
        this.ingredientsCollectProp.push(
          this.ingredientsProp[index].ingredientName
        );
        this.burgerPrice = this.ingredientsProp[index].price + this.burgerPrice;
      }
    },
  },
};
</script>
