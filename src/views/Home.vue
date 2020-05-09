<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
    // this.axios
    //   .get(
    //     "https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList",
    //     {
    //       params: {
    //         name: "1"
    //       }
    //     }
    //   )
    //   .then(res => {
    //     console.log(res, 1);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
};
</script>
