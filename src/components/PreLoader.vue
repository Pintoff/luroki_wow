<template>
  <div class="loader" v-if="isLoading">
    
  </div>
</template>

<script>
export default {
  name: '',
  components: {
    },
  data() {
    return {

    }
  },
 props: {
    isLoading: {
      type: Boolean,
      required: true
    },
 },
 computed: {
    },
 methods: {
    },
 mounted(){
    }
}
</script>

<style scoped>
.loader {
  width: 150px;
  height: 150px;
  border-left: 5px solid #38ff8e;
  border-radius: 50%;
  animation: rigth5231 0.9s linear infinite;  
}
</style>