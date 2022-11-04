<template>
  <div class="burger-pre-containter">
    <div class="title-pre">
      <h2>Your crazy burger</h2>
      <ToggleBtn :blackRoll="blackRoll" @onToggle="toggle" />
    </div>
    <div class="ingradietns-box">
      <div :class="`${blackRoll ? 'black-roll-up' : 'roll-up '}`">
        <div class="seeds"></div>
        <div class="seeds2"></div>
      </div>
      <div
        v-for="i in ingradientsCollect"
        :key="i"
        :class="`${blackRoll && i === 'roll-center' ? 'roll-center-black' : i}`"
      ></div>
      <div :class="`${blackRoll ? 'roll-bottom-black' : 'roll-bottom '}`"></div>
    </div>
  </div>
  <IngradientsForm :ingradientsCollect="ingradientsCollect" />
</template>

<script>
import IngradientsForm from "../ingradientsForm/IngradientsForm.vue";
import ToggleBtn from "../layout/toggleBtn/ToggleBtn.vue";
import "./burgerPresentation.scss";

export default {
  components: {
    IngradientsForm,
    ToggleBtn,
  },
  data() {
    return {
      ingradientsCollect: [],
      blackRoll: false,
    };
  },
  methods: {
    toggle() {
      this.blackRoll = !this.blackRoll;
    },
  },
};
</script>
