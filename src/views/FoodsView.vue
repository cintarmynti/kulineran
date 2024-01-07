<template>
  <NavbarPage />
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <h2>Daftar <strong>Makanan</strong></h2>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <div class="input-group">
          <div class="input-group mb-3">
            
            <input v-model="search" @keyup="searchFood" type="text" class="form-control" placeholder="cari makanan kesukaan anda" aria-label="cari"
              aria-describedby="basic-addon1">
              <span class="input-group-text" id="basic-addon1">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </span>
          </div>

        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-3 mt-3" v-for="product in products" :key="product.id">
        <CardProductsPage :product="product" />
      </div>

    </div>
  </div>
</template>

<script>
import NavbarPage from '@/components/Navbar.vue'
import CardProductsPage from '@/components/CardProducts.vue'
import axios from "axios"

export default {
  name: 'FoodsView',
  components: {
    NavbarPage,
    CardProductsPage
  },

  data() {
    return {
      products: [],
      search: ''
    }
  },
  methods: {
    setProducts(data) {
      this.products = data
    },
    searchFood(){
      axios.get('http://localhost:3000/products?q='+this.search)
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error))
    }
  },
  mounted() {
    axios.get('http://localhost:3000/products')
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error))
  }
}
</script>

<style></style>