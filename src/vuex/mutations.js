import { SHOPLIST } from './mutationsType'

export default{
    [SHOPLIST](state, data){
        state.shopList = data
    }
}