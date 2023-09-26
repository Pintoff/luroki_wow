<template>
  <LandingHeader/>
  <RouterView/>
</template>

<script>
import LandingHeader from './components/LandingHeader.vue';
export default {
  name: 'App',
  components: {
    LandingHeader,
    
    },
  data() {
    return {
    }
  },
 computed: {
    },
 methods: {
    },
 mounted(){
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Silkscreen&display=swap');

@font-face {
    font-family: "Archivo";
    font-style: normal;
    font-weight: 400;
    src: local("Default"),
         url("./assets/fonts/default.woff2") format("woff2"),
}

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

</style>