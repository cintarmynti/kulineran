<template>
    <div>
        <div class="card shadow card-product" style="width: 18rem;">
            <img :src="'../images/'+ product.gambar" height="200px" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">   {{ product.nama }}</h5>
                <p class="card-text">Harga : Rp. {{ product.harga }}</p>
                <a href="#" class="btn btn-success">Pesan</a>
            </div>
        </div>
     
    </div>
</template>

<script>
export default {
    name: 'CardProductsPage',
    props: ['product']
}
</script>

<style></style>