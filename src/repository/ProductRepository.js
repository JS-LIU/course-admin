import {vipAxios} from "../Util/VipAxios";

class ProductRepository {
    constructor() {
        this.productSaveData = (config) => {
            return vipAxios.interceptors.request.use((config) => {
                return config;
            }, (error) => {
                return Promise.reject(error)
            });
        }
    }

    getClassProductList(postInfo) {
        return vipAxios.post("/admin/product/search",postInfo)
    }
}
export const productRepository = new ProductRepository();