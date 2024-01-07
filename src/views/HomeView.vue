<template>
  <div class="home">

    <div class="container">
      <NavbarPage />
      <HeroPage />
      <div class="row mt-4">
        <div class="row justify-content-between">
          <div class="col">
            <h2>Best <strong>Foods</strong></h2>
          </div>
          <div class="col-auto">
            <router-link to="/foods" class="btn btn-success">Lihat Semua</router-link>
          </div>
        </div>

      </div>

      <div class="row mb-5">
        <div class="col-md-3 mt-d" v-for="product in products" :key="product.id">
          <CardProductsPage :product="product"/>
        </div>
        
      </div>
    </div>

  </div>
</template>

<script>
import NavbarPage from '@/components/Navbar.vue'
import HeroPage from '@/components/Hero.vue'
import CardProductsPage from '@/components/CardProducts.vue'
import axios from "axios"

export default {
  name: 'HomeView',
  components: {
    NavbarPage,
    HeroPage,
    CardProductsPage
  },

  data(){
    return {
      products : []
    }
  },
  methods : {
    setProducts(data){
      this.products = data
    }
  },
  mounted(){
    axios.get('http://localhost:3000/best-products')
  .then((response) => this.setProducts(response.data))
  .catch((error) => console.log(error))
  }
};
</script>
