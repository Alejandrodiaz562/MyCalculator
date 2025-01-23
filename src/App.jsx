import AcBtn from "./components/AcBtn";
import DeleteBtn from "./components/DeleteBtn";
import OperatorBtn from "./components/OperatorBtn";
import NumberBtn from "./components/NumberBtn";
import { useState, useEffect, useRef } from "react";
import EqualBtn from "./components/EqualBtn";
import PointBtn from "./components/PointBtn";

function App() {
  const [operation, setOperation] = useState("")
  const [preview, setPreview] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [operated, setOperated] = useState(false)
  const [beforeOperation, setBeforeOperation] = useState("")
  const [showResultStyle, setShowResultStyle] = useState({})
  const [showPreviewStyle, setPreviewStyle] = useState({})
  const operators = ["/", "*", "+", "-"]
  const inputRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(()=>{
    
    const input = inputRef.current;

    if (isMobile){
      if (operation.length > 9 && !operators.includes(operation[9])){
        setShowResultStyle({
          height: "60px",
          fontSize: "3em"
          })
  
          setPreviewStyle({
            height: "25px",
            fontSize: "1.2em"
          })

        input.scrollLeft = input.scrollWidth
      } 

      if (operation.length > 10) {
        setShowResultStyle({
          height: "60px",
          fontSize: "3em"
          })
  
          setPreviewStyle({
            height: "25px",
            fontSize: "1.2em"
          })
          
        input.scrollLeft = input.scrollWidth
      }

      if (operation.length < 10) {
        setShowResultStyle({
        height: "80px",
        fontSize: "4em"
        })

        setPreviewStyle({
          height: "40px",
          fontSize: "2em"
        })
      }

    }

    if (isMobile === false){
      if (operation.length > 9 && !operators.includes(operation[9])){
        setShowResultStyle({
          height: "40px",
          fontSize: "2.2em"
        })
  
        setPreviewStyle({
          height: "20px",
          fontSize: "1em"
        })

        input.scrollLeft = input.scrollWidth
      } 
  
      if (operation.length > 10) {
        setShowResultStyle({
          height: "40px",
          fontSize: "2.2em"
          })
  
        setPreviewStyle({
          height: "20px",
          fontSize: "1em"
        })

        input.scrollLeft = input.scrollWidth
      }
  
      if (operation.length < 10) {
        setShowResultStyle({
          height: "60px",
          fontSize: "3.4em"
        })
  
        setPreviewStyle({
          height: "30px",
          fontSize: "1.7em"
        })
      }
    }
  }, [isMobile, operation] )

  useEffect(()=>{

    const mediaQuery = window.matchMedia('(max-width: 400px)');

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };

    // Agregar el event listener para escuchar cambios en la media query
    mediaQuery.addEventListener('change', handleMediaChange);

    // Verificar el estado actual de la media query
    handleMediaChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  })

  return (
    <div className="App">
      <div className="showResult-container">
            <input type="text" value={operation} className="show-result input" style={showResultStyle} ref={inputRef}/>
            <input type="text" value={isVisible ? preview : ""} className="preview-result input" style={showPreviewStyle}/>
      </div>
      <div className="btn-containers">
      <div className='btn-container'>
            <AcBtn setOperation={setOperation} setPreview={setPreview} setIsVisible={setIsVisible} setOperated={setOperated}></AcBtn>
            <DeleteBtn setOperation={setOperation} operation={operation} setPreview={setPreview} setIsVisible={setIsVisible} operated={operated} setOperated={setOperated} beforeOperation={beforeOperation}></DeleteBtn>
            <OperatorBtn value={"/"} operation={operation} setIsVisible={setIsVisible} setOperation={setOperation} ></OperatorBtn>
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
            <PointBtn value={"."} operation={operation} setOperation={setOperation}></PointBtn>
            
            <EqualBtn value={"="} setOperated={setOperated} setOperation={setOperation} setIsVisible={setIsVisible} preview={preview} operation={operation} setBeforeOperation={setBeforeOperation}></EqualBtn>
        </div>
      </div>
      
    </div>
  );
}

export default App;
