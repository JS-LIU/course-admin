import React, {useState} from 'react';
import moment from 'moment';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    DatePicker,
    Upload,
    message,
    Divider
} from 'antd';

const {Option} = Select;
const {RangePicker} = DatePicker;
import {UploadOutlined, LoadingOutlined, PlusOutlined, MinusCircleOutlined} from '@ant-design/icons';
import {OneStatusSelect} from '../../AdminComponents/OneStatusSelect';
import createClassStyle from './createClassStyle.css';
// 商品名称
const InputProductName = () => {
    return (
        <Form.Item
            name="goodName"
            label="商品名称"
            rules={[
                {
                    required: true,
                    message: '商品名称不能为空',
                },
            ]}
        >
            <Input placeholder="商品名称"/>
        </Form.Item>
    )
};
/**
 * label 商品类型
 * 抽象：销售策略之一 （小样还是正品，小样便宜量小，正品贵量大）
 * 此时商品的意图已经不是官方商品库中有什么商品了，而是先要拿出来卖了所以此时就是创建一个【申请售卖的商品/ApplyForSaleProduct】
 * 【申请售卖的商品】中选择他的用途
 */
const SaleStrategyByIfTrial = () => {
    return (
        <Form.Item
            name="mainTypeId"
            label="商品类型"
            rules={[
                {
                    required: true,
                    message: '选择商品类型',
                },
            ]}
        >
            <OneStatusSelect selectInfo={{
                defStatus: 1,
                optionList: [
                    {
                        value: 1,
                        name: "体验课"
                    },
                    {
                        value: 2,
                        name: "正课"
                    }
                ]
            }}/>
        </Form.Item>
    )
};
/**
 * label 一级类型
 * 抽象：商品本身 （可乐还是雪碧，scratch，python）
 */
const Product = () => {
    return (
        <Form.Item
            name="oneLevelTypeId"
            label="一级类型"
            rules={[
                {
                    required: true,
                    message: '选择商品类型',
                },
            ]}>
            <OneStatusSelect selectInfo={{
                defStatus: 1,
                optionList: [
                    {
                        value: 1,
                        name: "scratch"
                    },
                    {
                        value: 2,
                        name: "python"
                    }
                ]
            }}/>
        </Form.Item>
    )
};

/**
 * label 销售渠道
 * 抽象：卖给大客户和卖给散户（批发和零售）
 */
const SaleWay = () => {
    return (
        <Form.Item
            name="saleMode"
            label="商品渠道"
            rules={[
                {
                    required: true,
                    message: '选择销售渠道',
                },
            ]}>
            <Radio.Group>
                <Radio.Button value="1">C端销售</Radio.Button>
                <Radio.Button value="2">B端销售</Radio.Button>
            </Radio.Group>
        </Form.Item>
    )
};
/**
 * label 商品组合
 * 抽象：销售策略（买雪碧送可乐，买可乐推荐你买雪碧）
 */
const SaleStrategyByBindSale = () => {
    return (
        <Form.Item
            name="combinationType"
            label="商品渠道"
            rules={[
                {
                    required: true,
                    message: '商品组合',
                },
            ]}>
            <Radio.Group>
                <Radio.Button value="1">单独班级</Radio.Button>
                <Radio.Button value="2">组合班级</Radio.Button>
            </Radio.Group>
        </Form.Item>
    )
};

/**
 * label 适合年级
 * 抽象：商品的规格（尺码x, xl）
 */

const SpecificationForMinGrade = () => {
    return (
        <Form.Item
            name="minGrade"
            label="适合年级"
            rules={[
                {
                    required: true,
                    message: '选择适合年级',
                }
            ]}>
            <span>
                <OneStatusSelect selectInfo={{
                    style: {width: 80},
                    defStatus: 1,
                    optionList: [
                        {
                            value: 1,
                            name: "一年级"
                        },
                        {
                            value: 2,
                            name: "二年级"
                        }
                    ]
                }}/>
                <span style={{padding: "0 20px"}}>至</span>
                <OneStatusSelect selectInfo={{
                    style: {width: 80},
                    defStatus: 1,
                    optionList: [
                        {
                            value: 1,
                            name: "一年级"
                        },
                        {
                            value: 2,
                            name: "二年级"
                        }
                    ]
                }}/>
            </span>
        </Form.Item>
    )
};

/**
 * label 上架时间
 * @returns {*}
 * @constructor
 */
function onChangeSoldTime(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const ClassProductSoldStartTime = () => {
    return (
        <Form.Item
            name="sellStartTimeL"
            label="上架时间"
            rules={[
                {
                    required: true,
                    message: '请选择上架时间',
                }
            ]}
        >
            <RangePicker
                ranges={{
                    Today: [moment(), moment()],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                }}
                showTime
                format="YYYY/MM/DD HH:mm:ss"
                onChange={onChangeSoldTime}
            />

        </Form.Item>
    )
}

/**
 * label 商品特色
 */
function handleChange(value) {
    console.log(`selected ${value}`);
}

const ClassProductFeature = () => {
    return (
        <Form.Item
            name="feature"
            label="商品特色"
        >
            <Select mode="tags" style={{width: '100%'}} onChange={handleChange} tokenSeparators={[',']}/>
        </Form.Item>
    )
}
const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
//  课程视频
const ClassProductVideo = () => {
    return (
        <Form.Item
            name="picInfo"
            label="课程视频"
            rules={[
                {
                    required: true,
                    message: '请选择上架时间',
                }
            ]}
        >
            <Upload {...props}>
                <Button>
                    <UploadOutlined/> 上传视频
                </Button>
            </Upload>
        </Form.Item>
    )
}

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
    state = {
        loading: false,
    };

    handleChange = info => {
        if (info.file.status === 'uploading') {
            this.setState({loading: true});
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };

    render() {
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined/> : <PlusOutlined/>}
                <div className="ant-upload-text">{this.props.pathName}</div>
            </div>
        );
        const {imageUrl} = this.state;
        return (
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
            </Upload>
        );
    }
}

