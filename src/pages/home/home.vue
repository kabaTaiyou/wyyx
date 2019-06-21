<template>
  <!-- 搜索框 -->
  <div id="homeWrap">
    <router-view></router-view>

    <div class="show" v-show="isChange">
      <div class="homeList">
        <!-- 蒙版 -->
        <div class="masck" v-show="show" @click="change"></div>
        
        <!-- 轮播图 -->
        <div class="slideWarp">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/60e4ba11fdb8320eda453427bf287639.jpg?imageView&quality=75&thumbnail=750x0"
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/ad770ae5085736e71c2231b5e37b23ce.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0"
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/a2b4bcc5a668b35a2820061022904fa8.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0"
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/2436760bd42c512fd9259d2c18428b9e.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0"
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/43f56a433442c235233f32d5ac5aa72f.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0"
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/b0ef72b4d2fa40bd378139e9e07a5e2d.jpg?imageView&quality=75&thumbnail=750x0"
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/87afffbd9305868705159c719a368a01.jpg?watermark&type=1&gravity=northwest&dx=0&dy=0&image=YzBiN2Y3OTJmMWM4MGJjNzM3YmU4MTIwMTNlNDU4NGQucG5n|imageView&quality=75&thumbnail=750x0"
                >
              </div>
              <div class="swiper-slide">
                <img
                  src="https://yanxuan.nosdn.127.net/b97b16feb75f78121c8fab18ae85300c.jpg?imageView&quality=75&thumbnail=750x0"
                >
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>-->

            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
          </div>
        </div>

        <!-- 三个图标 -->
        <div class="m-indexServicePolicy">
          <ul>
            <li class="item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png">
                <span class="text">网易自营品牌</span>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png">
                <span class="text">30天无忧退换货</span>
              </a>
            </li>
            <li class="item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png">
                <span class="text">48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 主要内容 -->
        <div class="main">
          <!-- 新品首发 -->
          <div class="kingkongCarousel">
            <ul class="newShopList">
              <li class="shopItem" v-for="(shop, index) in shopList" :key="index">
                <a href="##">
                  <img :src="shop.picUrl">
                  <span class="text1">{{shop.text}}</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- 大图 -->
          <a
            class="bigImg"
            href="##"
            style="background:url(https://yanxuan.nosdn.127.net/61bb38ff63f456706dc36e2446d808d5.gif?imageView&quality=75);background-size:100% 100%;"
          >
            <a class="smlImg" href="##">
              <img src="http://yanxuan.nosdn.127.net/d51566b4e71dc6ad0f1fcdf0baa57a5d.png" alt>
            </a>
          </a>
          <div
            class="indexBigPromotionModule"
            style="background-color:initial;background-image:url(https://yanxuan.nosdn.127.net/6b2eb7819e2e7802d8cded1246e30697.jpg?imageView&quality=75);background-size:100% 100%;"
          >
            <a
              href="##"
              class="action"
              style="background:url(https://yanxuan.nosdn.127.net/c27ea46bc3decd2d8ef25c0650a00562.png?imageView&thumbnail=750x0&quality=75);background-size:100% 100%;"
            >
              <!-- 活动 -->
            </a>
            <ul class="actionList">
              <li
                class="item"
                style="background:url(https://yanxuan.nosdn.127.net/ee26de3a440f1253efd9d2b6bc4b739d.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;"
              >
                <img
                  src="http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?imageView&thumbnail=160x160&quality=75"
                  alt
                >
              </li>

              <li
                class="item"
                style="background:url(https://yanxuan.nosdn.127.net/a66b70ecae4e57b27c0d094c8f1c82f6.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;"
              >
                <img
                  src="http://yanxuan.nosdn.127.net/5459e22c904dd78e3cbecafb32e025b2.png?imageView&thumbnail=160x160&quality=75"
                  alt
                >
              </li>
              <li
                class="item"
                style="background:url(https://yanxuan.nosdn.127.net/165889ccb0dad3a4962183a0c656daba.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;"
              >
                <img
                  src="http://yanxuan.nosdn.127.net/9c5828a413c4218559e494ff8558e837.png?imageView&thumbnail=160x160&quality=75"
                  alt
                >
              </li>
              <li
                class="item"
                style="background:url(https://yanxuan.nosdn.127.net/2cbf6bd0d88f776bf7d918730b15ebc8.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;"
              >
                <img
                  src="http://yanxuan.nosdn.127.net/61b90e0df4c551cb05f7c601646bf2f7.png?imageView&thumbnail=160x160&quality=75"
                  alt
                >
              </li>
              <li
                class="item"
                style="background:url(https://yanxuan.nosdn.127.net/5fd3e1b7eca6046585e18c123366eac8.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;"
              >
                <img
                  src="http://yanxuan.nosdn.127.net/41e6e8c382aace80de4bf88088d877ec.png?imageView&thumbnail=160x160&quality=75"
                  alt
                >
              </li>
              <li
                class="item"
                style="background:url(https://yanxuan.nosdn.127.net/b52b890f196dde9873dea4eba1b5ade1.png?imageView&thumbnail=375x0&quality=75);background-size:100% 100%;"
              >
                <img
                  src="http://yanxuan.nosdn.127.net/ce05902689fd08c4e6d494355f193a96.png?imageView&thumbnail=160x160&quality=75"
                  alt
                >
              </li>
            </ul>

             <!-- 三个活动a图 -->
          <div class="floor">
            <a
              href="##"
              style="background:url(https://yanxuan.nosdn.127.net/893463d6afebce4c9c18fc41f1963840.png?imageView&thumbnail=250x0&quality=75);background-size:100% 100%;"
            ></a>
            <a
              href="##"
              style="background:url(https://yanxuan.nosdn.127.net/eac0b8a901f2704db80af729c1a02eb0.png?imageView&thumbnail=250x0&quality=75);background-size:100% 100%;"
            ></a>
            <a
              href="##"
              style="background:url(https://yanxuan.nosdn.127.net/c2cb1ff94359f6fd10936db7ee394d2d.png?imageView&thumbnail=250x0&quality=75);background-size:100% 100%;"
            ></a>
          </div>

          <!-- 全品类狂欢抢 -->
          <div class="promItem">
            <a href="##" style="background:url(https://yanxuan.nosdn.127.net/c2c0cb4fea29c099200333297b2732e7.png?imageView&thumbnail=750x0&quality=75);background-size:100% 100%;">
         
            </a>
          </div>

          <!-- 12张展示图 -->
          <ul class="showImg">
            
            <li class='items' 
            v-for="(item,index) in imgs[29]" :key="index"
            style="background:url(https://yanxuan.nosdn.127.net/67c3c5f5dabbd8b95f890a097312c28c.png?imageView&thumbnail=188x0&quality=75);background-size:100% 100%;">
                  <span class="text2">
                       {{item.text}}

                   </span>
                    <span class="text">
                       9.9包邮618

                   </span>
              <img class="promGood promGood-415 promGood-415-0" :src=item.img>
              
            </li>
        </ul>
     </div>


          <!-- 3个图 -->
         <threeImg />
         <!-- 4ge 图 -->
         <FOURImg />
          <!-- 6张图 -->
          <SixImg index1="0">
          <div slot="xxx" class="xxx">
            <span>
              新品首发
            </span>
            <span>
              slot标签传值
            </span>
            <span>
              更多
            </span>
          </div>

          </SixImg>
          <!-- 4张 -->
         <FOURImg />

          <!-- banner图 -->
          <bannerBigImg indexBanner="0" />
          <bannerBigImg indexBanner="1" />
          <bannerBigImg indexBanner="2" />
          <bannerBigImg indexBanner="3" />
          <!-- <bannerBigImg indexBanner="" /> -->
     
         <FOURImg />
          

          <div class="last">
             <div class="showText">
                <div class="lefrt">
                下载app
              </div>
              <div class="pesonalCompu">
                电脑板
              </div>
             </div>
          </div>

       
       
       
        </div>
      </div>
      
      
      
      <div class="moust">
        <!-- 垫底 -->
      
      </div>
   
   
    </div>



    <div class="hdWrap" v-show="isChange">
          <div class="line" @click="goToSeacher">
            <a href="javascript:;">
              <img
                src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"
                alt="网易严选"
              >
            </a>
            <div class="seacher">
              <span class="seachLeft">
                <i class="iconfont">&#xe62d;</i>
              </span>
              <span class="seachRight">搜索商品, 共25192款好物</span>
            </div>
          </div>
          <!-- 横向滑动 -->
          <div class="tabWrap">
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
            <div class="showList" v-show="show">
              <div class="all">全部频道</div>
              <div class="listItem">
                <div class="cateTag cateTag-active">
                  <div class="content" @click="to1px(0)" :class="{topBottom:is1px===0}">推荐</div>
                </div>
                <div class="cateTag cateTag-active">
                  <div class="content" @click="to1px(1)" :class="{topBottom:is1px===1}">居家生活</div>
                </div>
                <div class="cateTag cateTag-active">
                  <div class="content" @click="to1px(2)" :class="{topBottom:is1px===2}">服饰鞋包</div>
                </div>
                <div class="cateTag cateTag-active">
                  <div class="content" @click="to1px(3)" :class="{topBottom:is1px===3}">美食酒水</div>
                </div>
                <div class="cateTag cateTag-active">
                  <div class="content" @click="to1px(4)" :class="{topBottom:is1px===4}">个护清洁</div>
                </div>
                <div class="cateTag cateTag-active">
                  <div class="content" @click="to1px(5)" :class="{topBottom:is1px===5}">母婴亲子</div>
                </div>
                <div class="cateTag cateTag-active">
                  <div class="content" @click="to1px(6)" :class="{topBottom:is1px===6}">运动旅行</div>
                </div>
                <div class="cateTag cateTag-active">
                  <div class="content" @click="to1px(7)" :class="{topBottom:is1px===7}">数码家电</div>
                </div>
                <div class="cateTag cateTag-active">
                  <div class="content" @click="to1px(8)" :class="{topBottom:is1px===8}">全球特色</div>
                </div>
              </div>
            </div>
            <!-- 展示下拉列表 -->
            <div class="toggleWrap">
              <div class="right"></div>
              <!-- 左侧白块 -->
              <div class="withe"></div>
              <!-- 右侧白块 -->
              <div class="rightToggle" :class="{show:show}">
                <span @click="rightToggle">
                  <i class="iconfont">&#xe60c;</i>
                </span>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import BScroll from "better-scroll";
