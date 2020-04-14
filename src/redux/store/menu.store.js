/**
 * Created by Liudq on 2020/4/1
 */
import React from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

export const menuStore = {
    list:[
        {name:"商品管理",link:"",key:"1",icon:(<UserOutlined />)},
        {name:"商品类型",link:"",key:"2",icon:(<UploadOutlined />)},
    ],
    defaultSelectedKeys:["1"]
};