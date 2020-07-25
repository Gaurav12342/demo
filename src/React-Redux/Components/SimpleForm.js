import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Form, Input, Typography, Button, Select, Checkbox, Upload, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { fetchAllCountry, addSlugMaster } from '../Redux/Actions/index';


const { Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const SimpleForm = (props) => {
  const [form] = Form.useForm();
  console.log("props", props);

  useEffect(() => {
    props.fetchAllCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Success',
      description: 'Record insert successfully.',
    });
  };

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlYzE1MGU5M2Y0OGRmNWE1NTlmOGZmNDc5OWE5ZTA1OWRmMWQxYjc0YmFiZjJkYWE3YmNmZmMzZmFiODZlNTZlZWFhMTAyOTM5NjllNDBiIn0.eyJhdWQiOiI1Y2Y0YjJhNjUxYTBkZTI0ZmMwMDQ5MTIiLCJqdGkiOiJhZWMxNTBlOTNmNDhkZjVhNTU5ZjhmZjQ3OTlhOWUwNTlkZjFkMWI3NGJhYmYyZGFhN2JjZmZjM2ZhYjg2ZTU2ZWVhYTEwMjkzOTY5ZTQwYiIsImlhdCI6MTU5MDU3MjI1NCwibmJmIjoxNTkwNTcyMjU0LCJleHAiOjE2MjIxMDgyNTQsInN1YiI6IjVjMTg4MGZmNWY4NWY2MTQ4Y2I4MWQ2YiIsInNjb3BlcyI6W119.m8Ng66C5ywna5G1IKUWbZJS0mLUwDnpVKXLKTOtWtxjvp-MCIlK2SmoNQvD5m14jZrYlsyD_qvSDOr0nhbaPVLUCRP6VUoeUKgG8qtBtquopShq46y9r1W-gzhknv07TsKHCJj7rq2Tged44PkPgdnCliAZvwcksqJ5cUWXXN6S-Hls-EBOOafm0WCJpUk4tibe3fDSzKcSLw5uPArIgRobeAM9lk0rcSZy0MNdCaOPG8_05GULYwobugVcJxn-__4OcwHJpLOkSexwIdLsm0NZqZlNBDSfZjd7oPrBzjzI1ysTvistdb6tO-_M8h_N2Sqn-hkVLTPqkcRXRWMdxG_q-MDv4ekaPLTqPI7HytN4Sss3A6hDT2Deh9IXKpXCCxm0fUrGuHhRmWfMJA92iQmuPse8gi1lBQOMbP_GlTifBDCyr7KNcX9B02Smfk0qh_iWW7ZAb_zcQtOmYNFt7rcH7rNHFXVq1AOs0J7IXUrXd1-851K4sORUl1pnSC9RAKl7cbU5hre8xWMlPnhX3c_UEhcl_vDuLCeJKHzr8PrCh_-IWd4dyyTMD7ljoIEx9egqtWPsFvIXa62sassh0HdSHrN_ORSsR4eKijA5gIlIJc5DhhA3k6MEqd4rnn5veSWPvG4gpI8Gw8ReYpAeq4ZuMIj0fZGyBnb72RqQHxqw";
  const API = 'https://cors-anywhere.herokuapp.com/';

  const fileData = {
    name: 'image',
    action: `${API}http://new.divinesolitaires.com/api/admin/slug-master`,
    headers: {
      authorization: `Bearer ${token}`,
    },
  }

  const handleSubmit = (values, error) => {
    if (values) {
      const data = {
        country_id: values.country_id,
        slug: values.slug,
        is_active: values.is_active,
        seo: {
          meta_title: values.meta_title,
          description: values.description,
          image_alt_tag: values.image_alt_tag,
          image_title_tag: values.image_title_tag,
          meta_robot_option: values.meta_robot_option,
          script: values.script,
          link: values.link,
          meta_keyword: values.meta_keyword,
          // image: values && values.image && values.image.fileList && values.image.fileList.length > 0 && values.image.fileList.map((im) => { return (im.originFileObj.name) }),
          // image: values.image
        },
        footer: {
          title: values.title,
          is_active: values.footerActive,
          // description: content,
        }
      };
      console.log("Values", data);
      props.addSlugMaster(data);
      handleReset();
      openNotificationWithIcon('success');
    } else {
      console.log("Error", error);
    }
  }

  const handleReset = () => {
    form.resetFields();
  }

  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  return (
    <div>
      <Form onFinish={handleSubmit} form={form}>
        <Row>
          <Col span={24}>
            <h2>Basic Details <Button type="primary" onClick={() => { props.history.push("/list-form") }}> Slug Master </Button></h2>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Text>Country</Text>
            <Form.Item name="country_id">
              <Select style={{ width: '100%' }} >
                {props && props.getCountry && props.getCountry.map((dd) => {
                  return (
                    <Option value={dd._id} defaultValue="Select Country">{dd.name}</Option>
                  )
                })}

              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Text>Slug</Text>
            <Form.Item
              name="slug"
              rules={[{ required: false, message: 'Please enter the slug!', },]} >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Text>Active</Text><br />
            <Form.Item name="is_active" valuePropName="checked" >
              <Checkbox />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <h2>SEO</h2>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Text>Meta Title</Text>
            <Form.Item
              name="meta_title"
              rules={[{ required: false, message: 'Please enter the meta title!', },]} >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Text>Meta Keyword</Text>
            <Form.Item
              name="meta_keyword"
              rules={[{ required: false, message: 'Please input your username!', },]} >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Text>Meta Robot Option</Text><br />
            <Form.Item
              name="meta_robot_option"
              rules={[{ required: false, message: 'Please input your username!', },]} >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Text>Image</Text>
            <Form.Item name="image">
              <Upload {...fileData}>
                <Button>
                  <UploadOutlined /> Upload
                </Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Text>Meta Description</Text>
            <Form.Item name="description">
              <TextArea placeholder="textarea with clear icon" allowClear />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Text>Image Alt Tag</Text><br />
            <Form.Item
              name="image_alt_tag"
              rules={[{ required: false, message: 'Please input your username!', },]} >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}>
            <Text>Image Title Tag</Text><br />
            <Form.Item
              name="image_title_tag"
              rules={[{ required: false, message: 'Please input your username!', },]} >
              <Input />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Text>Canonical Tag</Text>
            <Form.Item name="link">
              <Input addonBefore={selectBefore} defaultValue="mysite" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Text>Script</Text>
            <Form.Item name="script">
              <TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <h2>Footer</h2>
          </Col>

          <Col span={12}>
            <Text>Title</Text><br />
            <Form.Item
              name="title"
              rules={[{ required: false, message: 'Please input your username!', },]} >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Text>Active</Text><br />
            <Form.Item name="footerActive" valuePropName="checked">
              <Checkbox />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Text>Script</Text>
            <Form.Item name="script">
              <TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>

        <Row justify="end">
          <Col span={3}><Button type="primary" htmlType="submit"> Save & Continue </Button></Col>
          <Col span={2}><Button type="primary"> Save </Button></Col>
          <Col ><Button onClick={handleReset} > Reset </Button></Col>
        </Row>
      </Form>
    </div >
  )
}

const mapStateToProps = state => {
  // console.log(5, state.getCountry)
  return {
    getCountry: state.getCountry
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAddPost: post => {
//       dispatch(addSlugMaster(post));

//     },
//     fetchAllCountry
//   };
// }

// export default withRouter(connect(mapStateToProps, { fetchAllCountry })(SimpleForm));
export default connect(mapStateToProps, { fetchAllCountry, addSlugMaster })(withRouter(SimpleForm));