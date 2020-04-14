
export class ApplyForSaleProduct {
    constructor(product) {
        this.product = product;
        this.lessonClassify = null;
        this.usedSaleStrategy = null;
        this.bindSaleStrategy = null;
    }
    setLessonClassify(lessonClassify){
        this.lessonClassify = lessonClassify;
    }
    setUsedSaleStrategy(strategy){
        this.usedSaleStrategy = strategy;
    }
    setLessonByLessonClassify(){

    }
}