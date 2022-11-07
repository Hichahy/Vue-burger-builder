<template>
  <div class="modal-succes" :class="{ hideSucces: this.showSucces }">
    <i class="bi bi-x-circle-fill" @click="$emit('close-modal')"></i>
    <h3>Succes!</h3>
    <h3>Your order will arrive soon.</h3>
    <img src="/images/burger.svg" alt="burger" />
  </div>
</template>

<script>
import "./modalSucces.scss";

export default {
  emits: ["close-modal"],
  props: ["showSucces"],
};
</script>
