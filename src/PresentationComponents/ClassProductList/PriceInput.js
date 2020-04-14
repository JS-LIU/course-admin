import React, {useState} from "react";
import {Input} from "antd";

export const PriceInput = ({value = {}, onChange}) => {
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const triggerChange = changeValue => {
        onChange({
            minPrice,
            maxPrice,
            ...value,
            ...changeValue
        })
    }
    const onMinPriceChange = e => {
        const newMinPrice = e.target.value || 0;
        setMinPrice(newMinPrice);
        triggerChange({
            minPrice: newMinPrice
        })
    }
    const onMaxPriceChange = e => {
        const newMaxPrice = e.target.value || 0;
        setMaxPrice(newMaxPrice);
        triggerChange({
            maxPrice: newMaxPrice
        })
    }
    return (
        <span style={{display: "flex", alignItems: "center"}}>
            <Input
                type="number"
                placeholder="输入最低价格"
                value={value.minPrice || minPrice}
                onChange={onMinPriceChange}
            />
            <span style={{padding: "0 8px"}}>至</span>
            <Input
                type="number"
                placeholder="输入最高价格"
                value={value.maxPrice || maxPrice}
                onChange={onMaxPriceChange}
            />
        </span>
    )
}