<template>
  <div class="app">
    <NavigationBar />
    <BurgerPresentation />
  </div>
</template>

<script>
import NavigationBar from "./components/navigationBar/NavigationBar.vue";
import BurgerPresentation from "./components/burgerPresentation/BurgerPresentation.vue";
import "./app.scss";
export default {
  name: "App",
  components: {
    NavigationBar,
    BurgerPresentation,
  },
};
</script>
