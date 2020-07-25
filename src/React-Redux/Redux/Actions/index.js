import { ADD_POST, FETCH_POST, DELETE_POST, FETCH_COUNTRY, FETCH_SPECIFIC_SLUG_MASTER, UPDATE_SLUG } from '../Actions/ActionTypes';
import axios from 'axios';


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


const getData = `${API}http://new.divinesolitaires.com/api/admin/slug-master-list`;
const deleteRecord = `${API}http://new.divinesolitaires.com/api/admin/slug-master-delete/`;
const getCountryData = `${API}http://new.divinesolitaires.com/api/admin/country-list`;
const insertData = `${API}http://new.divinesolitaires.com/api/admin/slug-master`;
const getSpecificData = `${API}http://new.divinesolitaires.com/api/admin/slug-master`;
const updateData = `${API}http://new.divinesolitaires.com/api/admin/slug-master`;

export const addTodo = text => ({
  type: ADD_POST,
  text
})

export const addSlugMaster = (data) => {
  return (dispatch) => {
    return axios.post(`${insertData}`, data, config)
      .then((response) => {
        // console.log("Insert data", response);
        dispatch(response)
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
}

export const addSlug = (data) => {
  return {
    type: ADD_POST,
    payload: {
      data
    }
  }
}

export const fetchAllData = () => {
  return (dispatch) => {
    return axios.post(`${getData}`, bodyParameters, config)
      .then((response) => {
        // console.log("List ", response);
        dispatch(fetchData(response.data.data.list))
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const fetchData = (masterData) => {
  return {
    type: FETCH_POST,
    masterData
  }
}

export const fetchAllCountry = () => {
  return (dispatch) => {
    return axios.post(`${getCountryData}`, bodyParameters, config)
      .then((response) => {
        // console.log(1,"fetch country", response);
        dispatch(fetchCountry(response.data.data.list));
        // dispatch(fetchCountry(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export const fetchCountry = (getCountry) => {
  return {
    type: FETCH_COUNTRY,
    getCountry
  }
}

export const deleteSpecificData = (id) => {
  return (dispatch) => {
    return axios.delete(`${deleteRecord}${id}`, config)
      .then((response) => {
        dispatch(deleteData(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const deleteData = (id) => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  }
}

export const getSpecificSlugMaster = (id) => {
  return (dispatch) => {
    return axios.get(`${getSpecificData}/${id}`, config)
      .then((response) => {
        dispatch(getSpecificSlug(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export const getSpecificSlug = (getData, id) => {
  return {
    type: FETCH_SPECIFIC_SLUG_MASTER,
    getData
    // payload: {
    //   id,
    //   getData
    // }
  }
}

export const updateSlugMaster = (data, id) => {
  return (dispatch) => {
    return axios.put(`${updateData}/${id}`, data, config)
      .then((response) => {
        dispatch(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export const updateSlug = (updateData) => {
  return {
    type: UPDATE_SLUG,
    payload: {
      updateData
    }
  }
}