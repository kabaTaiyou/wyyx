import home from '../pages/home/home.vue'
import item from '../pages/item/item.vue'
import topic from '../pages/topic/topic.vue'
import cart from '../pages/cart/cart.vue'
import ucenter from '../pages/ucenter/ucenter.vue'
import  seacher  from '../pages/home/seacher/seacher';

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
       meta: {
        isShowFoot: true
      }
    },
    {
        path: '/topic',
       component: topic,
       meta: {
        isShowFoot: true
      }
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
       component: ucenter,
       meta: {
        isShowFoot: true
      }
    },
     {
        path: '/',
        redirect: '/home'
  }
]