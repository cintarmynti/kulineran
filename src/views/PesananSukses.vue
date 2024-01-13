<template>
  <NavbarPage/>
  <div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col text-center">
          <img src="../assets/sukses.png" width="300px" alt="">
          <h2><strong>Sukses!</strong></h2>
          <h4>Pesanan anda akan segera di proses <br> selamat menunggu</h4>
        </div>
    </div>
  </div>
</template>

<script>
 import NavbarPage from '@/components/Navbar.vue'
export default {
   name : 'PesananSuksesView',
   components : {
        NavbarPage
   }
}
</script>

<style>

</style>