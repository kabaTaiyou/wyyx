<template>
  <div class="detial">

    <div class="headImg">
        <img :src="bannerImg[page].img" alt="">
    </div>
    <ul class="showRightList">
        <li class="rightItem" v-for="(item,index) in rightList[page]" :key="index">
            <div class="radius">
                <img :src="item.img" alt="">
            </div>
            <span class="text">{{item.text}}</span>
        </li>
    </ul>
  </div>
</template>
<script>
import { reqRight } from '../../../api/index' 
export default{
    data(){
        return {
            rightList:[],
            bannerImg:[]
        }
    },
    props:['page'],
    async mounted(){
        // console.log(this.$route.query,'222222222222222222222222')
        // console.log(1111);
        //发送请求 获取数据
        const result =  await reqRight()
        console.log(result,'data')

        
        if(result.code === 0){
           this.rightList =  result.data  
           this.bannerImg = result.bannerImg 
        console.log(result.bannerImg,'databbbbbbbbbbbbbbbbbbb')
        }


    },
    updated(){
        // console.log(1111)
        console.log('221111',this.page)

    },
    watch:{
        page(){
            console.log('221111',this.page,this)
        }
    }

}

</script>

<style lang="stylus" rel="stylesheet/stylus" >
    .detial
        width 528px
        // height 400px
        // background-color red
        .headImg
            margin-top 30px 
            width 100%
            height 192px
            img 
                height 100%
                width 100%
        .showRightList
            width 100%
            height 667px
            // background-color green 
            padding 10px 0
            
            .rightItem 
                margin-left 24px
                margin-bottom 13px
                
                width 144px
                height 216px
                // background-color red
                float left
                display flex
                flex-direction column
                align-items center
                .radius
                    border-radius 50%
                    border 1px solid  #eee
                    overflow hidden
                    
                    img 
                        border-radius 50%
                        display block
                        width 144px
                        height 144px
                        border-radius 50%
                .text
                    text-align center

</style>