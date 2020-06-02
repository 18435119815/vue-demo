<template>
  <div id="app">
    <!-- 首页
    {{price | langChange('RMB')}} -->
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      price:10
    }
  },
  mounted(){
  }
}
</script>

<style lang="less">
  @import 'assets/css/base.css';
</style>
