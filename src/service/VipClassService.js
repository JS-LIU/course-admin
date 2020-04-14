class VipClassService {
    injectClassProduct(classProduct,saleClassGroup){
        saleClassGroup.injectClassProduct(classProduct);
        return saleClassGroup;
    }
    getVipClassList(){

    }
}
export const vipClassService = new VipClassService();