import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Sudoku = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h2>WelCome..To..Sudoku Game..!</h2>
        <Link to="/level1">Easy</Link> &nbsp;
        <Link to="/level3">Medium</Link> &nbsp;
        <Link to="/level3">Hard</Link>
        {/* <div>
          <p>Level &nbsp;
          <select defaultValue="Easy" onChange="Easy">
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select></p>
        </div> */}
      </div>
    </div>
  )
}

export default withRouter(Sudoku);