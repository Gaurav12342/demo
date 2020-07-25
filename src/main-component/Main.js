import React from 'react';
import { withRouter } from 'react-router-dom';
import HeaderPage from '../main-component/HeaderPage';
// import FooterPage from './FooterPage';
import { Layout } from 'antd';

const { Content } = Layout;

const Main = (props) => {
  return (
    <div>
      <div>
        <HeaderPage />
      </div>
      <div>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
            {props.children}
          </div>
        </Content>
      </div>
      <div>
        {/* <FooterPage /> */}
      </div>
    </div>
  )
}

export default withRouter(Main);