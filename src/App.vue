<template>
  <div class="app">
    <NavigationBar />
    <BurgerPresentation />
    <BurgerFooter />
  </div>
</template>

<script>
import NavigationBar from "./components/navigationBar/NavigationBar.vue";
import BurgerPresentation from "./components/burgerPresentation/BurgerPresentation.vue";
import BurgerFooter from "./components/burgerFooter/BurgerFooter.vue";
import "./app.scss";
export default {
  name: "App",
  components: {
    NavigationBar,
    BurgerPresentation,
    BurgerFooter,
  },
};
</script>
