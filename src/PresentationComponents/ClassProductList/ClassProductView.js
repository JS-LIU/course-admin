import React, {useState} from 'react';
import {Input, Button} from 'antd';
import {ConditionFiltering} from './ConditionFiltering';
import {OneStatusSelect} from '../../AdminComponents/OneStatusSelect';
import {PriceInput} from "./PriceInput";
import {Table} from 'antd';


let conditionFilterList = [
    {
        label: "商品名称",
        colSpan: 6,
        content: () => {
            return (
                <Input placeholder="请输入商品名称"/>
            )
        }
    },
    {
        label: "商品状态",
        colSpan: 4,
        content: () => {
            return (<OneStatusSelect selectInfo={{
                defStatus: 1,
                optionList: [
                    {
                        value: 9999,
                        name: "全部"
                    },
                    {
                        value: 1,
                        name: "未开售"
                    },
                    {
                        value: 2,
                        name: "售卖中"
                    },
                    {
                        value: 3,
                        name: "结束售卖"
                    }
                ]
            }}/>)
        }
    },
    {
        label: "销售渠道",
        colSpan: 4,
        content: () => {
            return (
                <OneStatusSelect selectInfo={{
                    defStatus: 1,
                    optionList: [
                        {
                            value: 9999,
                            name: "全部"
                        },
                        {
                            value: 1,
                            name: "tob"
                        },
                        {
                            value: 2,
                            name: "toc"
                        }
                    ]
                }}/>
            )
        }
    },
    {
        name: "price",
        label: "价格范围",
        colSpan: 9,
        rules: [{
            validator: (rule, value) => {
                console.log(value);
                if ((value.minPrice || value.maxPrice) && (value.minPrice > value.maxPrice)) {
                    return Promise.reject("区间错误");
                }
                return Promise.resolve();
            }
        }],
        content: () => {
            return (<PriceInput/>)
        }
    },
];
const columns = [
    {
        title: '序号',
        width: 100,
        dataIndex: 'index',
        key: 'index',
        fixed: 'left',
    },
    {
        title: '商品名称',
        width: 200,
        dataIndex: 'goodName',
        key: 'goodName',
        fixed: 'left',
    },
    {
        title: '商品编号',
        dataIndex: 'goodNo',
        key: 'goodNo',
        width: 150,
    },
    {
        title: '销售渠道',
        dataIndex: 'saleMode',
        key: 'saleMode',
        width: 150,
    },
    {
        title: '适用年级',
        dataIndex: 'suitableGrade',
        key: 'suitableGrade',
        width: 150,
    },
    {
        title: '商品定价',
        dataIndex: 'goodPrice',
        key: 'goodPrice',
        width: 150,
    },
    {
        title: '课程卡支付',
        dataIndex: 'ifCardPay',
        key: 'ifCardPay',
        width: 150,
    },
    {
        title: '无班级销售',
        dataIndex: 'ifNoLessonSale',
        key: 'ifNoLessonSale',
        width: 150,
    },
    {
        title: '渠道价格',
        dataIndex: 'saleWayPrice',
        key: 'saleWayPrice',
        width: 150,
    },
    {
        title: '售卖状态',
        dataIndex: 'status',
        key: 'status',
        width: 150,
    },
    {
        title: '可选班级（组）',
        dataIndex: 'optionalClassroom',
        key: 'optionalClassroom',
        width: 150,
    },
    {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a>action</a>,
    },
];
const getClassProductTableData = (list) => {
    console.log("this.props.list",list);
    let data = [];
    for(let i = 0;i < list.length;i++){
        data.push({
            key: i,
            goodName: list[i].goodName,
            goodNo: list[i].goodNo,
            saleMode: list[i].saleMode,
            suitableGrade:`${list[i].minGrade}-${list[i].maxGrade}`,
            goodPrice:list[i].goodPrice,
            ifCardPay:list[i].ifCardPay,
            status:list[i].status,
            optionalClassroom:list[i].optionalClassroom
        })
    }
    return data;
}

export class ClassProductView extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.onSearchProductList({})
    }

    addClassProduct() {
        this.props.history.push("/createClassProduct");
    }

    onFinish(values) {
        console.log(values);
        this.props.onSetSearchInfo(values);
        this.props.onSearchProductList(values)
    }

    render() {
        return (
            <div>
                <ConditionFiltering
                    conditionFilterList={conditionFilterList}
                    initialValues={this.props.searchInfo}
                    onFinish={this.onFinish.bind(this)}
                    // props={this.props}
                />
                <div>
                    <Button
                        onClick={this.addClassProduct.bind(this)}
                        type="primary"
                        style={{
                            marginBottom: 16,
                        }}
                    >
                        新增商品
                    </Button>
                </div>
                <Table columns={columns} dataSource={getClassProductTableData(this.props.list)} scroll={{ x: 1500, y: 300 }} />
            </div>
        )

    }
}