//  商品图片
const ClassProductPicList = () => {
    return (
        <Form.Item
            name="pic"
            label="上传图片"
        >
            <div style={{display: "flex"}}>
                <Avatar pathName={"官网图片"}/>
                <Avatar pathName={"移动端图片"}/>
                <Avatar pathName={"详情图"}/>
                <Avatar pathName={"常见问题"}/>
            </div>

        </Form.Item>
    )
}
//  商品定价
const ClassProductPrice = () => {
    return (
        <Form.Item
            name="goodPrice"
            label="商品价格"
            rules={[
                {
                    required: true,
                    message: '价格不能为空',
                },
            ]}
        >
            <Input placeholder="商品价格"/>
        </Form.Item>
    )
}
//  课程卡支付
const CanUseCardPay = () => {
    return (
        <Form.Item
            name="ifCardPay"
            label="课程卡支付"
            rules={[
                {
                    required: true,
                    message: '选择课程卡支付',
                },
            ]}>
            <OneStatusSelect selectInfo={{
                defStatus: 0,
                optionList: [
                    {
                        value: 0,
                        name: "不支持"
                    },
                    {
                        value: 1,
                        name: "支持"
                    }
                ]
            }}/>
        </Form.Item>
    )
};
//  无班级销售
const SupportNullSaleClass = () => {
    return (
        <Form.Item
            name="ifNoLessonSale"
            label="无班级销售"
            rules={[
                {
                    required: true,
                    message: '选择是否支持无班级销售',
                },
            ]}>
            <OneStatusSelect selectInfo={{
                defStatus: 0,
                optionList: [
                    {
                        value: 0,
                        name: "不支持"
                    },
                    {
                        value: 1,
                        name: "支持"
                    }
                ]
            }}/>
        </Form.Item>
    )
}

//  新增渠道价格
const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 20},
    },
};
const formItemButton = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
}
const provinceData = [{name:'电话销售',key:"phone",id:1}, {name:'线下推销',key:"outline",id:2}];
const cityData = {
    "phone": [{price:'999',id:1}, {price:'888',id:2}, {price:'777',id:3}],
    "outline": [{price:'999',id:1}, {price:'888',id:2}, {price:'777',id:3}]
};

class SaleChannelItem extends React.Component {
    state = {
        cities: cityData[provinceData[0].key],
        secondCity: cityData[provinceData[0].key][0],
    };

    handleProvinceChange = value => {
        console.log("handleProvinceChange:===value====:",value);
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0],
        });
    };

    onSecondCityChange = value => {
        console.log("onSecondCityChange====value====:",value);
        this.setState({
            secondCity: this.state.cities[value],
        });
    };

    render() {
        const {cities} = this.state;
        return (
            <>
                <Select
                    defaultValue={provinceData[0].name}
                    style={{width: 120}}
                    onChange={this.handleProvinceChange}
                >
                    {provinceData.map((province,index) => (
                        <Option key={province.key}>{province.name}</Option>
                    ))}
                </Select>
                <Select
                    style={{width: 120}}
                    value={this.state.secondCity.price}
                    onChange={this.onSecondCityChange}
                >
                    {cities.map((city,index) => (
                        <Option key={index}>{city.price}</Option>
                    ))}
                </Select>
            </>
        );
    }
}

const SaleChannelWay = () => {
    return (
        <Form.List name="names">
            {(fields, {add, remove}) => {
                return (
                    <div>
                        {fields.map((field, index) => (
                            <Form.Item
                                {...formItemLayout}
                                label={"销售渠道"}
                                required={false}
                                key={field.key}
                            >
                                <span>
                                    <SaleChannelItem/>
                                    <Input style={{width:280}} prefix="￥" value={"100.00"} suffix="RMB" disabled/>
                                </span>

                                {fields.length > 0 ? (
                                    <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        style={{margin: '0 8px'}}
                                        onClick={() => {
                                            remove(field.name);
                                        }}
                                    />
                                ) : null}
                            </Form.Item>
                        ))}
                        <Form.Item
                            // label={" "}
                            {...formItemButton}>
                            <Button
                                type="dashed"
                                onClick={() => {
                                    add();
                                }}
                                style={{width: '20%'}}
                            >
                                <PlusOutlined/> 新增渠道价格
                            </Button>
                        </Form.Item>
                    </div>
                );
            }}
        </Form.List>
    )
}

export function CreateClassProductView() {
    const [componentSize] = useState('middle');
    return (
        <div>
            <Form labelCol={{span: 4}}
                  wrapperCol={{span: 14}}
                  layout="horizontal"
                  initialValues={{size: componentSize}}
                  size={componentSize}
            >
                <Divider orientation="left">基本商品信息</Divider>
                <InputProductName/>
                <SaleStrategyByIfTrial/>
                <Product/>
                <SaleStrategyByBindSale/>
                <SpecificationForMinGrade/>
                <SaleWay/>
                <ClassProductSoldStartTime/>
                <ClassProductFeature/>
                <ClassProductVideo/>
                <ClassProductPicList/>
                <Divider orientation="left">商品价格及渠道</Divider>
                <ClassProductPrice/>
                <CanUseCardPay/>
                <SupportNullSaleClass/>
                <SaleChannelWay/>
            </Form>
        </div>
    )

}