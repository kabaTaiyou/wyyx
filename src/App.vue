<template>
  <div class="wrap">
    <router-view/>
    <footerBottom v-show="$route.meta.isShowFoot"/>
  </div>
</template>
<script>
 import footerBottom from "./components/footer/footer";

export default {
 
 components: {
      footerBottom
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.wrap
  height 100%
  width 100%
  position relative
</style>

