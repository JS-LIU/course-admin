import {used} from "../entity/SaleStrategy/UsedSaleStrategy/UsedSale";
import {bindSale} from "../entity/SaleStrategy/BindSaleStrategy/BindSale";

class SaleStrategyService {
    findUsedStrategyById(id) {
        return used.usedSaleStrategyList.find((usedSaleItem, index) => {
            return usedSaleItem.id === id;
        });
    }

    /**
     * 找到并创建用途销售策略
     * @param id
     * @returns {*}
     */
    findAndCreateUsedStrategyById(id){
        return this.createSaleStrategy(this.findUsedStrategyById(id));
    }
    /**
     * 查找未new的绑定营销策略
     * @param id
     * @returns {SingleSale | CompositeSale}
     */
    findBindSaleStrategyById(id) {
        return bindSale.bindSaleStrategyList.find((bindSaleItem,index) => {
            return bindSaleItem.id === id;
        });
    }

    /**
     * 创建营销策略
     * @param Strategy
     * @returns {*}
     */
    createSaleStrategy(Strategy){
        return new Strategy();
    }

    /**
     * 找到并创建相应的绑定营销策略(new Com() / new Single());
     * @param id
     * @returns {*}
     */
    findAndCreateBindSaleStrategy(id){
        return this.createSaleStrategy(this.findBindSaleStrategyById(id));
    }
}

export const saleStrategyService = new SaleStrategyService();