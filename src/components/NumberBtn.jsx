const NumberBtn = ({value, setOperation, operation, setPreview, isVisible, operated, setOperated}) => {

    

    const handleClick = (e)=> {
        console.log("hello" + value)

        const target = e.target.value
        const last = operation.slice(-1)
        const operators = ["/", "*", "+", "-"]
        
        setPreview(eval(operation + target).toString())

        
        if(operated === false){
            if (operation.length === 0 && target === "0"){
                alert("no puedes ingresar 0 como primer valor")
                return
            }
            setOperation(operation + target)
           
            if(isVisible === false){
                setPreview(operation + target)
            }
        } else {
            if (target === "0"){
                alert("no puedes ingresar 0 para realizar otra operacion")
                return
            }
            if(operators.includes(last)){
                setOperation(operation + target)
                if(isVisible === false){
                    setPreview(operation + target)
                }
            } else {
                setOperation(target)
                setOperated(false)
            }   
        }
        
    }
    return ( <button className="btn" value={value} onClick={handleClick}>{value}</button> );
}
 
export default NumberBtn;