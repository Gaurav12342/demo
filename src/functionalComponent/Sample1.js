import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { NotificationManager, NotificationContainer } from 'react-notifications';
import { confirmAlert } from 'react-confirm-alert';
import { Helmet } from 'react-helmet';
import DeleteIcon from '@material-ui/icons/Delete';
import BorderColorIcon from '@material-ui/icons/BorderColor';

const Sample1 = (props) => {
  const [file, setFile] = useState("")
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  console.log({ file })

  const fileHandler = (e) => {
    setFile(e.target.value);
    console.log({ file });
    // let formData = new FormData();
    // setFile(formData.append("file", e.target.files[0]));
    // setFile(URL.createObjectURL(e.target.files[0]))
  }

  const handleChange = (e) => {
    setPassword(e.target.value);
  }


  return (
    <div>
      <div>
        <Helmet>
          <title>Turbo Todo</title>
          <meta name="description" content="Todos!" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
        <title>Gaurav</title>
        <input type="file" value={file} onChange={fileHandler} />
        <img src={file} alt=".." />
        <button onClick={() => { NotificationManager.success('Success message', 'Title here'); }}>Submit</button>
        <NotificationContainer />
        <button onClick={() => {
          confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => alert('Click Yes')
              },
              {
                label: 'No',
                onClick: () => alert('Click No')
              }
            ]
          })
        }}>Confirmation</button>
      </div>
      <div>
        <input name="password" id="password" type={showPassword ? "text" : "password"} onChange={handleChange} value={password} />
        {showPassword ? (
          <DeleteIcon onClick={() => { setShowPassword(false) }} />
        ) : (
            <BorderColorIcon onClick={() => { setShowPassword(true) }} />
          )}
      </div>
    </div>
  )
}


export default withRouter(Sample1);