<template>
  <nav>
    <img src="/images/burger-logo.svg" />
    <h1>Dream Burger</h1>
    <div class="router-box">
      <router-link to="/">Home</router-link>
      <router-link to="/burger-creator">Create burger</router-link>
    </div>
  </nav>
  <router-view />
</template>

<script>
import "./navigationBar.scss";

export default {};
</script>
