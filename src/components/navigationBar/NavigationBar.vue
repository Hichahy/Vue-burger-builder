<template>
  <div v-if="burger" class="overlay-burger" @click="toggleBurger"></div>
  <nav :class="{ 'hidden-navbar': !showNavbar && !burger }" id="navbar">
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
    <div class="burger-menu" :class="{ closeBurger: !burger }">
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

const OFFSET = 60;
export default {
  data() {
    return {
      burger: false,
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    toggleBurger() {
      this.burger = !this.burger;
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
