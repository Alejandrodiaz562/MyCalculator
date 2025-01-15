import Button from "./components/Button";
import { useState } from "react";

function App() {

  const [operation, setOperation] = useState("")

  
  return (
    <div className="App">
      <div className="showResult-container">
            <input type="text" value={operation} className="show-result input"/>
            <input type="text" value={operation} className="preview-result input" />
      </div>
      
      <div className='btn-container'>
            <Button value={"Limpiar"} setOperation={setOperation} operation={operation} className="btn limpiar"></Button>
            <Button value={"Borrar"} setOperation={setOperation} operation={operation} className="btn borrar"></Button>
            <Button value={"+/-"} setOperation={setOperation} operation={operation} className="btn borrar"></Button>
            <Button value={"/"} setOperation={setOperation} operation={operation} className="btn"></Button>
        </div>
        <div className='btn-container'>
            <Button value={"7"} setOperation={setOperation} operation={operation} className="btn"></Button>
            <Button value={"8"} setOperation={setOperation} operation={operation} className="btn"></Button>
            <Button value={"9"} setOperation={setOperation} operation={operation} className="btn"></Button>
            <Button value={"*"} setOperation={setOperation} operation={operation} className="btn"></Button>
        </div>
        <div className='btn-container'>
            <Button value={"4"} setOperation={setOperation} operation={operation} className="btn"></Button>
            <Button value={"5"} setOperation={setOperation} operation={operation} className="btn"></Button>
            <Button value={"6"} setOperation={setOperation} operation={operation} className="btn"></Button>
            <Button value={"-"} setOperation={setOperation} operation={operation} className="btn"></Button>
        </div>
        <div className='btn-container'>
            <Button value={"1"} setOperation={setOperation} operation={operation} className="btn"></Button>
            <Button value={"2"} setOperation={setOperation} operation={operation} className="btn"></Button>
            <Button value={"3"} setOperation={setOperation} operation={operation} className="btn"></Button>
            <Button value={"+"} setOperation={setOperation} operation={operation} className="btn"></Button>
        </div>
        <div className='btn-container'>
            <Button value={"0"} setOperation={setOperation} operation={operation} className="btn"></Button>
            <Button value={"="} setOperation={setOperation} operation={operation} className="btn equal"></Button>
            
        </div>
    </div>
  );
}

export default App;
