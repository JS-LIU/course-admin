/**
 * Created by Liudq on 2020/3/31
 */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import HomeViewStyle from './HomeViewStyle.css';

const { Header, Content, Footer, Sider } = Layout;
import { VisibleMenuView } from "./Menu/MenuView";
// import { ClassProductView } from "../ClassProductList/ClassProductView";
import {VisibleClassProduct} from "../../ContainerComponents/ClassProductContainer/VisibleClassProduct";
import { CreateClassProductView } from "../CreateClassProduct/CreateClassProductView";
export class HomeView extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout className="components_home">
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div id="common_logo">
                        <div className="logo_img">教研管理平台</div>
                    </div>
                    <VisibleMenuView />
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/classProductList" component={VisibleClassProduct} />
                            <Route path="/createClassProduct" component={CreateClassProductView} />
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>github name JS-LIU company vipcode</Footer>
                </Layout>
            </Layout>
        );
    }
}