import React, {useState} from 'react';
import {Form, Input, Select, Button} from 'antd';

const {Option} = Select;
// testexample
// selectInfo = {
//     style: { width: 80 },
//     defStatus:1,
//     optionList: [
//         {
//             value: 1,
//             name: "全部"
//         }
//     ]

// };

export function OneStatusSelect({value, onChange, selectInfo}) {
    const [status, setStatus] = useState(selectInfo.defStatus);
    const optionNodes = selectInfo.optionList.map((optionItem, index) => {
        return (
            <Option key={index} value={optionItem.value}>
                {optionItem.name}
            </Option>
        )
    });
    const onStatusChange = newStatus => {
        onChange(newStatus);
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