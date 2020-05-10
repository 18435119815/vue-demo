<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import "common/mixin.js"
export default {
  
}
</script>

<style lang="less">
  @import 'assets/css/base.css';
</style>
