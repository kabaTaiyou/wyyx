<template>
    <div class="wrapTopic">
        <header class="header">
            <span class="leftText" @click="gotoLink('/')">
              <i class="iconfont">
              &#xe618;  
              </i>
            </span>

            <div class="middle">
              <div class="middleLeft" :class="{on:heightLine===0}" @click="gotoToggle(0)">
                发现
              </div>
              <div class="middleRight"  :class="{on:heightLine===1}"  @click="gotoToggle(1)">
                甄选家
              </div>
            </div>


            <span class="rightText">
              <i class="iconfont" @click="gotoLink('/home/seacher')"> 
                &#xe62d;
              </i>
              <i class="iconfont">
                &#xe600;
              </i>
            </span>
        </header>
        <topicDetial v-show="$route.params.type==0"/>
        <leftContent v-show="$route.params.type==0"/>
        <rightContent v-show="$route.params.type!=0"/>
    </div>
</template>
<script>

import topicDetial from '../../components/secendView/topicdetial'
import leftContent from '../../components/secendView/leftContent'
import rightContent from '../../components/secendView/rightView'
  export default {

      data (){
        return {
            index:0,
            heightLine:0
        }
      },
      methods:{
            navClick(index) {
                this.index = index;
              },
              gotoToggle(page){
                //根据不同page跳转不同路由
                this.heightLine = page
                //编程式
                this.$router.push({name: 'openIn',params:{type:page}})
              },
              gotoLink(path){
                this.$router.push({path})
                this.$store.dispatch("isChange", false);
              }
      },
  
      components:{
        topicDetial,
        leftContent,
        rightContent
      }


  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >

.wrapTopic 
  width 100%
  // height 100%
  // background-color pink 
  position relative
  .header
    z-index 100

    height 100px
    // background-color red
    display flex
    justify-content space-around
    border-bottom 1px solid #999
    .iconfont
      font-size 50px
    .middle
      height 100px
      width 320px
      display flex
      justify-content space-around
      align-items center
      .middleLeft
        font-size 28px
        &.on
          font-size 40px
          color red
          font-weight 700
      .middleRight
        font-size 28px
        &.on
          font-weight 700
          font-size 40px
          color red
 
</style>