import React from 'react';
import { withRouter } from 'react-router-dom';

class MapList extends React.Component {
  render() {
    const EmpData = [
      { name: "Gaurav", city: "Surat", rollNo: "21" },
      { name: "Naresh", city: "Dindoli", rollNo: "22" },
      { name: "Vijay", city: "Bharuch", rollNo: "23" },
    ];
    return (
      <div>
        {EmpData && EmpData.map((aa, index) => {
          return (
            <p key={index}>{aa.name}</p>
          )
        })}
      </div>
    )
  }
}
export default withRouter(MapList);