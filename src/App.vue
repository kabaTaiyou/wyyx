<template>
  <div class="wrap">
    <router-view/>
    <footerBottom v-show="$route.meta.isShowFoot"/>
  </div>
</template>
<script>
  import {shopList,seacher} from './api/index'
 import footerBottom from "./components/footer/footer";

export default {
 
 components: {
      footerBottom
    },
   async mounted(){
   //发送请求 获取shoplist数据
        const reuslt = await shopList()
        //更新vuex中的数据
        // console.log(this.$store)
        if(reuslt.code===0){

          this.$store.dispatch('shopList',reuslt.data)
          console.log(reuslt,'111111111')
          console.log(shopList)
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.wrap
  height 100%
  width 100%
  position relative
</style>

