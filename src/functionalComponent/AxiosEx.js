import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';

const AxiosEx = () => {
  const [record, setRecord] = useState([]);
  useEffect(() => {
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIwNDgwNjA5MjE1NzdhMDhlMjY3YzcyNGZiODA3ODkyODgxNzlhZGE0Nzk2YjFlNjY3NWQzNDVhMWE2ZTYzMDQ2NjNmZGYxNjk0NzY3NjJlIn0.eyJhdWQiOiI1YzFkZTExYjQ2NDIzMzM2MTkzOWJkOTIiLCJqdGkiOiIyMDQ4MDYwOTIxNTc3YTA4ZTI2N2M3MjRmYjgwNzg5Mjg4MTc5YWRhNDc5NmIxZTY2NzVkMzQ1YTFhNmU2MzA0NjYzZmRmMTY5NDc2NzYyZSIsImlhdCI6MTU5MDEyMjc5MywibmJmIjoxNTkwMTIyNzkzLCJleHAiOjE2MjE2NTg3OTMsInN1YiI6IjVjMTg4MGZmNWY4NWY2MTQ4Y2I4MWQ2YiIsInNjb3BlcyI6W119.ltwWLUkg-wIvIoOo0sggsG0-DA6KNmPbXZ6uq9baDYyVS7wqOXbOIyiPFXV8CrS6gr7CgO-ASoOSAVljosZBt8f9uWFDcPGDDBEersN8B-gl2nvtockSVN4CWjGwAW4BhisEDGT8pQ90RtzrH2uHy3cE3nfJkh3jqcITY1hY4Yv3RJExJQQ5x9GRHZDfD1p86QmDpsnafNMZq7RNIHRucl8jza3WaiXow8LZaEkj8kTmIbfsX9LYiiYnfAczRUjr3fg2EEgok0FqR8ZujJzHGSmhgUF-9mIvxjwz41a9pcSjWGXMOvweCEdAmOBvuSq-grWNCNw-gwu29DoY0OWhxE5sYAw2g-McBZuow_Z6qQ_1tR0vkrys8Xof-2w87DgxqzV8FdLcOEH4-YPAl9aaTSZFDwILJJn-DyJ6EJlu3JA4nc6E57rP9ewm4Wk7_SorvaHj8Nl1XntbBZblffanWeh5s4qfSrb8UjTp6SLiIcu6mYKawXwNI5rSgnXvIqTZnpWaVLAqGkLUz0qeBOuPskABTfrcLgNabDXZSQKXtdngw-4TQxoVkFfI-3Vrb8i-Y6fIcscK5KSIKG0XbRc8DvmeFcKUtz_sOUHK_LMxtmlNhdIabPlCWAIw7c9Txt3hUdVuMBLHh8Ie6ATr1a1hdk1i8CEDNATBLQAnFustqKU";
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
      `${API}http://test.divinesolitaires.com/api/admin/slug-master-list`,
      bodyParameters,
      config
    )
      .then((response) => {
        setRecord(response);
      })
      .catch()
  }, []);

  return (
    <div>
      <h2>Gaurav</h2>
      <Button color="danger" >Submit</Button>
      {record && record.data && record.data.data && record.data.data.list && record.data.data.list.length > 0 && record.data.data.list.map((data, index) => {
        return (
          <div key={index}>
            {/* <h5>{data.name}</h5> */}
            <p>{data.slug}</p>
          </div>
        )
      })}
    </div >
  )
}

export default withRouter(AxiosEx);