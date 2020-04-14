import React, {useState} from 'react';
import {Form, Row, Col, Input, Button, message} from 'antd';
import {DownOutlined, UpOutlined} from '@ant-design/icons';
import {PriceInput} from "./PriceInput";
import {SelectProductSale} from "./SelectProductSale";
import {SelectProductStatus} from "./SelectProductStatus";
import {OneStatusSelect} from "../../AdminComponents/OneStatusSelect";

export function ConditionFiltering({conditionFilterList, initialValues, onFinish}) {
    const [form] = Form.useForm();
    // const onFinish = values => {
    //     console.log('Received values from form: ', values);
    // };
    const getGutter = ()=>{
        let gutter = 0;
        for(let i = 0;i < conditionFilterList.length;i++){
            gutter += parseInt(conditionFilterList[i].colSpan)
        }
        return gutter;
    }
    const getField = () => {
        let initialValueKeyList = Object.keys(initialValues);
        console.log(conditionFilterList)
        return conditionFilterList.map((conditionFilter, i) => {
            return (
                <Col span={conditionFilterList[i].colSpan} key={i}>
                    <Form.Item
                        name={initialValueKeyList[i]}
                        label={conditionFilterList[i].label}
                        rules={conditionFilterList[i].rules}
                    >
                        {conditionFilterList[i].content()}
                    </Form.Item>
                </Col>
            )
        })

    }

    return (
        <Form
            form={form}
            name="advanced_search"
            className="ant-advanced-search-form"
            onFinish={onFinish}
            initialValues={initialValues}
        >
            <Row gutter={getGutter()}>
                {getField()}
            </Row>
            {/*<Row gutter={23}>*/}
            {/*    <Col span={6}>*/}
            {/*        <Form.Item*/}
            {/*            name="name"*/}
            {/*            label="商品名称"*/}
            {/*        >*/}
            {/*            <Input placeholder="请输入商品名称"/>*/}
            {/*        </Form.Item>*/}
            {/*    </Col>*/}
            {/*    <Col span={4}>*/}
            {/*        <Form.Item*/}
            {/*            name="status"*/}
            {/*            label="商品状态"*/}
            {/*        >*/}
            {/*            <OneStatusSelect selectInfo={{*/}
            {/*                defStatus: 1,*/}
            {/*                optionList: [*/}
            {/*                    {*/}
            {/*                        value: 9999,*/}
            {/*                        name: "全部"*/}
            {/*                    },*/}
            {/*                    {*/}
            {/*                        value: 1,*/}
            {/*                        name: "未开售"*/}
            {/*                    },*/}
            {/*                    {*/}
            {/*                        value: 2,*/}
            {/*                        name: "售卖中"*/}
            {/*                    },*/}
            {/*                    {*/}
            {/*                        value: 3,*/}
            {/*                        name: "结束售卖"*/}
            {/*                    }*/}
            {/*                ],*/}
            {/*            }}/>*/}
            {/*        </Form.Item>*/}
            {/*    </Col>*/}
            {/*    <Col span={4}>*/}
            {/*        <Form.Item*/}
            {/*            name="sale"*/}
            {/*            label="商品渠道"*/}
            {/*        >*/}
            {/*            <OneStatusSelect selectInfo={{*/}
            {/*                defStatus: 1,*/}
            {/*                optionList: [*/}
            {/*                    {*/}
            {/*                        value: 9999,*/}
            {/*                        name: "全部"*/}
            {/*                    },*/}
            {/*                    {*/}
            {/*                        value: 1,*/}
            {/*                        name: "tob"*/}
            {/*                    },*/}
            {/*                    {*/}
            {/*                        value: 2,*/}
            {/*                        name: "toc"*/}
            {/*                    }*/}
            {/*                ]*/}
            {/*            }}/>*/}
            {/*        </Form.Item>*/}
            {/*    </Col>*/}
            {/*    <Col span={9}>*/}
            {/*        <Form.Item*/}
            {/*            name="price"*/}
            {/*            label="商品价格"*/}
            {/*            rules={[*/}
            {/*                {*/}
            {/*                    validator: (rules, value) => {*/}
            {/*                        console.log("value====", value);*/}
            {/*                        return Promise.resolve();*/}
            {/*                    },*/}
            {/*                },*/}
            {/*            ]}*/}
            {/*        >*/}
            {/*            <PriceInput/>*/}
            {/*        </Form.Item>*/}
            {/*    </Col>*/}
            {/*</Row>*/}

            <Row>
                <Col
                    span={getGutter()}
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        搜索
                    </Button>
                    <Button
                        style={{
                            marginLeft: '8px',
                        }}
                        onClick={() => {
                            form.resetFields();
                        }}
                    >
                        清空
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}
