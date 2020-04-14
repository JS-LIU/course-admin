import {SingleSaleClassManager} from "../../VipClass/SingleSaleClassManager";

export class SingleSale {
    constructor() {
        this.id = 1;
        this.name = "单独销售";
        this.saleClassManager = null;
    }

    createSaleClassManager(list) {
        this.saleClassManager = new SingleSaleClassManager(list);
    }
}