import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Col, Row, Button, FormGroup, Label, Input, Container, CustomInput, FormFeedback, InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarBrand } from 'reactstrap';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import JoditEditor from "jodit-react";

const AddSlugMaster = (props) => {
  const [validated, setValidated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [image, setImage] = useState("");
  const [is_active, setIs_active] = useState(false);
  const [footerActive, setFooterActive] = useState(false);
  
  const [getCountry, setCountry] = useState([]);
  console.log("coutrny",getCountry);
  const [content, setContent] = useState('')
  const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
  const editor = useRef(null)
  // const uploadedImage = useRef(null);
  // const imageUploader = useRef(null);

  console.log("Country", getCountry);
  const config = {
    readonly: false
  }

  const [state, setState] = useState({
    country_id: "",
    slug: "",
    meta_title: "",
    description: "",
    image_alt_tag: "",
    image_title_tag: "",
    meta_robot_option: "",
    script: "",
    link: "",
    meta_keyword: "",
    title: "",

  })

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value
    });
  }

  const handleFileUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]))
    // const [image] = e.target.files;
    // if (image) {
    //   const reader = new FileReader();
    //   const { current } = uploadedImage;
    //   current.image = image;
    //   reader.onload = e => {
    //     current.src = e.target.result;
    //   };
    //   setImage(reader.readAsDataURL(image));
    // }
  }

  const handleCheckValue = (e) => {
    setIs_active(e.target.checked)
  }

  const handleFooterCheckValue = (e) => {
    setFooterActive(e.target.checked)
  }

  const saveContinueData = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);
    console.log({ ...state, image, is_active, content });

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlYzE1MGU5M2Y0OGRmNWE1NTlmOGZmNDc5OWE5ZTA1OWRmMWQxYjc0YmFiZjJkYWE3YmNmZmMzZmFiODZlNTZlZWFhMTAyOTM5NjllNDBiIn0.eyJhdWQiOiI1Y2Y0YjJhNjUxYTBkZTI0ZmMwMDQ5MTIiLCJqdGkiOiJhZWMxNTBlOTNmNDhkZjVhNTU5ZjhmZjQ3OTlhOWUwNTlkZjFkMWI3NGJhYmYyZGFhN2JjZmZjM2ZhYjg2ZTU2ZWVhYTEwMjkzOTY5ZTQwYiIsImlhdCI6MTU5MDU3MjI1NCwibmJmIjoxNTkwNTcyMjU0LCJleHAiOjE2MjIxMDgyNTQsInN1YiI6IjVjMTg4MGZmNWY4NWY2MTQ4Y2I4MWQ2YiIsInNjb3BlcyI6W119.m8Ng66C5ywna5G1IKUWbZJS0mLUwDnpVKXLKTOtWtxjvp-MCIlK2SmoNQvD5m14jZrYlsyD_qvSDOr0nhbaPVLUCRP6VUoeUKgG8qtBtquopShq46y9r1W-gzhknv07TsKHCJj7rq2Tged44PkPgdnCliAZvwcksqJ5cUWXXN6S-Hls-EBOOafm0WCJpUk4tibe3fDSzKcSLw5uPArIgRobeAM9lk0rcSZy0MNdCaOPG8_05GULYwobugVcJxn-__4OcwHJpLOkSexwIdLsm0NZqZlNBDSfZjd7oPrBzjzI1ysTvistdb6tO-_M8h_N2Sqn-hkVLTPqkcRXRWMdxG_q-MDv4ekaPLTqPI7HytN4Sss3A6hDT2Deh9IXKpXCCxm0fUrGuHhRmWfMJA92iQmuPse8gi1lBQOMbP_GlTifBDCyr7KNcX9B02Smfk0qh_iWW7ZAb_zcQtOmYNFt7rcH7rNHFXVq1AOs0J7IXUrXd1-851K4sORUl1pnSC9RAKl7cbU5hre8xWMlPnhX3c_UEhcl_vDuLCeJKHzr8PrCh_-IWd4dyyTMD7ljoIEx9egqtWPsFvIXa62sassh0HdSHrN_ORSsR4eKijA5gIlIJc5DhhA3k6MEqd4rnn5veSWPvG4gpI8Gw8ReYpAeq4ZuMIj0fZGyBnb72RqQHxqw";
    const API = 'https://cors-anywhere.herokuapp.com/';
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const data = {
      country_id: state.country_id,
      slug: state.slug,
      is_active: is_active,
      seo: {
        meta_title: state.meta_title,
        description: state.description,
        image_alt_tag: state.image_alt_tag,
        image_title_tag: state.image_title_tag,
        meta_robot_option: state.meta_robot_option,
        script: state.script,
        link: state.link,
        meta_keyword: state.meta_keyword,
        // image: image,
      },
      footer: {
        title: state.title,
        is_active: footerActive,
        description: content,
      }
    };

    axios.post(`${API}http://new.divinesolitaires.com/api/admin/slug-master`, data, config)
      .then(
        res => {
          setState({
            country_id: "",
            slug: "",
            meta_title: "",
            description: "",
            image_alt_tag: "",
            image_title_tag: "",
            meta_robot_option: "",
            script: "",
            image: "",
            link: "",
            meta_keyword: "",
            title: "",
            is_active: false,
            content: ""
          })
          console.log("Slug master create successfully")
        }
      )
      .catch((error) => {
        console.log(error)
      })
  }

  const saveData = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    e.preventDefault();
    setValidated(true);
    console.log({ ...state, image });

    // Delete Record
    // http://test.divinesolitaires.com/api/admin/slug-master-delete
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlYzE1MGU5M2Y0OGRmNWE1NTlmOGZmNDc5OWE5ZTA1OWRmMWQxYjc0YmFiZjJkYWE3YmNmZmMzZmFiODZlNTZlZWFhMTAyOTM5NjllNDBiIn0.eyJhdWQiOiI1Y2Y0YjJhNjUxYTBkZTI0ZmMwMDQ5MTIiLCJqdGkiOiJhZWMxNTBlOTNmNDhkZjVhNTU5ZjhmZjQ3OTlhOWUwNTlkZjFkMWI3NGJhYmYyZGFhN2JjZmZjM2ZhYjg2ZTU2ZWVhYTEwMjkzOTY5ZTQwYiIsImlhdCI6MTU5MDU3MjI1NCwibmJmIjoxNTkwNTcyMjU0LCJleHAiOjE2MjIxMDgyNTQsInN1YiI6IjVjMTg4MGZmNWY4NWY2MTQ4Y2I4MWQ2YiIsInNjb3BlcyI6W119.m8Ng66C5ywna5G1IKUWbZJS0mLUwDnpVKXLKTOtWtxjvp-MCIlK2SmoNQvD5m14jZrYlsyD_qvSDOr0nhbaPVLUCRP6VUoeUKgG8qtBtquopShq46y9r1W-gzhknv07TsKHCJj7rq2Tged44PkPgdnCliAZvwcksqJ5cUWXXN6S-Hls-EBOOafm0WCJpUk4tibe3fDSzKcSLw5uPArIgRobeAM9lk0rcSZy0MNdCaOPG8_05GULYwobugVcJxn-__4OcwHJpLOkSexwIdLsm0NZqZlNBDSfZjd7oPrBzjzI1ysTvistdb6tO-_M8h_N2Sqn-hkVLTPqkcRXRWMdxG_q-MDv4ekaPLTqPI7HytN4Sss3A6hDT2Deh9IXKpXCCxm0fUrGuHhRmWfMJA92iQmuPse8gi1lBQOMbP_GlTifBDCyr7KNcX9B02Smfk0qh_iWW7ZAb_zcQtOmYNFt7rcH7rNHFXVq1AOs0J7IXUrXd1-851K4sORUl1pnSC9RAKl7cbU5hre8xWMlPnhX3c_UEhcl_vDuLCeJKHzr8PrCh_-IWd4dyyTMD7ljoIEx9egqtWPsFvIXa62sassh0HdSHrN_ORSsR4eKijA5gIlIJc5DhhA3k6MEqd4rnn5veSWPvG4gpI8Gw8ReYpAeq4ZuMIj0fZGyBnb72RqQHxqw";
    const API = 'https://cors-anywhere.herokuapp.com/';
    let config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const data = {
      country_id: state.country_id,
      slug: state.slug,
      is_active: is_active,
      seo: {
        meta_title: state.meta_title,
        description: state.description,
        image_alt_tag: state.image_alt_tag,
        image_title_tag: state.image_title_tag,
        meta_robot_option: state.meta_robot_option,
        script: state.script,
        link: state.link,
        meta_keyword: state.meta_keyword,
        // image: image,
      },
      footer: {
        title: state.title,
        is_active: footerActive,
        description: content,
      }
    };

    axios.post(`${API}http://new.divinesolitaires.com/api/admin/slug-master`, data, config)
      .then(
        res => {
          console.log(res);
          setState(res);
          props.history.push("/slug-master")
          console.log("Slug master create successfully")
        }
      )
      .catch((error) => {
        console.log(error)
      })
  };

  const clearState = (e) => {
    e.preventDefault();
    setState({
      country_id: "",
      slug: "",
      meta_title: "",
      description: "",
      image_alt_tag: "",
      image_title_tag: "",
      meta_robot_option: "",
      script: "",
      image: "",
      link: "",
      meta_keyword: "",
      title: "",
      is_active: false,
      content: ""
    })

  }

  useEffect(() => {
    getAllCountry()
  }, []);

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

  return (
    <div>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Add Slug Master</NavbarBrand>
          <Button outline color="danger" onClick={() => { props.history.push("/slug-master") }}>Slug Master</Button>
        </Navbar> <br />
        <Form noValidate validated={validated}  >
          <Navbar color="light" light expand="md">
            <NavbarBrand>Basic Details</NavbarBrand>
          </Navbar>
          <Row form>
            <Col md={5}>
              <FormGroup>
                <Label>Country</Label>
                <Input type="select" name="country_id" onChange={handleChange} id="countrySelect" >
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
                <Input type="text" name="slug" id="slug" onChange={handleChange} value={state.slug} required />
                <FormFeedback >Plz enter the slug</FormFeedback>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleCheckbox">Active</Label>
                <div> <CustomInput type="checkbox" id="is_active" name="is_active" value={is_active} onChange={handleCheckValue} /> </div>
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
                <Input type="text" name="meta_title" id="meta_title" onChange={handleChange} value={state.meta_title} required />
                <FormFeedback >Plz enter the meta title</FormFeedback>
              </FormGroup>
            </Col>
            <Col xs="6" sm="4">
              <FormGroup>
                <Label>Meta Keyword</Label>
                <Input type="text" name="meta_keyword" id="meta_keyword" onChange={handleChange} value={state.meta_keyword} required />
                <FormFeedback >Plz enter the meta keyword</FormFeedback>
              </FormGroup>
            </Col>
            <Col sm="4">
              <FormGroup>
                <Label>Meta Robot Option </Label>
                <Input type="text" name="meta_robot_option" id="meta_robot_option" onChange={handleChange} value={state.meta_robot_option} required />
                <FormFeedback >Plz enter the meta robot option</FormFeedback>
              </FormGroup>
            </Col>
          </Row>

          <Row xs="3">
            <Col>
              <FormGroup>
                <Label>Image</Label>
                {/* <CustomInput type="file" name="image" id="image" onChange={handleFileUpload} ref={imageUploader} /> */}
                <CustomInput type="file" name="image" id="image" onChange={handleFileUpload} />
              </FormGroup>
              {/* <img alt="..." ref={uploadedImage} style={{ width: "25%", height: "45%", position: "absolute" }} /> */}
              <img alt="..." style={{ width: "25%", height: "45%", position: "absolute" }} src={image} />
            </Col>
            <Col>
              <FormGroup>
                <Label>Meta Description</Label>
                <Input type="textarea" name="description" id="description" onChange={handleChange} value={state.description} required />
                <FormFeedback >Plz enter the description</FormFeedback>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Image ALT Tag  </Label>
                <Input type="text" name="image_alt_tag" id="image_alt_tag" onChange={handleChange} value={state.image_alt_tag} required />
                <FormFeedback >Plz enter the image alt tag</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label>Image Title Tag </Label>
                <Input type="text" name="image_title_tag" id="image_title_tag" onChange={handleChange} value={state.image_title_tag} required />
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
                <Input type="text" name="link" id="link" onChange={handleChange} value={state.link} required />
                <FormFeedback >Plz enter the website</FormFeedback>
              </InputGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Script</Label>
                <Input type="textarea" name="script" id="script" onChange={handleChange} value={state.script} />
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
                <Label>Title</Label>
                <Input type="text" name="title" id="title" onChange={handleChange} value={state.title} required />
                <FormFeedback >Plz enter the title</FormFeedback>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Active</Label>
                <div>
                  <CustomInput type="checkbox" id="footerActive" name="footerActive" value={footerActive} onChange={handleFooterCheckValue} />
                </div>
              </FormGroup>
            </Col>
          </Row>

          <Row xs="1">
            <Col>
              <FormGroup>
                <Label for="exampleText">Description</Label>
                {/* <Input type="textarea" name="description" id="description" onChange={handleChange} value={state.description} /> */}
                <JoditEditor
                  ref={editor}
                  value={content}
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
              <Button type="submit" className="float-right" outline color="secondary" onClick={clearState}>Reset</Button>
              <Button className="float-right" color="secondary" type="submit" onClick={saveData} >Save</Button>
              <Button className="float-right" color="secondary" type="submit" onClick={saveContinueData}>Save & continue</Button>
            </Col><br />
          </Row>
        </Form>
      </Container >
    </div>
  )
}

export default withRouter(AddSlugMaster);