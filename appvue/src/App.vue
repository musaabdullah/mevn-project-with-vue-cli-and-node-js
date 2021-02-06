<template>
 
<div id="app">

    <NavBar />
    <router-view/>
 
</div>
  
</template>
<script>
 import NavBar from '@/components/NavBar.vue';
export default {
  name: 'Home',
  components: {
   NavBar,
  },
   
}
</script>
<style lang="scss">
 
 
</style>
