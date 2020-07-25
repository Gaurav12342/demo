import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterPage = () => {
  return (
    <div>
      <Layout>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  )
}

export default FooterPage;