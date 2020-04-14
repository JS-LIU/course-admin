export class VipClass {
    constructor(vipClassInfo) {
        this.id = vipClassInfo.id;
        this.name = vipClassInfo.name;
        this.selected = null;
    }
    select(){

    }
    unSelect(){

    }
    toggleSelect(){
        return !this.selected;
    }
    injectClassProduct(classProduct){
        this.classProduct = classProduct;
    }
}