<template>
 
  <router-view/>
  <FooterPage/>
</template>

<script>
import FooterPage from '@/components/Footer.vue' 
export default {
  components: {
    FooterPage
  }
}
</script>