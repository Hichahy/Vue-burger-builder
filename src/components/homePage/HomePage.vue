<template>
  <div class="home-container">
    <section class="introduce-sec">
      <div class="content-introduce">
        <h1>Burger Builder Website</h1>
        <p>
          Welcome in Burger builder VUE application. Dream Burger is family
          company who care about all client! You decided what type of burger you
          eat today! Maybe you prefer fish burger with 4x extra fishes ? Create
          it! And we arrive to you your burger of Dreams!
        </p>
        <button @click="redirect" class="button-green">Create 🍔</button>
      </div>
      <img src="/images/food.svg" alt="food" />
    </section>
  </div>
</template>

<script>
import "./homePage.scss";

export default {
  methods: {
    redirect() {
      this.$router.push({ name: "BurgerPresentation" });
    },
  },
};
</script>
