<template>
  <div class="ingradients-form-container">
    <h2>Choise your ingradients</h2>
    <h2>Price: {{ burgerPrice }}$</h2>
    <ul>
      <li
        :class="{ maxAmount: i.counter === 5 }"
        v-for="i in ingradients"
        :key="i.id"
      >
        <p>{{ i.ingradient }}</p>
        <button @click="handleSubstractIngradient(i.id)">-</button>
        <span>{{ i.counter }}</span>
        <button @click="handleAddIngradient(i.id)">+</button>
      </li>
    </ul>
  </div>
</template>

<script>
import "./ingradientsForm.scss";

export default {
  props: ["ingradientsCollect"],
  data() {
    return {
      ingradientsCollectProp: this.ingradientsCollect,
      burgerPrice: 0,
      ingradients: [
        {
          id: 0,
          ingradient: "🥩",
          ingradientName: "meat",
          counter: 0,
          price: 10,
        },
        {
          id: 1,
          ingradient: "🧀",
          ingradientName: "cheese",
          counter: 0,
          price: 3,
        },
        {
          id: 2,
          ingradient: "🥬",
          ingradientName: "salad",
          counter: 0,
          price: 1,
        },
        {
          id: 3,
          ingradient: "🥯",
          ingradientName: "roll-center",
          counter: 0,
          price: 3,
        },
        {
          id: 4,
          ingradient: "🥓",
          ingradientName: "bacon",
          counter: 0,
          price: 7,
        },
        {
          id: 5,
          ingradient: "🐟",
          ingradientName: "fish",
          counter: 0,
          price: 12,
        },
      ],
    };
  },
  methods: {
    handleSubstractIngradient(id) {
      const index = this.ingradients.findIndex((el) => el.id === id);
      if (this.ingradients[index].counter > 0) {
        this.ingradients[index].counter--;
        this.burgerPrice = this.burgerPrice - this.ingradients[index].price;
      }
      const indexIngradient = this.ingradientsCollectProp.indexOf(
        this.ingradients[index].ingradientName
      );
      if (indexIngradient > -1) {
        this.ingradientsCollectProp.splice(indexIngradient, 1);
      }
    },
    handleAddIngradient(id) {
      const index = this.ingradients.findIndex((el) => el.id === id);
      if (this.ingradients[index].counter < 5) {
        this.ingradients[index].counter++;
        this.ingradientsCollectProp.push(
          this.ingradients[index].ingradientName
        );
        this.burgerPrice = this.ingradients[index].price + this.burgerPrice;
      }
    },
  },
};
</script>
