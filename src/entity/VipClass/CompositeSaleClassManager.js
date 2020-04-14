import {SaleClassGroup} from "./SaleClassGroup";

export class CompositeSaleClassManager {
    constructor(list) {
        this.list = this.createSaleClassGroupList(list);
    }
    createSaleClassGroupList(list){
        for(let i = 0;i < list.length;i++){
            this.list.push(new SaleClassGroup(list[i]))
        }
    }
}