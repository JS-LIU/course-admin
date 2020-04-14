export class ClassProduct{
    constructor(applyForSaleProduct) {
        this.applyForSaleProduct = applyForSaleProduct;
        this.bindSaleStrategy = null;
    }
    setBindSaleStrategy(strategy){
        this.bindSaleStrategy = strategy;
    }
}