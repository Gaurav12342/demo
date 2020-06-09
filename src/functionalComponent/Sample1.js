import React from 'react';
import { withRouter } from 'react-router-dom';

const Sample1 = (props) => {
  const [file, setFile] = React.useState("")
  console.log({ file })

  const fileHandler = (e) => {
    setFile(e.target.value);
    console.log({file});
    // let formData = new FormData();
    // setFile(formData.append("file", e.target.files[0]));
    // setFile(URL.createObjectURL(e.target.files[0]))
  }


  return (
    <div>
      <div>
        <input type="file" value={file} onChange={fileHandler} />
        <img src={file} alt=".." />
      </div>
    </div>
  )
}


export default withRouter(Sample1);