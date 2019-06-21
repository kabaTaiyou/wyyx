<template>
    <div class="SixImg">
        <div class="headeTitle">
           <slot name="xxx"></slot>
        </div>
        <div class="six">
            <ul class="list">
                <li class="item" v-for="(item,index) in six[index1]" :key="index">
                         

                    <a href="##">
                        <img :src="item.img">
                        <i >
                            {{item.text}}
                        </i>
                    </a>
                   
                </li>
               
            </ul>
        </div>
    </div>
</template>

<script>
import { shopList } from '../../api';
//这里 需要 接受来自父组件传来的数据 从而遍历生成多个li

export default {
    data(){
        return{
            six:[]
        }
    }
    ,
    props:['index1']
,
async mounted(){
    const result =  await shopList()
        // console.log(result,'six')

    if(result.code === 0){
        this.six = result.six
        console.log(result,'six')
    }
}

}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.SixImg
    width 740px
    height 528px
    box-sizing border-box
    background-color #fff
    margin-bottom 60px
    margin-left 5px
    .headeTitle
        height 90px
        width 100%
        font-size 32px
        text-align center
        line-height 90px
    .six
        height 780px
        width 740px
        .item
            width 210px
            height 254px
            float left
            background-color #f5f5f5
            margin-left 27px
            margin-bottom 5px
            text-align center 
            img 

                height 60%
                width 100% 
            i 
                z-index 10
                // position absolute
                font-size 20px
</style>
