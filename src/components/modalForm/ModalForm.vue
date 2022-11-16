<template>
  <div
    class="modal-form-hide"
    :class="{ modalFormVisible: this.hideSummaryCard && this.showSucces }"
  >
    <i class="bi bi-x-circle-fill" @click="$emit('close-modal')"></i>
    <h3>Fill the form to delivery your burger 🍔</h3>
    <span v-if="errors">{{ errors }}</span>
    <form>
      <ul>
        <li>
          <label for="name">Name:</label>
          <input
            v-model="name"
            type="text"
            id="name"
            name="user_name"
            required
          />
        </li>
        <li>
          <label for="surname">Surname:</label>
          <input
            v-model="surname"
            type="text"
            id="surname"
            name="user_surname"
            required
          />
        </li>
        <li>
          <label for="mail">E-mail:</label>
          <input
            v-model="email"
            type="email"
            id="mail"
            name="user_email"
            required
          />
        </li>
        <li>
          <label for="adress">Adress:</label>
          <input v-model="adress" id="adress" name="user_adress" required />
        </li>
        <li>
          <label for="phone">Phone number:</label>
          <input
            v-model="phone"
            type="tel"
            id="phone"
            name="user_adress"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
        </li>
      </ul>
    </form>
    <button @click="handleCheckForm" class="button-green" type="submit">
      Order!
    </button>
  </div>
  <ModalSucces :showSucces="showSucces" @close-modal="$emit('close-modal')" />
</template>

<script>
import ModalSucces from "../modalSucces/ModalSucces.vue";
// import axios from "axios";
import "./modalForm.scss";

export default {
  emits: ["close-modal"],
  props: [
    "hideSummaryCard",
    "ingredientFilter",
    "burgerPriceAcumulator",
    "blackBun",
  ],
  components: {
    ModalSucces,
  },
  data() {
    return {
      errors: null,
      name: null,
      surname: null,
      email: null,
      adress: null,
      phone: null,
      showSucces: true,
    };
  },
  methods: {
    // handleSendOrder() {
    //   const form = {
    //     name: this.name,
    //     surname: this.surname,
    //     email: this.email,
    //     adress: this.adress,
    //     phone: this.phone,
    //     bun: this.blackBun,
    //     ingredients: this.ingredientFilter,
    //     price: this.burgerPriceAcumulator,
    //   };
    //   axios
    //     .post("url", form)
    //     .then((response) => (this.articleId = response.data.id));
    // },

    handleCheckForm(e) {
      e.preventDefault();
      const regNameSurname = /^[a-zA-Z]+$/;
      const regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const regAdress = /^[a-zA-Z0-9\s,'-]*$/;
      const regPhone = /^\d{9}$/;
      const { name, surname, email, phone, adress } = this;

      if (!name) {
        this.errors = "Name is required";
      } else if (!name.match(regNameSurname)) {
        this.errors = "Name is invalid";
      } else if (!surname) {
        this.errors = "Surname is required";
      } else if (!surname.match(regNameSurname)) {
        this.errors = "Surname is invalid";
      } else if (!email) {
        this.errors = "Email is required";
      } else if (!email.match(regEmail)) {
        this.errors = "Email is invalid";
      } else if (!adress) {
        this.errors = "Adress is required";
      } else if (!adress.match(regAdress)) {
        this.errors = "Adress is invalid";
      } else if (!phone) {
        this.errors = "Phone number is required";
      } else if (!phone.match(regPhone)) {
        this.errors = "Phone number is invalid, pattern 123456789";
      } else {
        this.errors = null;
        this.showSucces = false;
        // this.handleSendOrder();
      }
    },
  },
};
</script>
