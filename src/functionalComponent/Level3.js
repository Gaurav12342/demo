import React, { useState } from 'react';
import Timer from 'react-compound-timer';
import '../Css/test.css';
import Sudoku from '../functionalComponent/Sudoku';


const Level3 = () => {
  const [a1, setA1] = useState(Math.floor((Math.random() * 10)));
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState(Math.floor((Math.random() * 10)));
  const [a4, setA4] = useState(Math.floor((Math.random() * 10)));
  const [a5, setA5] = useState("");
  const [a6, setA6] = useState(Math.floor((Math.random() * 10)));
  const [a7, setA7] = useState("");
  const [a8, setA8] = useState(Math.floor((Math.random() * 10)));
  const [a9, setA9] = useState("");

  const [b1, setB1] = useState("");
  const [b2, setB2] = useState(Math.floor((Math.random() * 10)));
  const [b3, setB3] = useState("");
  const [b4, setB4] = useState(Math.floor((Math.random() * 10)));
  const [b5, setB5] = useState("");
  const [b6, setB6] = useState(Math.floor((Math.random() * 10)));
  const [b7, setB7] = useState("");
  const [b8, setB8] = useState(Math.floor((Math.random() * 10)));
  const [b9, setB9] = useState("");

  const [c1, setC1] = useState(Math.floor((Math.random() * 10)));
  const [c2, setC2] = useState("");
  const [c3, setC3] = useState(Math.floor((Math.random() * 10)));
  const [c4, setC4] = useState("");
  const [c5, setC5] = useState(Math.floor((Math.random() * 10)));
  const [c6, setC6] = useState("");
  const [c7, setC7] = useState(Math.floor((Math.random() * 10)));
  const [c8, setC8] = useState("");
  const [c9, setC9] = useState(Math.floor((Math.random() * 10)));

  const [d1, setD1] = useState(Math.floor((Math.random() * 10)));
  const [d2, setD2] = useState(Math.floor((Math.random() * 10)));
  const [d3, setD3] = useState("");
  const [d4, setD4] = useState("");
  const [d5, setD5] = useState(Math.floor((Math.random() * 10)));
  const [d6, setD6] = useState("");
  const [d7, setD7] = useState(Math.floor((Math.random() * 10)));
  const [d8, setD8] = useState("");
  const [d9, setD9] = useState(Math.floor((Math.random() * 10)));

  const [e1, setE1] = useState("");
  const [e2, setE2] = useState("");
  const [e3, setE3] = useState(Math.floor((Math.random() * 10)));
  const [e4, setE4] = useState("");
  const [e5, setE5] = useState(Math.floor((Math.random() * 10)));
  const [e6, setE6] = useState(Math.floor((Math.random() * 10)));
  const [e7, setE7] = useState("");
  const [e8, setE8] = useState("");
  const [e9, setE9] = useState(Math.floor((Math.random() * 10)));

  const [f1, setF1] = useState(Math.floor((Math.random() * 10)));
  const [f2, setF2] = useState("");
  const [f3, setF3] = useState(Math.floor((Math.random() * 10)));
  const [f4, setF4] = useState("");
  const [f5, setF5] = useState(Math.floor((Math.random() * 10)));
  const [f6, setF6] = useState("");
  const [f7, setF7] = useState("");
  const [f8, setF8] = useState(Math.floor((Math.random() * 10)));
  const [f9, setF9] = useState(Math.floor((Math.random() * 10)));

  const [g1, setG1] = useState("");
  const [g2, setG2] = useState(Math.floor((Math.random() * 10)));
  const [g3, setG3] = useState("");
  const [g4, setG4] = useState("");
  const [g5, setG5] = useState(Math.floor((Math.random() * 10)));
  const [g6, setG6] = useState("");
  const [g7, setG7] = useState(Math.floor((Math.random() * 10)));
  const [g8, setG8] = useState("");
  const [g9, setG9] = useState("");

  const [h1, setH1] = useState(Math.floor((Math.random() * 10)));
  const [h2, setH2] = useState("");
  const [h3, setH3] = useState(Math.floor((Math.random() * 10)));
  const [h4, setH4] = useState("");
  const [h5, setH5] = useState(Math.floor((Math.random() * 10)));
  const [h6, setH6] = useState("");
  const [h7, setH7] = useState(Math.floor((Math.random() * 10)));
  const [h8, setH8] = useState("");
  const [h9, setH9] = useState(Math.floor((Math.random() * 10)));

  const [i1, setI1] = useState("");
  const [i2, setI2] = useState(Math.floor((Math.random() * 10)));
  const [i3, setI3] = useState(Math.floor((Math.random() * 10)));
  const [i4, setI4] = useState(Math.floor((Math.random() * 10)));
  const [i5, setI5] = useState(Math.floor((Math.random() * 10)));
  const [i6, setI6] = useState("");
  const [i7, setI7] = useState(Math.floor((Math.random() * 10)));
  const [i8, setI8] = useState("");
  const [i9, setI9] = useState(Math.floor((Math.random() * 10)));
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
        <p>Hard Level</p>
        <table style={{ textAlign: 'center' }} >
          <tbody>
            <tr>
              <td className="inputComp" ><input type="text" value={a1} onChange={(e) => { setA1(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp" ><input type="text" value={a2} onChange={(e) => { setA2(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={a3} onChange={(e) => { setA3(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={a4} onChange={(e) => { setA4(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={a5} onChange={(e) => { setA5(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={a6} onChange={(e) => { setA6(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={a7} onChange={(e) => { setA7(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={a8} onChange={(e) => { setA8(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={a9} onChange={(e) => { setA9(e.target.value) }} maxLength={1} /></td>
            </tr>
            <tr >
              <td className="inputComp"><input type="text" value={b1} onChange={(e) => { setB1(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={b2} onChange={(e) => { setB2(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={b3} onChange={(e) => { setB3(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={b4} onChange={(e) => { setB4(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={b5} onChange={(e) => { setB5(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={b6} onChange={(e) => { setB6(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={b7} onChange={(e) => { setB7(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={b8} onChange={(e) => { setB8(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={b9} onChange={(e) => { setB9(e.target.value) }} maxLength={1} /></td>
            </tr>

            <tr>
              <td className="inputComp"><input type="text" value={c1} onChange={(e) => { setC1(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={c2} onChange={(e) => { setC2(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={c3} onChange={(e) => { setC3(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={c4} onChange={(e) => { setC4(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={c5} onChange={(e) => { setC5(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={c6} onChange={(e) => { setC6(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={c7} onChange={(e) => { setC7(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={c8} onChange={(e) => { setC8(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={c9} onChange={(e) => { setC9(e.target.value) }} maxLength={1} /></td>
            </tr>

            <tr>
              <td className="inputComp"><input type="text" value={d1} onChange={(e) => { setD1(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={d2} onChange={(e) => { setD2(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={d3} onChange={(e) => { setD3(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={d4} onChange={(e) => { setD4(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={d5} onChange={(e) => { setD5(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={d6} onChange={(e) => { setD6(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={d7} onChange={(e) => { setD7(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={d8} onChange={(e) => { setD8(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={d9} onChange={(e) => { setD9(e.target.value) }} maxLength={1} /></td>
            </tr>

            <tr>
              <td className="inputComp"><input type="text" value={e1} onChange={(e) => { setE1(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={e2} onChange={(e) => { setE2(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={e3} onChange={(e) => { setE3(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={e4} onChange={(e) => { setE4(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={e5} onChange={(e) => { setE5(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={e6} onChange={(e) => { setE6(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={e7} onChange={(e) => { setE7(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={e8} onChange={(e) => { setE8(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={e9} onChange={(e) => { setE9(e.target.value) }} maxLength={1} /></td>
            </tr>

            <tr>
              <td className="inputComp"><input type="text" value={f1} onChange={(e) => { setF1(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={f2} onChange={(e) => { setF2(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={f3} onChange={(e) => { setF3(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={f4} onChange={(e) => { setF4(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={f5} onChange={(e) => { setF5(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={f6} onChange={(e) => { setF6(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={f7} onChange={(e) => { setF7(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={f8} onChange={(e) => { setF8(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={f9} onChange={(e) => { setF9(e.target.value) }} maxLength={1} /></td>
            </tr>

            <tr>
              <td className="inputComp"><input type="text" value={g1} onChange={(e) => { setG1(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={g2} onChange={(e) => { setG2(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={g3} onChange={(e) => { setG3(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={g4} onChange={(e) => { setG4(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={g5} onChange={(e) => { setG5(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={g6} onChange={(e) => { setG6(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={g7} onChange={(e) => { setG7(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={g8} onChange={(e) => { setG8(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={g9} onChange={(e) => { setG9(e.target.value) }} maxLength={1} /></td>
            </tr>

            <tr>
              <td className="inputComp"><input type="text" value={h1} onChange={(e) => { setH1(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={h2} onChange={(e) => { setH2(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={h3} onChange={(e) => { setH3(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={h4} onChange={(e) => { setH4(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={h5} onChange={(e) => { setH5(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={h6} onChange={(e) => { setH6(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={h7} onChange={(e) => { setH7(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={h8} onChange={(e) => { setH8(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={h9} onChange={(e) => { setH9(e.target.value) }} maxLength={1} /></td>
            </tr>

            <tr>
              <td className="inputComp"><input type="text" value={i1} onChange={(e) => { setI1(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={i2} onChange={(e) => { setI2(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={i3} onChange={(e) => { setI3(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={i4} onChange={(e) => { setI4(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={i5} onChange={(e) => { setI5(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={i6} onChange={(e) => { setI6(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={i7} onChange={(e) => { setI7(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={i8} onChange={(e) => { setI8(e.target.value) }} maxLength={1} /></td>
              <td className="inputComp"><input type="text" value={i9} onChange={(e) => { setI9(e.target.value) }} maxLength={1} /></td>
            </tr>
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default Level3;