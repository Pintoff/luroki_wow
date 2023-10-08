<template>
  <PreLoader :isLoading="isLoading"/>
  <LandingHeader v-if="isLandingPage"/>
  <HeaderOther v-else/>
  <RouterView/>
</template>

<script>
import LandingHeader from './components/LandingHeader.vue';
import HeaderOther from './components/HeaderOther.vue';
import PreLoader from './components/PreLoader.vue';

export default {
  name: 'App',
  components: {
    LandingHeader,
    HeaderOther,
    PreLoader,

    },
  data() {
    return {
      isLoading: true,
      
    }
  },
 computed: {
  isLandingPage() {
      return this.$route.name === 'landing';
    },

    },
 methods: {
    },
 mounted(){
    this.isLoading = false;
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