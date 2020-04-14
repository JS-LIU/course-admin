/**
 * Created by Liudq on 2020/4/1
 */
import React from 'react';
import {Menu} from 'antd';
import {connect} from "react-redux";

function MenuView({defaultSelectedKeys, menuList}) {
    let menuListNodes = menuList.map((menu, index) => {
        return (<Menu.Item key={menu.key}>
            {menu.icon}
            <span>{menu.name}</span>
        </Menu.Item>)
    });
    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={defaultSelectedKeys}>
            {menuListNodes}
        </Menu>
    )
}

const mapStateToProps = state => {
    console.log("state",state);
    return {
        menuList: state.menuReducer.list,
        defaultSelectedKeys: state.menuReducer.defaultSelectedKeys
    }
};
export const VisibleMenuView = connect(mapStateToProps)(MenuView);