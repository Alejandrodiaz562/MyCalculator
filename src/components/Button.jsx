const Button = ({value, setOperation, operation, className}) => {

    const result = (a) => {
        if (a !== "="){
            setOperation(operation + a)
        }
    }

    const handleClick=(e)=>{

        const target = e.target.value
        const last = operation.slice(-1)
        const operators = ["/", "*", "+", "-"]

        if (target === "Limpiar"){  
            setOperation("")
        } else if (target === "Borrar"){                   
            setOperation(operation.slice(0, -1))
        } else if(target === "="){
            try {
                setOperation(eval(operation).toString())
            } catch (error) {
                return
            }                            
           
        } else {
            if(operation.length === 0 && operators.includes(target)){
                return
            } else{
                result(target)
                if(operation === "0" && !operators.includes(target)){
                    setOperation(target)
                }
                if(operators.includes(last)){
                    if(operators.includes(target)){
                        const newOperation = operation.slice(0, -1)
                        setOperation(newOperation + target)
                    }
                }
            }
        }        
    }
    return ( 
        <button className={className} value={value} onClick={handleClick}>{value}</button>
    );
}
 
export default Button;