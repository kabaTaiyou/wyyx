<template>
  <div class="wrap">
      <div class="seacherWrap">
          <!-- 头部 -->
          <header>
            <div class="leftContent">
                <span class="left">
                <i class="iconfont">
                    &#xe62d;
                </i>
            </span>
            <input v-model="val" type="text" class="text" placeholder="潮鞋值降500元">
            <!-- 删除 -->
            <span v-show="val" @click="delate">
                <i class="iconfont">&#xe625;</i>
            </span>
            </div>
            <span class="cancel" @click="back">
                取消
            </span>

          </header>
          <!-- 历史纪录 -->
          <div class="history">

          </div>
          <!-- 底部 -->
          <div class="bottom">
            <header class="top">
                热门搜索
            </header>
            <ul class="navList">
                <li @click="Choose(index)"  v-for="(item,index) in hotKeywordVOList" :key="index"><span :class="{on:isChoose===index}">{{item.keyword}}</span></li>
              
            </ul>
          </div>
          <!-- 下拉 -->
          <ul class="selection">
            <li v-for="(item,index) in showList" :key='index'>{{item}}</li>
            
          </ul>
      </div>
  </div>
</template>
<script>

import { HotKeyWords ,seacher} from '../../../api';
export default {
    data(){
        return{
            hotKeywordVOList:[],
            isChoose:0,
            val:'',
            showList:[]
        }
    },

    watch: {
      async val(newVal) {

        //得到数据 进行列表显示 
        //判断
        const result =  await seacher(newVal)
        console.log(result,'resulit')
        if(result.code === '200'){
            //成功
            this.showList = result.data
            console.log(111)
        }

      
      }
    },
   async mounted(){
       const result =  await HotKeyWords()
    //    console.log(result)
       if(result.code==="200"){
           const hotKeywordVOList = result.data.hotKeywordVOList
           console.log(result.data.hotKeywordVOList,'热搜')
           this.hotKeywordVOList = hotKeywordVOList
       }
    },
    methods:{
        Choose(index){
            this.isChoose = index
            console.log(index)
        },back(){
            this.$router.push('/home')
            this.$store.dispatch('isChange',true)
        },delate(){
            this.val = ''
            this.showList = []
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
    .wrap
        width 100%
        
        .seacherWrap
            width 100%
            height 88px
            header 
                height 100%
                // background-color red
                display flex
                align-items center
                justify-content space-around
                position relative
                .leftContent
                    display flex    
                    .left
                        height 56px
                        background-color #f4f4f4
                        display inline-block
                        line-height 56px
                        
                    .text
                        background-color #f4f4f4
                        font-size 28px
                        height 56px
                        width 500px
                        outline none
                    span 
                        background-color #f4f4f4
                        color #777
                        width 50px
                        position relative
                        i 
                            position absolute
                            top 10px
                            display inline-block
                            height 100%
                            width 100%
                            text-align center                            
                            line-height 28px
                    
                .cancel
                    display inline-block
                    font-size 28px
                    width 56px
                    height 41px
                    text-align center
            //底部
            .bottom
                width 100%
                height 406px
                // background-color red
                .top
                    height 90px
                    font-size 28px
                    color #999
                    // text-align left 
                    justify-content left 
                    padding 0 10px
                .navList
                    width 100%
                    // background-color red
                    height 406px
                    li
                     float left
                     height 74.6px
                     margin 18px
                     font-size 24px
                     span
                        color #000
                        &.on
                            border 1px solid red
                            color red
            .selection
                position absolute
                top 88px
                left 0
                background-color #fff
                width 100%
                li
                    padding 0 30px

                    height 104px
                    width 100%
                    border-bottom 1px solid #eee


                     




</style>