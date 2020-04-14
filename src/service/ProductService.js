import {Product} from "../entity/Product/Product";
import {ApplyForSaleProduct} from "../entity/Product/ApplyForSaleProduct";
import {ClassProduct} from "../entity/Product/ClassProduct";
import {saleStrategyService} from "./SaleStrategyService";
import {lessonClassService} from "./LessonClassService";
import {productRepository} from "../repository/ProductRepository";

class ProductService {

    getClassProductList(postInfo){
        return productRepository.getClassProductList(postInfo);
    }

    createProduct(name) {
        return new Product(name);
    }

    createApplySaleProduct(product) {
        return new ApplyForSaleProduct(product)
    }
    setLessonClassify(applyForSaleProduct,lessonClassifyId){
        let lessonClass = lessonClassService.findLessonClassifyById(lessonClassifyId);
        applyForSaleProduct.setLessonByLessonClassify(lessonClass);
        return applyForSaleProduct;

    }
    createClassProduct(applyForSaleProduct){
        return new ClassProduct(applyForSaleProduct);
    }
    /**
     * 添加按用途分类的销售策略
     * @param applyForSaleProduct
     * @param id
     * @returns {*}
     */
    setUsedSaleStrategy(applyForSaleProduct, id){
        let usedSaleStrategy = saleStrategyService.findAndCreateUsedStrategyById(id);
        applyForSaleProduct.setUsedSaleStrategy(usedSaleStrategy);
        return applyForSaleProduct;
    }

    /**
     * 添加是否绑定售卖销售策略
     * @param classProduct
     * @param id  strategyItem
     * @returns {*}
     */
    setBindSaleStrategy(classProduct, id){
        let bindSaleStrategy = saleStrategyService.findAndCreateBindSaleStrategy(id);
        classProduct.setBindSaleStrategy(bindSaleStrategy);
        return classProduct;
    }
    createSaleClassManager(classProduct,list){
        classProduct.bindSaleStrategy.createSaleClassManager(list)
    }

    createSaleClassGroup(classProduct,list){
        classProduct.bindSaleStrategy.saleClassManager.createSaleClassGroupList(list);
    }
    addVipClassToSaleGroup(saleGroup,vipClass){
        return saleGroup.addVipClass(vipClass);

    }
}

export const productService = new ProductService();