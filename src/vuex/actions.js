import {SHOPLIST,ISCHANGE,BANNERLIST,LazyShow} from './mutationsType'
import { reqRight,lazyShow } from '../api';

export default {
    shopList({commit,state},data){
        console.log(commit,data,'55')
        commit(SHOPLIST,data)
    },
    isChange({commit},isChange){
        commit(ISCHANGE,isChange)
    },
   async banner({commit},bannerList){
        const data =  await reqRight()
        console.log(data,'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')
        commit(BANNERLIST,data.data)
    },
    async lazyShow({commit},{pagesize,size}){
       const result =   await lazyShow(pagesize,size)
       if(result.code==='200'){

           console.log (result.data.result,'0000000000000000000')
           const lazyList = result.data.result 
           commit(LazyShow,lazyList)
        }
    }
}