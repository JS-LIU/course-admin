const SEARCH_PRODUCT_LIST = "SEARCH_PRODUCT_LIST";
const SET_SEARCH_INFO = "SET_SEARCH_INFO";
export function searchProductList(list){
    return {
        type:SEARCH_PRODUCT_LIST,
        payload:list
    }
}
export function onSetSearchInfo(searchInfo){
    return {
        type:SET_SEARCH_INFO,
        payload:searchInfo
    }

}