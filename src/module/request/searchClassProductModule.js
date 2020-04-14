export const searchClassProductModule = (searchInfo) => {
    return {
        name:searchInfo.name,
        status:searchInfo.status,
        sale:searchInfo.saleWay,
        minPrice:searchInfo.minPrice,
        maxPrice:searchInfo.maxPrice,
    }
}