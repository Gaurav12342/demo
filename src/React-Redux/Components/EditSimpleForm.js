import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col, Form, Input, Button, Typography, Select, Checkbox, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { connect } from "react-redux";
import { getSpecificSlugMaster, updateSlugMaster, fetchAllCountry } from '../Redux/Actions/index';


const { Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const EditSimpleForm = (props) => {
  console.log(">>", props);
  // const [form] = Form.useForm();
  // console.log("Edit simple form", props.getCountry);

  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );

  useEffect(() => {
    props.getSpecificSlugMaster(props.match.params.id);
    props.fetchAllCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const { slug, description } = props.getSpecificData;

  const updateForm = (values) => {
    console.log("update", values);
    // props.form.validateFieldsAndScroll((values, error) => {
    //   if (!error) {
    //     console.log("update", values);
    //   }
    // })
  }

  // const { getFieldDecorator } = props.form;
  let { slug } = props.getSpecificData;
  console.log("slug", props.getSpecificData, slug)
  return (
    <>
    {
      props.getSpecificData ?
  
      <Form onFinish={updateForm} initialValues={{
        slug: slug
      }}>
        <Row>
          <Col span={24}>
            <h2>Update Detail <Button type="primary" onClick={() => { props.history.push("/list-form") }}> Slug Master </Button></h2>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Text>Country</Text>
            <Form.Item name="country_id">
              <Select style={{ width: '100%' }} >
                {props && props.getCountry && props.getCountry.length > 0 && props.getCountry.map((dd) => {
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
              label="slug"
              name="slug"
            // value={props.getSpecificData.slug}
            // rules={[{ required: false, message: 'Please enter the slug!', },]}
            >
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
              <Upload>
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
          <Col span={3}><Button type="primary" htmlType="submit"> Update </Button></Col>
          {/* <Col span={2}><Button type="primary"> Save </Button></Col> */}
          <Col ><Button  > Reset </Button></Col>
        </Row>
      </Form>
     :null}
   </>
  )
}

const mapStateToProps = (state) => {
  console.log("++++", state);
  return {
    getSpecificData: state.getData,
    getCountry: state.getCountry
  }
}
// const DemoForm = Form.create()(EditSimpleForm);
export default withRouter(connect(mapStateToProps, { getSpecificSlugMaster, updateSlugMaster, fetchAllCountry })(EditSimpleForm));