import {connect} from 'react-redux';
import {searchProductList,onSetSearchInfo} from "../../redux/actions/productActions";
import {ClassProductView} from "../../PresentationComponents/ClassProductList/ClassProductView";
import {productService} from "../../service/ProductService";
import {searchClassProductModule} from "../../module/request/searchClassProductModule";

const mapStateToProps = state => {
    return {
        searchInfo:state.productReducer.searchInfo,
        list:state.productReducer.list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSearchProductList: searchInfo => {
            let postInfo = searchClassProductModule(searchInfo);
            return productService.getClassProductList(postInfo).then((data)=>{
                console.log(data);
                dispatch(searchProductList(data.data.data.list))
            })
        },
        onSetSearchInfo:searchInfo =>{
            dispatch(onSetSearchInfo(searchInfo));
        },

    }
}


export const VisibleClassProduct = connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassProductView)