import {productStore} from "../store/product.store";
export const productReducer = (state = productStore,action)=>{
    const {type , payload } = action;
    switch (type) {
        case "SEARCH_PRODUCT_LIST":
            console.log("productreducer,list====",payload)
            return Object.assign({},state,{list:payload})
        case "SET_SEARCH_INFO":
            return Object.assign({},state,{searchInfo:payload})
        default:
            return state
    }
}