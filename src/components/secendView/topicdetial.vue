<template>
    <div class="topicWrap">
      <div class="tabWrap2">
            <!-- 可滑动区域 -->
            <div class="m-tabs scroll" v-show="!show">
              <ul class="navList">
                <li :class="{active:index===0}" @click.stop="navClick(0)">推荐</li>
                <li :class="{active:index===1}" @click.stop="navClick(1)">居家生活</li>
                <li :class="{active:index===2}" @click.stop="navClick(2)">服饰鞋包</li>
                <li :class="{active:index===3}" @click.stop="navClick(3)">美食酒水</li>
                <li :class="{active:index===4}" @click.stop="navClick(4)">个护清洁</li>
                <li :class="{active:index===5}" @click.stop="navClick(5)">母婴亲子</li>
                <li :class="{active:index===6}" @click.stop="navClick(6)">运动旅行</li>
                <li :class="{active:index===7}" @click.stop="navClick(7)">数码家电</li>
                <li :class="{active:index===8}" @click.stop="navClick(8)">全球特色</li>
              </ul>
            </div>
        </div>    
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

      data (){
        return {
            index:0,
            heightLine:0
        }
      },
    methods:{
        navClick(cid) {
          this.index = cid;
        },
    },
    mounted(){
            new BScroll(".scroll", {
              click: true,
              scrollX: true
            }); 
      },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
    .topicWrap
      height 100%
      width 100%
      .tabWrap2
            z-index 100

            position absolute
            height 30px
            height: 72px;
            position: relative;
            top 100px
            background-color #fff
            .m-tabs 
              height: 100%;
              white-space: nowrap;

              .navList 
                height: 100%;
                float: left;
                z-index: 20;

                li 
                  // font-size 14px
                  height 100%
                  line-height 72px
                  font-size: 28px;
                  white-space: nowrap;
                  white-space: nowrap;
                  display: inline-block;
                  // padding 0 8px 8px 0
                  margin-right 10px

                  &.active 
                    // border-bottom 2px solid #B4282D
                    border-bottom: 4px solid #B4282D;
                    color: #B4282D;

</style>