import { shopList, seacher ,reqRight} from "../../api/index";
import { mapState } from "vuex";
import threeImg from '../../components/firstViewAbout/about.vue'
import FOURImg from '../../components/firstViewAbout/FourImg.vue'
import SixImg from '../../components/firstViewAbout/six.vue'
import bannerBigImg from '../../components/firstViewAbout/bnner'
// console.log(BScroll)
// console.log(shopList)
export default {
  data() {
    return {
      show: false,
      index: 0,
      is1px: null,
      imgs:[]
      // isChange:true //是否显示以及路由
    };
  },

  components:{
    threeImg,
    FOURImg,
    SixImg,
    bannerBigImg
  },
  computed: {
    ...mapState(["shopList", "isChange",'bannerList']) //这里 将mapState这个对象展开  里面展开的内容   {传进去的数组字符串: () => this.$store.getters['字符串']}
  },
  
  // watch: {
  //     bannerList(val) {
      
  //         new BScroll(".bottomscroll", {
  //         click: true,
  //         scrollX: true
  //         })

  //     }
  //   }
  // ,
  beforeRouteEnter(to,from,next){
  next(vm => {
    console.warn(to.redirectedFrom)
    if(to.redirectedFrom){//vue-router redirect不会刷新页面，需要判断并刷新
      // vm.$router.go(0)//safari浏览器go(0)无效
      window.location.reload()
    }
  })
},
  async mounted() {
    // console.log(seacher('运动鞋'),'rrrrrrrrrrrr')
    const data = await seacher("运动鞋");
    console.log(data, "890987656787654e5676543");
    new BScroll(".scroll", {
      click: true,
      scrollX: true
    });
    new BScroll("#homeWrap", {
      click: true
    });


     


    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },

   
    

      
    });
    this.$store.dispatch('banner')
    const imgs = await reqRight()
    if(imgs.code === 0){
      this.imgs = imgs.data
      console.log(this.imgs,'imgsssssssss')
    }
},
  methods: {
    rightToggle() {
      this.show = !this.show;
      // console.log(0)
      this.is1px = null;
    },
    //点击蒙版
    change() {
      this.show = !this.show;
    },
    navClick(index) {
      this.index = index;
    },
    to1px(to1px) {
      // console.log(this.to1px)
      this.is1px = to1px;
      // console.log(to1px)
    },
    goToSeacher() {
      this.$router.replace("/home/seacher");
      this.$store.dispatch("isChange", false);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" >
#homeWrap 
  height: 100%;
  position: relative;
  

  .masck 
    z-index: 19;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  

  .hdWrap 
    position fixed
    top 0
    left 0
    z-index 20
    width 100%
    // height 74px
    height: 148px;
    background-color: #fff;

    .line 
      width: 100%;
      // height 44px
      height: 88px;
      // padding-left 15px
      padding-left: 30px;
      display: flex;
      align-items: center;

      a 
        // height 20px
        height: 40px;
        // margin-right  10px
        margin-right: 20px;
        display: flex;
        align-items: center;

        img 
          // width 70px
          width: 140px;
          // height 20px
          height: 40px;
        

      .seacher 
        background-color: #ededed;
        display: flex;
        align-items: center;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        // height 28px
        height: 56px;
        // width 266px
        width: 532px;
        // border-radius 3px
        border-radius: 6px;
        font-size: 56px;
        font-size: 24px;
    
    .tabWrap 
      // height 30px
      height: 60px;
      position: relative;

      .m-tabs 
        height: 100%;
        white-space: nowrap;

        .navList 
          height: 100%;
          float: left;
          z-index: 20;

          li 
            // font-size 14px
            font-size: 28px;
            white-space: nowrap;
            white-space: nowrap;
            display: inline-block;
            // padding 0 8px 8px 0
            padding: 0 16px 16px 0;

            &.active 
              // border-bottom 2px solid #B4282D
              border-bottom: 4px solid #B4282D;
              color: #B4282D;
           

      .toggleWrap 
        // height 30px
        height: 60px;
        // width 80px
        width: 160px;
        // background-color #fff
        position: absolute;
        right: 0;
        bottom: 0;
        // margin-left -80px
        display: inline-block;

        .right 
          // height 30px
          height: 60px;
          // width 50px
          width: 100px;
          background-color: #fff;
          position: absolute;
          top: 0;
          right: 0;
        

        .withe 
          background-color: rgba(255, 255, 255, 0.3);
          // height 30px
          height: 60px;
          // height 30px
          width: 60px;
          // background: linear-gradient(to left , #ffffff , rgba(255,255,255,.3))
          // background: linear-gradient(to left , rgba(255,255,255,0),rgba(255,255,255,1) )
          // background-image: linear-gradient(rgba(255,255,255,0),rgba(255,255,255,1));
          // background:linear-gradient(to left ,rgba(255,255,255,0),rgba(255,255,255,1));
          background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
        

        .rightToggle 
          // background-color #fff
          // width 50px
          width: 100px;
          // height 30px
          height: 60px;
          position: absolute;
          right: 0;
          top: 0;
          transform: translateY(-50%);
          text-align: center;
          // line-height 30px
          line-height: 60px;
          transform: rotate(0deg);
          transition: all 1s;
          z-index: 21;

          &.show 
            transform: rotate(180deg);
          

      .showList 
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
        width: 100%;
        // height 144px
        height: 288px;
        background-color: #ffffff;

        .all 
          font-size: 28.5px;
          // height 30px
          height: 60px;
          width: 100%;
          // text-align center
          line-height: 60px;
        

        .listItem 
          .cateTag 
            font-size: 24px;
            float: left;
            width: 25%;
            // height 28px
            height: 56px;
            // margin-bottom 5px
            margin-bottom: 10px;
            position: relative;

            .content 
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              // width 74px
              width: 148px;
              // height 27px
              height: 54px;
              text-align: center;
              // line-height 27px
              line-height: 54px;
              // 颜色
              background-color: #FAFAFA;

              // position: relative;
              &.topBottom 
                border: 2px solid #B4282D;
                border-radius: 5px;
          

  .slideWarp 
    width: 100%;
    // height 187px
    height: 374px;

    // background-color green
    .swiper-container 
      margin-top 130px
      width: 100%;
      height: 370px;

      .swiper-wrapper 
        width: 100%;
        height: 100%;

        .swiper-slide 
          width: 100%;
          height: 100%;

          img 
            height: 100%;
            width: 100%;
        

  .m-indexServicePolicy 
    
    width: 100%;
    // height 36px
    height: 72px;

    // background-color yellow
    ul 
      width: 100%;
      height: 100%;

      .item 
        float: left;
        width: 33.33%;
        text-align: center;
        line-height: 72px;
        color: #B4282D;
        img 
          width: 32px;
          height: 32px;
          vertical-align: middle;
        
       
        .text 
          font-size: 20px;
          vertical-align: middle;
          color: #B4282D;
      

  // 主要内容
  .main 
    width: 100%;
    // height: 2000px;
    // background-color: pink;

    .kingkongCarousel 
      width: 100%;
      height: 373px;

      // background-color yellow
      .newShopList 
        width: 100%;
        height: 100%;

        .shopItem 
          height: 156px;
          width: 20%;
          float: left;
          margin-top: 16px;

          a 
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            img 
              width: 110px;
              height: 110px;
            

            .text1 
              font-size: 24px;
              color: #333;
              width: 110px;
              height: 36px;
            
    .bigImg 
      height: 280px;
      display: block;
      position: relative;

      .smlImg 
        height: 168px;
        width: 169px;
        position: absolute;
        right: 55px;
        top: 45px;

        img 
          height: 168px;
          width: 168px;
      
    .indexBigPromotionModule 
      // height 10000000px
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      .floor 
        width 750px
        height 230px
        a 
          display: block;
          width: 231px;
          height: 220px;
          float left
          margin 0 8px
      .promItem
        height 80px
        width 100%
        a
          display block
          height 100%
          width 100%
      .showImg
        // height 660px
        width 750px
       

        .items
          height 220px
          width 24%
          float left
          display flex
          justify-content center
          align-items center
          flex-direction column
          margin-left 6px
          margin-top 8px
          img
            height 140px
            width 140px
          .text
            font-size 20px
            color #D95006
          .text2
            font-size: 24px;
            color #D95006
            color: #b4282d;
            vertical-align: middle;

            font-weight bold

      






      .action 
        height: 160px;
        width: 710px;
        display: block;
     

    .actionList 
      // width 351px
      // height 186px
      // display flex
      float left
      .item 
        // height
        width: 351px;
        height: 186px;
        float: left;
        margin-left: 16px;
        margin-top: 10px;
        position: relative;

        img 
          right: 0px;
          top: 20px;
          position: absolute;
          width: 166px;
          height: 166px;



.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet
      margin: 0 0.05333rem;
      height: 5px;
      width: 30px;
      border-radius: 1px;
.swiper-pagination-bullet-active
    background rgba(255,255,255,0.8)
     
     

.moust
  height 300px
.xxx
  display flex
  justify-content space-around
.last
  height 240px
  margin-top 70px
  background rgb(65,65,65)
  margin-top 30px
  .showText
    height 62px
    width 100%
    display flex
    justify-content space-around
    .lefrt
      color #fff
      width 172px
      height 62px
      text-align center
      line-height 62px      
      border 1px solid #fff
    .pesonalCompu
      line-height 62px      
      border 1px solid #fff
      text-align center
      color #fff
      width 172px
      height 62px

</style>
