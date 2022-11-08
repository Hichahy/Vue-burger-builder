<template>
  <div v-if="burger" class="overlay-burger" @click="toggleBurger"></div>
  <nav>
    <div class="logo">
      <img src="/images/burger-logo.svg" />
      <h1>Dream Burger</h1>
    </div>
    <div class="router-box">
      <router-link to="/">Home</router-link>
      <router-link to="/burger-creator">Create burger</router-link>
    </div>
    <div className="menu-icon">
      <input
        className="menu-icon-cheeckbox"
        @click="toggleBurger"
        type="checkbox"
        :checked="burger"
        id="burger-menu"
      />
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="burger-menu" :class="{ closeBurger: !this.burger }">
      <router-link to="/"><span>🍔</span>Home</router-link>
      <router-link to="/burger-creator"
        ><span>🍔</span>Create burger</router-link
      >
    </div>
  </nav>
  <router-view />
</template>

<script>
import "./navigationBar.scss";

export default {
  data() {
    return {
      burger: false,
    };
  },
  methods: {
    toggleBurger() {
      this.burger = !this.burger;
    },
  },
};
</script>
