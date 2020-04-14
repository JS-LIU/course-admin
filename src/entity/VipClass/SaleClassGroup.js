export class SaleClassGroup{
    constructor(saleClassGroupInfo) {
        this.name = saleClassGroupInfo.name;
        this.id = saleClassGroupInfo.id;
        this.startTime = saleClassGroupInfo.startTime;

        this.vipClassList = [];
    }
    addVipClass(vipClass){
        this.vipClassList.push(vipClass);
        return  this.vipClassList;
    }
    removeVipClass(vipClass){
        let removeItemIndex = this.vipClassList.findIndex((vipClassItem,index)=>{
            return vipClassItem.id === vipClass.id;
        });
        this.vipClassList.splice(removeItemIndex,1);
        vipClass.unSelect();
        return this.vipClassList;
    }
    matchVipClassByVipClassList(vipClassList){

    }
}