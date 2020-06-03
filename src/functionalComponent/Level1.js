import React, { useState } from 'react';
import Timer from 'react-compound-timer';
import '../Css/test.css';
import Sudoku from '../functionalComponent/Sudoku';

const Level1 = () => {
  const [a, setA] = useState(Math.floor((Math.random() * 10)));
  const [b, setB] = useState("");
  const [c, setC] = useState(Math.floor((Math.random() * 10)));
  const [d, setD] = useState(Math.floor((Math.random() * 10)));
  const [e, setE] = useState("");
  const [f, setF] = useState(Math.floor((Math.random() * 10)));
  const [g, setG] = useState("");
  const [h, setH] = useState(Math.floor((Math.random() * 10)));
  const [i, setI] = useState("");

  return (
    <div style={{ textAlign: 'center' }}>
      <Sudoku />
      <h3 style={{ backgroundColor: 'red', width: '30%', marginLeft: "35%", height: '45px', paddingTop: '1%' }}>
        <Timer>
          <Timer.Hours formatValue={value => `${value} hours. `} />
          <Timer.Minutes formatValue={value => `${value} Minutes. `} />
          <Timer.Seconds formatValue={value => `${value} s. `} />
        </Timer>
      </h3>

      <center>
        <p>Easy Level</p>
        <table>
          <tbody>
            <tr>
              <td className="inputComp"> <input type="text" maxLength={1} minLength={1} value={a} onChange={(e) => { setA(e.target.value) }} /></td>
              <td className="inputComp">  <input type="text" maxLength={1} minLength={1} value={b} onChange={(e) => { setB(e.target.value) }} /></td>
              <td className="inputComp">  <input type="text" maxLength={1} minLength={1} value={c} onChange={(e) => { setC(e.target.value) }} /> </td>
            </tr>
            <tr>
              <td className="inputComp"><input type="text" maxLength={1} minLength={1} value={d} onChange={(e) => { setD(e.target.value) }} /></td>
              <td className="inputComp"> <input type="text" maxLength={1} minLength={1} value={e} onChange={(e) => { setE(e.target.value) }} /></td>
              <td className="inputComp"> <input type="text" maxLength={1} minLength={1} value={f} onChange={(e) => { setF(e.target.value) }} /></td>
            </tr>
            <tr>
              <td className="inputComp"><input type="text" maxLength={1} minLength={1} value={g} onChange={(e) => { setG(e.target.value) }} /></td>
              <td className="inputComp"><input type="text" maxLength={1} minLength={1} value={h} onChange={(e) => { setH(e.target.value) }} /></td>
              <td className="inputComp"><input type="text" maxLength={1} minLength={1} value={i} onChange={(e) => { setI(e.target.value) }} /> </td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default Level1;