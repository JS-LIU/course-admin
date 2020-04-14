import React, {useState} from "react";
import {Select} from "antd";
const { Option } = Select;

export function SelectProductStatus({ value, onChange, selectInfo }) {
    const [status, setStatus] = useState(selectInfo.defStatus);
    const optionNodes = selectInfo.optionList.map((optionItem, index) => {
        return (
            <Option key={index} value={optionItem.value}>
                {optionItem.name}
            </Option>
        )
    });
    const onStatusChange = newStatus => {
        onChange(newStatus)
    }
    return (
        <span>
            <Select
                style={selectInfo.style}
                value={value || status}
                onChange={onStatusChange}
            >
                {optionNodes}
            </Select>
        </span>
    )
}