import AcBtn from "./components/AcBtn";
import DeleteBtn from "./components/DeleteBtn";
import OperatorBtn from "./components/OperatorBtn";
import NumberBtn from "./components/NumberBtn";
import { useState } from "react";
import EqualBtn from "./components/EqualBtn";

function App() {

  const [operation, setOperation] = useState("")
  const [preview, setPreview] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [operated, setOperated] = useState(false)

  
  return (
    <div className="App">
      <div className="showResult-container">
            <input type="text" value={operation} className="show-result input"/>
            <input type="text" value={isVisible ? preview : ""} className="preview-result input" />
      </div>
      <div className="btn-containers">
      <div className='btn-container'>
            <AcBtn setOperation={setOperation} setPreview={setPreview} setIsVisible={setIsVisible} setOperated={setOperated}></AcBtn>
            <DeleteBtn setOperation={setOperation} operation={operation}></DeleteBtn>
            <OperatorBtn value={"/"} operation={operation} setIsVisible={setIsVisible} setOperation={setOperation}></OperatorBtn>
        </div>
        <div className='btn-container'>
            <NumberBtn value={"7"} setOperation={setOperation} operation={operation} setPreview={setPreview} isVisible={isVisible} operated={operated} setOperated={setOperated}></NumberBtn>
            <NumberBtn value={"8"} setOperation={setOperation} operation={operation} setPreview={setPreview} isVisible={isVisible} operated={operated} setOperated={setOperated}></NumberBtn>
            <NumberBtn value={"9"} setOperation={setOperation} operation={operation} setPreview={setPreview} isVisible={isVisible} operated={operated} setOperated={setOperated}></NumberBtn>
            <OperatorBtn value={"*"} operation={operation} setIsVisible={setIsVisible} setOperation={setOperation} ></OperatorBtn>
        </div>
        <div className='btn-container'>
            <NumberBtn value={"4"} setOperation={setOperation} operation={operation} setPreview={setPreview} isVisible={isVisible} operated={operated} setOperated={setOperated}></NumberBtn>
            <NumberBtn value={"5"} setOperation={setOperation} operation={operation} setPreview={setPreview} isVisible={isVisible} operated={operated} setOperated={setOperated}></NumberBtn>
            <NumberBtn value={"6"} setOperation={setOperation} operation={operation} setPreview={setPreview} isVisible={isVisible} operated={operated} setOperated={setOperated}></NumberBtn>
            <OperatorBtn value={"-"} operation={operation} setIsVisible={setIsVisible} setOperation={setOperation} ></OperatorBtn>
        </div>
        <div className='btn-container'>
            <NumberBtn value={"1"} setOperation={setOperation} operation={operation} setPreview={setPreview} isVisible={isVisible} operated={operated} setOperated={setOperated}></NumberBtn>
            <NumberBtn value={"2"} setOperation={setOperation} operation={operation} setPreview={setPreview} isVisible={isVisible} operated={operated} setOperated={setOperated}></NumberBtn>
            <NumberBtn value={"3"} setOperation={setOperation} operation={operation} setPreview={setPreview} isVisible={isVisible} operated={operated} setOperated={setOperated}></NumberBtn>
            <OperatorBtn value={"+"} operation={operation} setIsVisible={setIsVisible} setOperation={setOperation}></OperatorBtn>
        </div>
        <div className='btn-container'>
            <NumberBtn value={"0"} setOperation={setOperation} operation={operation} setPreview={setPreview} isVisible={isVisible} operated={operated} setOperated={setOperated}></NumberBtn>
            <EqualBtn value={"="} setOperated={setOperated} setOperation={setOperation} setIsVisible={setIsVisible} preview={preview}></EqualBtn>
        </div>
      </div>
      
    </div>
  );
}

export default App;
