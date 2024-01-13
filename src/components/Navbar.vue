<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">Kulineran</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item" style="display: flex; align-items: center;">
            <router-link to="/keranjang" class="nav-link">
              Keranjang
              <font-awesome-icon :icon="['fas', 'basket-shopping']" class="mr-2 ml-2 mx-2"></font-awesome-icon>
              <span class="badge bg-success mx-1">{{updateKeranjang ? updateKeranjang.length : jumlah_pesanans.length }}</span>
            </router-link>
          </li>


        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  name: "NavbarPage",
  data(){
    return{
      jumlah_pesanans: []
    }
  },
  props: ['updateKeranjang'],
  methods:{
    setJumlah(data){
      this.jumlah_pesanans = data
    }
  },
  mounted(){
    axios.get('http://localhost:3000/keranjangs')
    .then((response) => this.setJumlah(response.data))
    .catch((error) => console.log(error))
  }
};
</script>

<style></style>
