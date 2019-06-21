import home from '../pages/home/home.vue'
import item from '../pages/item/item.vue'
import topic from '../pages/topic/topic.vue'
import cart from '../pages/cart/cart.vue'
import ucenter from '../pages/ucenter/ucenter.vue'
import  seacher  from '../pages/home/seacher/seacher';
import itemDeaial from '../pages/item/itemDeaial/itemDeaial'


export default[
    {
        path: '/home',
       component: home,
       children: [
           {
               path:'/home/seacher',
               component:seacher
           }
       ],
       meta: {
        isShowFoot: true
      }
    },
    {
        path: '/item',
       component: item,
       children: [
        {
            path:'/item/detial',
            component:itemDeaial,
            props:(routes)=>{ return {page:routes.query.page}},
            meta: {
              isShowFoot: true
            },
        },
        
       ],
       meta: {
        isShowFoot: true
      }
    },
    {
        path: '/topic/:type',
        name:'openIn',
        component: topic,
       meta: {
        isShowFoot: true
      },
     
    },
    {
        path: '/cart',
       component: cart,
       meta: {
        isShowFoot: true
      }
    },
    {
        path: '/ucenter',
       component: ucenter
     
    },
     {
        path: '/',
        redirect: '/home'
  }
]