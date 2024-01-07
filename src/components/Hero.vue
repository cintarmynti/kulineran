<template>
    <!-- dekstop -->
    <div class="hero">
        <div class="row d-none d-md-flex w-100">
            <div class="col-md-6">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">
                        <h2><strong>Delicious Food Menu, </strong><br>in Your Gadget</h2>
                        <p>Ayo segera pesan dan pilih menu favorit Anda</p>
                        <button class="btn btn-lg btn-success"><router-link to="/foods">Pesan</router-link></button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <img src="../assets/hero.png" width="100%" alt="">
            </div>
        </div>


        <!-- mobile -->
        <div class="row mt-4  d-md-none">
            <div class="col-md-6">
                <img src="../assets/hero.png" width="100%" alt="">
            </div>
            <div class="col-md-6">
                <div class="d-flex h-100">
                    <div class="justify-content-center align-self-center">
                        <h2><strong>Delicious Food Menu, </strong> <br>in Your Gadget</h2>
                        <p>Ayo segera pesan dan pilih menu favorit Anda</p>
                        <button class="btn btn-lg btn-success"><router-link to="/foods">Pesan</router-link></button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroPage'
}
</script>

<style></style>
