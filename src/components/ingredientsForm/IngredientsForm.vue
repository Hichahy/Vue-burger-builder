<template>
  <div class="ingredients-form-container">
    <h2>Choise your ingredients</h2>
    <h2>Price: {{ burgerPrice }}$</h2>
    <ul>
      <li
        :class="{ maxAmount: i.counter === 5 }"
        v-for="i in ingredients"
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
  props: ["ingredientsCollect"],
  data() {
    return {
      ingredientsCollectProp: this.ingredientsCollect,
      burgerPrice: 0,
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
    handleSubstractIngredient(id) {
      const index = this.ingredients.findIndex((el) => el.id === id);
      if (this.ingredients[index].counter > 0) {
        this.ingredients[index].counter--;
        this.burgerPrice = this.burgerPrice - this.ingredients[index].price;
      }
      const indexIngredient = this.ingredientsCollectProp.indexOf(
        this.ingredients[index].ingredientName
      );
      if (indexIngredient > -1) {
        this.ingredientsCollectProp.splice(indexIngredient, 1);
      }
    },
    handleAddIngredient(id) {
      const index = this.ingredients.findIndex((el) => el.id === id);
      if (this.ingredients[index].counter < 5) {
        this.ingredients[index].counter++;
        this.ingredientsCollectProp.push(
          this.ingredients[index].ingredientName
        );
        this.burgerPrice = this.ingredients[index].price + this.burgerPrice;
      }
    },
  },
};
</script>
