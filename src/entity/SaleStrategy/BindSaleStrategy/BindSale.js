import {SingleSale} from "./SingleSale";
import {CompositeSale} from "./CompositeSale";

export class BindSale{
    constructor() {
        this.bindSaleStrategyList = [SingleSale,CompositeSale];
    }
    selectSingleSale(){
        return new SingleSale();
    }
    selectCompositeSale(){
        return new CompositeSale();
    }

}
export const bindSale = new BindSale();

//  班级组合 关联商品