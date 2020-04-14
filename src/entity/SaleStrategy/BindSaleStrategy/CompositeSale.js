import {CompositeSaleClassManager} from "../../VipClass/CompositeSaleClassManager";

export class CompositeSale{
    constructor() {
        this.id = 2;
        this.name = "组合销售";
        this.saleClassManager = null;
    }
    createSaleClassManager() {
        return new CompositeSaleClassManager([]);
    }
}