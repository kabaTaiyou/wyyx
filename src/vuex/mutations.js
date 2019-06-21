import { SHOPLIST ,ISCHANGE,BANNERLIST,LazyShow} from './mutationsType'

export default{
    [SHOPLIST](state, data){
        state.shopList = data
    },
    [ISCHANGE](state,isChange){
        state.isChange = isChange
    },
    [BANNERLIST](state,data){
        state.bannerList = data
    },
    [LazyShow](state,list){
        state.LazyShowList.push(...list)
    }
}