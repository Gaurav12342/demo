import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table, Modal, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { DeleteTwoTone, EditTwoTone, ExclamationCircleOutlined } from '@ant-design/icons';
// import { deleteSpecificData } from '../Redux/Actions/index';
import { fetchAllData } from '../Redux/Actions/index';

const { confirm } = Modal;

const ListForm = (props) => {
  // console.log({ props });
  // const { classes } = props;


  useEffect(() => {
    // const { dispatch } = props;
    fetchAllData();
  });

  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleOutlined />,
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        props.onDelete(id);
        // console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const columns = [
    {
      title: '#',
      dataIndex: 'key',
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
    },
    {
      title: 'Country',
      dataIndex: 'country',
    },
    {
      title: 'Meta Title',
      dataIndex: 'metaTitle',
    },
    {
      title: 'Meta Keyword',
      dataIndex: 'metaKeyword',
    },
    {
      title: 'Meta Description',
      dataIndex: 'metaDescription',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (text, record) => {
        // console.log({ record });
        return (
          <>
            <DeleteTwoTone onClick={() => { showDeleteConfirm(record.id) }} />
            <EditTwoTone onClick={() => { props.history.push(`/list-form/edit-form/${record.id}`) }} />
          </>
        )
      }
    },
  ];
  const data = props && props.masterData && props.masterData.length > 0 && props.masterData.map((data, index) => {
    return {
      key: `${index + 1}`,
      id: data._id,
      slug: data.slug,
      country: data.country && data.country.name ? data.country.name : "",
      metaTitle: data.seo && data.seo.meta_title ? data.seo.meta_title : "",
      metaKeyword: data.seo && data.seo.meta_keyword ? data.seo.meta_keyword : "",
      metaDescription: data.seo && data.seo.description ? data.seo.description : "",
      status: data.is_active ? "True" : "False",
    }
  })

  return (
    <div>
      <h4>Slug Master  <Button type="primary" onClick={() => { props.history.push("/simple-form") }}> Add Data </Button></h4>
      <Table columns={columns} dataSource={data} size="middle" />
    </div>
  )
}

// ListForm.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// ListForm.propTypes = {
//   masterData: PropTypes.object.isRequired
// }

const mapStateToProps = state => {
  return {
    masterData: state.masterData
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onDelete: id => {
//       dispatch(deleteSpecificData(id));
//     }
//   };
// };

export default withRouter(connect(mapStateToProps, fetchAllData)(ListForm));