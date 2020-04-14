import React, {useState} from "react";
import {Select} from "antd";
const { Option } = Select;

export function SelectProductSale({ value , onChange, selectInfo }) {
    const [sale, setSale] = useState(selectInfo.defStatus);
    const optionNodes = selectInfo.optionList.map((optionItem, index) => {
        return (
            <Option key={index} value={optionItem.value}>
                {optionItem.name}
            </Option>
        )
    });
    const onSaleChange = newSaleValue => {
        onChange(newSaleValue)
    }
    return (
        <span>
            <Select
                style={selectInfo.style}
                value={value || sale}
                onChange={onSaleChange}
            >
                {optionNodes}
            </Select>
        </span>
    )
}