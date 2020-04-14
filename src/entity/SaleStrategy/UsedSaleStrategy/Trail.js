 export class Trail {
    constructor() {
        this.name = "体验课";
        this.id = 1;
    }
    //  转化率
    calcTransactionRate(totalSaleMount,trueToUsefulMount){
        return trueToUsefulMount / totalSaleMount * 100 + "%";
    }
}