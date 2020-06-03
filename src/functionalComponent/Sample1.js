import React from 'react';
import { withRouter } from 'react-router-dom';

const Sample1 = (props) => {
  const [file, setFile] = React.useState(null)
  console.log({ file })
  console.log(window.location.pathname); //yields: "/js" (where snippets run)
  console.log(window.location.href);

  const fileHandler = (e) => {
    // let formData = new FormData();
    // setFile(formData.append("file", e.target.files[0]));
    setFile(URL.createObjectURL(e.target.files[0]))
  }


  return (
    <div>
      <div>
        <input type="file" onChange={fileHandler} />
        <img src={file} alt=".." />
      </div>
    </div>
  )
}


export default withRouter(Sample1);