import {Trail} from "./Trail";
import {Official} from "./Official";
/**
 * 销售策略：按用途划分
 * 体验课、是正课（试用装还是正装）
 */
export class UsedSale {
    constructor() {
        this.usedSaleStrategyList = [Trail,Official];
    }
    selectTrail(){
        return new Trail();
    }
    selectOfficial(){
        return new Official();
    }
}
export const used = new UsedSale();