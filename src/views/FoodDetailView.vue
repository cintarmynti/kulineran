<template>
    <div class="food-detail">
        <NavbarView />
        <div class="container">
            <!-- breadcrumbs -->
            <div class="row mt-5">
                <div class="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <router-link to="/" class="text-dark">Home</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                <router-link to="/foods" class="text-dark">Foods</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">
                                Food Orders
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 gambar d-flex justify-content-center">
                    <img :src="'../images/' + product.gambar" class="img-fluid" alt="" />
                </div>

                <div class="col-md-6 nama">
                    <h2>
                        <strong>{{ product.nama }}</strong>
                    </h2>
                    <hr>
                    <h4>Harga : <strong>Rp. {{ product.harga }}</strong></h4>
                    <form class="mt-4" v-on:submit.prevent>
                        <div class="form-group">
                            <label for="jumlah_pemesanan">Jumlah Pesan</label>
                            <input type="number" name="" class="form-control" v-model="pesan.jumlah_pemesanan" id="">
                        </div>
                        <div class="form-group">
                            <label for="Keterangan">Keterangan</label>
                            <textarea name="" v-model="pesan.keterangan" class="form-control" placeholder="Keterangan spt : pedas, extra mayo" id=""
                                cols="30" rows="7"></textarea>
                            <button type="submit" class="btn btn-success mt-3" @click="pemesanan"> 
                                <font-awesome-icon class="mr-2" :icon="['fas', 'cart-shopping']" />
                                <span class="ml-2">Pesan</span>
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavbarView from "../components/Navbar.vue";
import axios from "axios";
export default {
    name: "FoodDetailView",
    components: {
        NavbarView,
    },
    data() {
        return {
            product: {},
            pesan: {}
        };
    },
    methods: {
        setProduct(data) {
            this.product = data;
        },
        pemesanan(){
            if(this.pesan.jumlah_pemesanan){
                this.pesan.products = this.product;
            axios
                .post("http://localhost:3000/keranjangs/", this.pesan)
                .then(() => {
                    console.log(this.pesan);
                    this.$router.push({path:"/keranjang"})
                    this.$toast.success('Sukses Masuk Keranjang', {
                        type : 'success',
                        position : 'top-right',
                        duration : 3000,
                        dismissable: true
                    })
                })
                .catch((err) => console.log(err));
            }else{
                this.$toast.error('Jumlah pesanan harus di isi', {
                        type : 'error',
                        position : 'top-right',
                        duration : 3000,
                        dismissable: true
                    })
            }
            
        }
    },
    mounted() {
        axios
            .get("http://localhost:3000/products/" + this.$route.params.id)
            .then((response) => this.setProduct(response.data))
            .catch((error) => console.log(error));
    },
};
</script>

<style>
.gambar {
    background: #4EB883;
    border-radius: 15px;
}
</style>
