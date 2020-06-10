import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Table, Navbar, Button } from 'reactstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import '../../Css/test.css';
import axios from 'axios';


const SlugMaster = (props) => {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    getRecord()
  }, []);

  const getRecord = () => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlYzE1MGU5M2Y0OGRmNWE1NTlmOGZmNDc5OWE5ZTA1OWRmMWQxYjc0YmFiZjJkYWE3YmNmZmMzZmFiODZlNTZlZWFhMTAyOTM5NjllNDBiIn0.eyJhdWQiOiI1Y2Y0YjJhNjUxYTBkZTI0ZmMwMDQ5MTIiLCJqdGkiOiJhZWMxNTBlOTNmNDhkZjVhNTU5ZjhmZjQ3OTlhOWUwNTlkZjFkMWI3NGJhYmYyZGFhN2JjZmZjM2ZhYjg2ZTU2ZWVhYTEwMjkzOTY5ZTQwYiIsImlhdCI6MTU5MDU3MjI1NCwibmJmIjoxNTkwNTcyMjU0LCJleHAiOjE2MjIxMDgyNTQsInN1YiI6IjVjMTg4MGZmNWY4NWY2MTQ4Y2I4MWQ2YiIsInNjb3BlcyI6W119.m8Ng66C5ywna5G1IKUWbZJS0mLUwDnpVKXLKTOtWtxjvp-MCIlK2SmoNQvD5m14jZrYlsyD_qvSDOr0nhbaPVLUCRP6VUoeUKgG8qtBtquopShq46y9r1W-gzhknv07TsKHCJj7rq2Tged44PkPgdnCliAZvwcksqJ5cUWXXN6S-Hls-EBOOafm0WCJpUk4tibe3fDSzKcSLw5uPArIgRobeAM9lk0rcSZy0MNdCaOPG8_05GULYwobugVcJxn-__4OcwHJpLOkSexwIdLsm0NZqZlNBDSfZjd7oPrBzjzI1ysTvistdb6tO-_M8h_N2Sqn-hkVLTPqkcRXRWMdxG_q-MDv4ekaPLTqPI7HytN4Sss3A6hDT2Deh9IXKpXCCxm0fUrGuHhRmWfMJA92iQmuPse8gi1lBQOMbP_GlTifBDCyr7KNcX9B02Smfk0qh_iWW7ZAb_zcQtOmYNFt7rcH7rNHFXVq1AOs0J7IXUrXd1-851K4sORUl1pnSC9RAKl7cbU5hre8xWMlPnhX3c_UEhcl_vDuLCeJKHzr8PrCh_-IWd4dyyTMD7ljoIEx9egqtWPsFvIXa62sassh0HdSHrN_ORSsR4eKijA5gIlIJc5DhhA3k6MEqd4rnn5veSWPvG4gpI8Gw8ReYpAeq4ZuMIj0fZGyBnb72RqQHxqw";
    const API = 'https://cors-anywhere.herokuapp.com/';
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const bodyParameters = {
      key: "value"
    };

    axios.post(
      `${API}http://new.divinesolitaires.com/api/admin/slug-master-list`,
      bodyParameters,
      config
    )
      .then((response) => {
        setRecord(response.data.data.list);
      })
      .catch()
  }

  const deleteRecord = (index) => {
    console.log(index);
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlYzE1MGU5M2Y0OGRmNWE1NTlmOGZmNDc5OWE5ZTA1OWRmMWQxYjc0YmFiZjJkYWE3YmNmZmMzZmFiODZlNTZlZWFhMTAyOTM5NjllNDBiIn0.eyJhdWQiOiI1Y2Y0YjJhNjUxYTBkZTI0ZmMwMDQ5MTIiLCJqdGkiOiJhZWMxNTBlOTNmNDhkZjVhNTU5ZjhmZjQ3OTlhOWUwNTlkZjFkMWI3NGJhYmYyZGFhN2JjZmZjM2ZhYjg2ZTU2ZWVhYTEwMjkzOTY5ZTQwYiIsImlhdCI6MTU5MDU3MjI1NCwibmJmIjoxNTkwNTcyMjU0LCJleHAiOjE2MjIxMDgyNTQsInN1YiI6IjVjMTg4MGZmNWY4NWY2MTQ4Y2I4MWQ2YiIsInNjb3BlcyI6W119.m8Ng66C5ywna5G1IKUWbZJS0mLUwDnpVKXLKTOtWtxjvp-MCIlK2SmoNQvD5m14jZrYlsyD_qvSDOr0nhbaPVLUCRP6VUoeUKgG8qtBtquopShq46y9r1W-gzhknv07TsKHCJj7rq2Tged44PkPgdnCliAZvwcksqJ5cUWXXN6S-Hls-EBOOafm0WCJpUk4tibe3fDSzKcSLw5uPArIgRobeAM9lk0rcSZy0MNdCaOPG8_05GULYwobugVcJxn-__4OcwHJpLOkSexwIdLsm0NZqZlNBDSfZjd7oPrBzjzI1ysTvistdb6tO-_M8h_N2Sqn-hkVLTPqkcRXRWMdxG_q-MDv4ekaPLTqPI7HytN4Sss3A6hDT2Deh9IXKpXCCxm0fUrGuHhRmWfMJA92iQmuPse8gi1lBQOMbP_GlTifBDCyr7KNcX9B02Smfk0qh_iWW7ZAb_zcQtOmYNFt7rcH7rNHFXVq1AOs0J7IXUrXd1-851K4sORUl1pnSC9RAKl7cbU5hre8xWMlPnhX3c_UEhcl_vDuLCeJKHzr8PrCh_-IWd4dyyTMD7ljoIEx9egqtWPsFvIXa62sassh0HdSHrN_ORSsR4eKijA5gIlIJc5DhhA3k6MEqd4rnn5veSWPvG4gpI8Gw8ReYpAeq4ZuMIj0fZGyBnb72RqQHxqw";
    const API = 'https://cors-anywhere.herokuapp.com/';
    let config = {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Authorization: `Bearer ${token}`
      }
    }

    const newInventory = () => record.filter((item, itemIndex) => index !== itemIndex);
    // return setRecord([...newInventory]),

    axios.delete(
      `${API}http://new.divinesolitaires.com/api/admin/slug-master-delete/`, newInventory,
      config,
    )
      .then((response) => {
        // data.splice(id, 1)
        setRecord([...newInventory])
        console.log('successfully delete record....');
        // console.log('data', data);
      })

      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Container>
      <div>
        <Navbar color="light" light expand="md">
          <Button outline color="danger" className="float-right" onClick={() => { props.history.push("/slug-master/add-slug") }}>Add</Button>
        </Navbar><br />
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Slug</th>
              <th>Country</th>
              <th>Meta Title</th>
              <th>Meta Keyword</th>
              <th>Meta Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {record && record.length > 0 && record.map((data, index) => {
              return (
                <tr key={data._id}>
                  <td>{index + 1}</td>
                  <td>{data.slug}</td>
                  {data.country && data.country.name && data.country.name.length > 0 ? <td>{data.country.name} </td> : <td>{""}</td>}
                  {data.seo && data.seo.meta_title && data.seo.meta_title.length > 0 ? <td>{data.seo.meta_title} </td> : <td>{""}</td>}
                  {data.seo && data.seo.meta_keyword && data.seo.meta_keyword.length > 0 ? <td>{data.seo.meta_keyword} </td> : <td>{""}</td>}
                  {data.seo && data.seo.description && data.seo.description.length > 0 ? <td>{data.seo.description} </td> : <td>{""}</td>}
                  {data.is_active === true ? <td>✔</td> : <td><ClearRoundedIcon /></td>}
                  <td>
                    <DeleteIcon onClick={() => { deleteRecord(index) }} />
                    {/* <Modal isOpen={modal} fade={false} toggle={toggle} >
                      <ModalHeader toggle={toggle}>
                        <ModalBody>Are you sure you want to delete ? </ModalBody>
                      </ModalHeader>
                      <ModalFooter>
                        <Button color="primary" onClick={() => { deleteRecord(data._id) }}>Ok</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                      </ModalFooter>
                    </Modal> */}
                    <BorderColorIcon onClick={() => { props.history.push(`/slug-master/edit-slug/${data._id}`) }} />  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

export default withRouter(SlugMaster);