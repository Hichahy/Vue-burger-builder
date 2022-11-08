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
      const { ingredientsProp, burgerPrice, ingredientsCollectProp } = this;
      const index = ingredientsProp.findIndex((el) => el.id === id);
      if (ingredientsProp[index].counter > 0) {
        ingredientsProp[index].counter--;
        this.burgerPrice = burgerPrice - ingredientsProp[index].price;
      }
      const indexIngredient = ingredientsCollectProp.indexOf(
        ingredientsProp[index].ingredientName
      );
      if (indexIngredient > -1) {
        ingredientsCollectProp.splice(indexIngredient, 1);
      }
    },
    handleAddIngredient(id) {
      const { ingredientsProp, burgerPrice, ingredientsCollectProp } = this;
      const index = ingredientsProp.findIndex((el) => el.id === id);
      if (ingredientsProp[index].counter < 5) {
        ingredientsProp[index].counter++;
        ingredientsCollectProp.push(ingredientsProp[index].ingredientName);
        this.burgerPrice = ingredientsProp[index].price + burgerPrice;
      }
    },
  },
};
</script>
