import {VipClass} from "./VipClass";
import {SaleClassGroup} from "./SaleClassGroup";

export class SingleSaleClassManager {
    constructor(list) {
        this.list = this.createSaleClassGroupList(list);
    }
    createSaleClassGroupList(list){
        let saleGroupList = [];
        for(let i = 0;i < list.length;i++){
            let saleClassGroup = new SaleClassGroup(list[i]);
            saleGroupList.push(saleClassGroup.addVipClass(new VipClass(list[i])));
        }
        return saleGroupList;
    }
}