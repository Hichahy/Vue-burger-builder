<template>
  <div class="app">
    <NavigationBar />
    <BurgerFooter />
  </div>
</template>

<script>
import NavigationBar from "./components/navigationBar/NavigationBar.vue";
import BurgerFooter from "./components/burgerFooter/BurgerFooter.vue";
import "./app.scss";
export default {
  name: "App",
  components: {
    NavigationBar,
    BurgerFooter,
  },
};
</script>
