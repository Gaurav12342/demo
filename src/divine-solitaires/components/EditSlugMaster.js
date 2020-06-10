import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Col, Row, Button, FormGroup, FormFeedback, Label, Input, Container, CustomInput, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand } from 'reactstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import JoditEditor from "jodit-react";

const EditSlugMaster = (props) => {
  const [validated, setValidated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [record, setRecord] = useState([]);
  const [getCountry, setCountry] = useState([]);
  const [content, setContent] = useState('')
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const editor = useRef(null)
  console.log(record && record.seo && record.seo.meta_title)

  const config = {
    readonly: false
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setRecord({
      ...record,
      [name]: value
    });
  }


  const getAllCountry = () => {
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
      `${API}http://new.divinesolitaires.com/api/admin/country-list`,
      bodyParameters,
      config
    )
      .then((response) => {
        setCountry(response)
      })
      .catch()
  }

  const updateForm = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);
    console.log("update change", record);
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlYzE1MGU5M2Y0OGRmNWE1NTlmOGZmNDc5OWE5ZTA1OWRmMWQxYjc0YmFiZjJkYWE3YmNmZmMzZmFiODZlNTZlZWFhMTAyOTM5NjllNDBiIn0.eyJhdWQiOiI1Y2Y0YjJhNjUxYTBkZTI0ZmMwMDQ5MTIiLCJqdGkiOiJhZWMxNTBlOTNmNDhkZjVhNTU5ZjhmZjQ3OTlhOWUwNTlkZjFkMWI3NGJhYmYyZGFhN2JjZmZjM2ZhYjg2ZTU2ZWVhYTEwMjkzOTY5ZTQwYiIsImlhdCI6MTU5MDU3MjI1NCwibmJmIjoxNTkwNTcyMjU0LCJleHAiOjE2MjIxMDgyNTQsInN1YiI6IjVjMTg4MGZmNWY4NWY2MTQ4Y2I4MWQ2YiIsInNjb3BlcyI6W119.m8Ng66C5ywna5G1IKUWbZJS0mLUwDnpVKXLKTOtWtxjvp-MCIlK2SmoNQvD5m14jZrYlsyD_qvSDOr0nhbaPVLUCRP6VUoeUKgG8qtBtquopShq46y9r1W-gzhknv07TsKHCJj7rq2Tged44PkPgdnCliAZvwcksqJ5cUWXXN6S-Hls-EBOOafm0WCJpUk4tibe3fDSzKcSLw5uPArIgRobeAM9lk0rcSZy0MNdCaOPG8_05GULYwobugVcJxn-__4OcwHJpLOkSexwIdLsm0NZqZlNBDSfZjd7oPrBzjzI1ysTvistdb6tO-_M8h_N2Sqn-hkVLTPqkcRXRWMdxG_q-MDv4ekaPLTqPI7HytN4Sss3A6hDT2Deh9IXKpXCCxm0fUrGuHhRmWfMJA92iQmuPse8gi1lBQOMbP_GlTifBDCyr7KNcX9B02Smfk0qh_iWW7ZAb_zcQtOmYNFt7rcH7rNHFXVq1AOs0J7IXUrXd1-851K4sORUl1pnSC9RAKl7cbU5hre8xWMlPnhX3c_UEhcl_vDuLCeJKHzr8PrCh_-IWd4dyyTMD7ljoIEx9egqtWPsFvIXa62sassh0HdSHrN_ORSsR4eKijA5gIlIJc5DhhA3k6MEqd4rnn5veSWPvG4gpI8Gw8ReYpAeq4ZuMIj0fZGyBnb72RqQHxqw";
    const API = 'https://cors-anywhere.herokuapp.com/';
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const data = {
      country_id: record.country_id,
      slug: record.slug,
      meta_title: record.seo.meta_title,
      description: record.seo.description,
      image_alt_tag: record.seo.image_alt_tag,
      image_title_tag: record.seo.image_title_tag,
      meta_robot_option: record.seo.meta_robot_option,
      script: record.seo.script,
      link: record.seo.link,
      meta_keyword: record.seo.meta_keyword,
      title: record.footer.title,
      // eslint-disable-next-line no-dupe-keys
      description: record.footer.description,

    };

    axios.put(`${API}http://new.divinesolitaires.com/api/admin/slug-master/${props.match.params.id}`, data, config)
      .then(
        res => {
          setRecord(res);
          props.history.push("/slug-master")
          console.log("Slug master update successfully.");
        }
      )
      .catch((error) => {
        console.log(error)
      })
  }

  const getData = (id) => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlYzE1MGU5M2Y0OGRmNWE1NTlmOGZmNDc5OWE5ZTA1OWRmMWQxYjc0YmFiZjJkYWE3YmNmZmMzZmFiODZlNTZlZWFhMTAyOTM5NjllNDBiIn0.eyJhdWQiOiI1Y2Y0YjJhNjUxYTBkZTI0ZmMwMDQ5MTIiLCJqdGkiOiJhZWMxNTBlOTNmNDhkZjVhNTU5ZjhmZjQ3OTlhOWUwNTlkZjFkMWI3NGJhYmYyZGFhN2JjZmZjM2ZhYjg2ZTU2ZWVhYTEwMjkzOTY5ZTQwYiIsImlhdCI6MTU5MDU3MjI1NCwibmJmIjoxNTkwNTcyMjU0LCJleHAiOjE2MjIxMDgyNTQsInN1YiI6IjVjMTg4MGZmNWY4NWY2MTQ4Y2I4MWQ2YiIsInNjb3BlcyI6W119.m8Ng66C5ywna5G1IKUWbZJS0mLUwDnpVKXLKTOtWtxjvp-MCIlK2SmoNQvD5m14jZrYlsyD_qvSDOr0nhbaPVLUCRP6VUoeUKgG8qtBtquopShq46y9r1W-gzhknv07TsKHCJj7rq2Tged44PkPgdnCliAZvwcksqJ5cUWXXN6S-Hls-EBOOafm0WCJpUk4tibe3fDSzKcSLw5uPArIgRobeAM9lk0rcSZy0MNdCaOPG8_05GULYwobugVcJxn-__4OcwHJpLOkSexwIdLsm0NZqZlNBDSfZjd7oPrBzjzI1ysTvistdb6tO-_M8h_N2Sqn-hkVLTPqkcRXRWMdxG_q-MDv4ekaPLTqPI7HytN4Sss3A6hDT2Deh9IXKpXCCxm0fUrGuHhRmWfMJA92iQmuPse8gi1lBQOMbP_GlTifBDCyr7KNcX9B02Smfk0qh_iWW7ZAb_zcQtOmYNFt7rcH7rNHFXVq1AOs0J7IXUrXd1-851K4sORUl1pnSC9RAKl7cbU5hre8xWMlPnhX3c_UEhcl_vDuLCeJKHzr8PrCh_-IWd4dyyTMD7ljoIEx9egqtWPsFvIXa62sassh0HdSHrN_ORSsR4eKijA5gIlIJc5DhhA3k6MEqd4rnn5veSWPvG4gpI8Gw8ReYpAeq4ZuMIj0fZGyBnb72RqQHxqw";
    const API = 'https://cors-anywhere.herokuapp.com/';
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    axios.get(`${API}http://new.divinesolitaires.com/api/admin/slug-master/${id}`, config
    )
      .then((response) => {
        setRecord(response.data.data);
        getAllCountry();
      })
      .catch()
  }
  useEffect(() => {
    getData(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Edit Slug Master</NavbarBrand>
        <Button outline color="danger" onClick={() => { props.history.push("/slug-master") }}>Slug Master</Button>
      </Navbar><br />
      <Form onSubmit={updateForm} noValidate validated={validated} >
        <Navbar color="light" light expand="md">
          <NavbarBrand >Basic Detail</NavbarBrand>
        </Navbar>
        <Row form>
          <Col md={5}>
            <FormGroup>
              <Label >Country</Label>
              <Input type="select" name="country_id" onChange={handleChange} id="exampleSelect">
                {getCountry && getCountry.data && getCountry.data.data && getCountry.data.data.list && getCountry.data.data.list.length > 0 && getCountry.data.data.list.map((country, index) => {
                  return (
                    <option key={index} value={country._id}>{country.name}</option>
                  )
                })}
              </Input>
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label >Slug</Label>
              <Input type="text" name="slug" id="slug" onChange={handleChange} value={record.slug} required />
              <FormFeedback >Plz enter the slug</FormFeedback>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleCheckbox">Active</Label>
              <div>
                <CustomInput type="checkbox" id="exampleCustomCheckbox" />
              </div>
            </FormGroup>
          </Col>
        </Row>
        <Navbar color="light" light expand="md">
          <NavbarBrand>SEO</NavbarBrand>
        </Navbar>
        <Row>
          <Col xs="6" sm="4">
            <FormGroup>
              <Label>Meta Title</Label>
              <Input type="text" name="meta_title" id="meta_title" onChange={handleChange} value={record && record.seo && record.seo.meta_title ? record.seo.meta_title : ""} />
              <FormFeedback >Plz enter the meta title</FormFeedback>
            </FormGroup>
          </Col>
          <Col xs="6" sm="4">
            <FormGroup>
              <Label>Meta Keyword</Label>
              <Input type="text" name="meta_keyword" id="meta_keyword" onChange={handleChange} value={record && record.seo && record.seo.meta_keyword ? record.seo.meta_keyword : ""} />
              <FormFeedback >Plz enter the meta keyword</FormFeedback>
            </FormGroup>
          </Col>
          <Col sm="4">
            <FormGroup>
              <Label>Meta Robot Option </Label>
              <Input type="text" name="meta_robot_option" id="meta_robot_option" onChange={handleChange} value={record && record.seo && record.seo.meta_robot_option ? record.seo.meta_robot_option : ""} />
              <FormFeedback >Plz enter the meta robot option</FormFeedback>
            </FormGroup>
          </Col>
        </Row>

        <Row xs="3">
          <Col>
            <FormGroup>
              <Label>Image</Label>
              <CustomInput type="file" name="image" id="image" />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Meta Description</Label>
              <Input type="textarea" name="description" id="description" onChange={handleChange} value={record && record.seo && record.seo.description ? record.seo.description : ""} />
              <FormFeedback >Plz enter the description</FormFeedback>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Image ALT Tag  </Label>
              <Input type="text" name="image_alt_tag" id="image_alt_tag" onChange={handleChange} value={record && record.seo && record.seo.image_alt_tag ? record.seo.image_alt_tag : ""} />
              <FormFeedback >Plz enter the image alt tag</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label>Image Title Tag </Label>
              <Input type="text" name="image_title_tag" id="image_title_tag" onChange={handleChange} value={record && record.seo && record.seo.image_title_tag ? record.seo.image_title_tag : ""} />
              <FormFeedback >Plz enter the image title tag</FormFeedback>
            </FormGroup>
          </Col>
        </Row>
        <Row xs="3">
          <Col>
            <Label>Canonical Tag</Label>
            <InputGroup>
              <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                <DropdownToggle caret> http </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>http</DropdownItem>
                  <DropdownItem header>https</DropdownItem>
                </DropdownMenu>
              </InputGroupButtonDropdown>
              <Input type="text" name="link" id="link" onChange={handleChange} value={record && record.seo && record.seo.link ? record.seo.link : ""} />
              <FormFeedback >Plz enter the website</FormFeedback>
            </InputGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Script</Label>
              <Input type="textarea" name="script" id="script" onChange={handleChange} value={record && record.seo && record.seo.script ? record.seo.script : ""} />
            </FormGroup>
          </Col>
          <Col></Col>
        </Row>
        <Navbar color="light" light expand="md">
          <NavbarBrand>Footer</NavbarBrand>
        </Navbar>
        <Row xs="2">
          <Col>
            <FormGroup>
              <Label for="exampleEmail">Title</Label>
              <Input type="text" name="title" id="title" onChange={handleChange} value={record && record.footer && record.footer.title ? record.footer.title : ""} />
              <FormFeedback >Plz enter the title</FormFeedback>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleCheckbox">Active</Label>
              <div>
                <CustomInput type="checkbox" id="footerActive" name="footerActive" value={record && record.footer && record.footer.is_active ? record.footer.is_active.checked : ""} />
              </div>
            </FormGroup>
          </Col>
        </Row>

        <Row xs="1">
          <Col>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              {/* <Input type="textarea" name="description" id="description" onChange={handleChange} value={record.description} /> */}
              <JoditEditor
                ref={editor}
                value={record && record.footer && record.footer.description ? record.footer.description : content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => { }}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Button type="submit" className="float-right" color="secondary">Update</Button>&nbsp;
            <Button type="submit" className="float-right" outline color="secondary" onClick={() => { props.history.push("/slug-master") }}>Cancel</Button>
          </Col><br />
        </Row>
      </Form>
    </Container >
  )
}

export default withRouter(EditSlugMaster);