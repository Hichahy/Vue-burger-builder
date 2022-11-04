<template>
  <div>
    <p class="toggle-title">Black Roll?</p>
    <label class="switch">
      <input type="checkbox" @click="toggle" />
      <span class="slider round"></span>
    </label>
  </div>
</template>

<script>
import "./toggleBtn.scss";

export default {
  props: ["blackRoll"],
  data() {
    return {};
  },
  methods: {
    toggle() {
      this.$emit("onToggle");
    },
  },
};
</script>
