const Button = ({value, setOperation, operation, setPreview, preview, isVisible, setIsVisible, operated, setOperated, className}) => {

    const addValue = (target, numbers, operated, operators, last) => {
        /*if (target !== "=" && target !== "AC" && target !== "X" && operated === false ){
            setOperation(operation + target);
            if(isVisible === false){
                setPreview(operation)
            } else if(numbers.includes(target)){
                setPreview(eval(operation + target).toString())
            }
        } else if (operated === true){
            if (operators.includes(target) && numbers.includes(last)){
                setOperation(operation + target)
            } else {
                setOperation(target)
                setOperated(false)
                setIsVisible(false)
            }
            
        }*/

            


        if(target !== "=" && target !== "AC" && target !== "X" && operated === false ){ // SI OPERATED ES FALSO
            
            setOperation(operation + target); // AGREGAME TARGET A OPERATION
            if(isVisible === false){
                setPreview(operation)
            }

            if (operators.includes(target)){
                setIsVisible(true)
            }

            if(numbers.includes(target)){
                setPreview(eval(operation + target).toString())
            }
            
        } 

        if(target === "="){
            setOperated(true)
            setOperation(preview)
            setIsVisible(false)
            console.log("este es el valor de preview" + preview)
            console.log("este es el estado de preview" + isVisible ? " esta activo" : "esta desactivado")
            console.log("esto pasa despues de que le damos al igual")
            console.log("-------------------")
        }

        if (target !== "=" && target !== "AC" && target !== "X" && operated === true){
            
            if(operators.includes(target)){
                console.log("este es el valor de preview" + preview)
            console.log("este es el estado de preview" + isVisible ? " esta activo" : "esta desactivado")
            console.log("esto pasa cuando operated es true y target es un operador")
            console.log("-------------------")
                setOperation(operation + target)
                setPreview(operated)
               
                setOperated(false)
            }
        }
        
        /*else if(target !== "=" && target !== "AC" && target !== "X" && operated === true){
            if(operators.includes(target)){
                setOperation(operation + target)
                setPreview(operation)
            } 
            
            else {
                setOperation(target)
                setOperated(false)
            }
            
        }*/
    }

    

    const myDelete = (target) => {
        if (target === "X"){                   
            setOperation(operation.slice(0, -1))
        }
    }

    const replaceZero = (operation, operators, target) => {
        if(operation === "0" && !operators.includes(target)){
            setOperation(target)
        }
    }

    const showPreview = (operators, target) => {
        if(operators.includes(target)){
            setIsVisible(true)
        }
    }

    const result = (target) => {
        if (target === "="){
            setOperation(preview)
            setPreview("")
            setOperated(true)
            
        }
    } 

    const handleClick=(e)=>{ /*--------------------------------------------------------------------*/

        const target = e.target.value
        const last = operation.slice(-1)
        const operators = ["/", "*", "+", "-"]
        const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
       
       

        if(operation.length === 0 && operators.includes(target)){ // NO SE PUEDE EMPEZAR CON UN OPERADOR
            return
        } else{
            if(operators.includes(last) && operators.includes(target)){ // REPLACE THE LAST OPERATOR
                const newOperation = operation.slice(0, -1)
                setOperation(newOperation + target)
            } else {
                addValue(target, numbers, operated, operators, last)
            }
            
           
            
           // AC(target)
           // myDelete(target)
           // replaceZero(operation, operators, target)
           // replaceLastOperator(operation, operators, target, last)

            // showPreview(operators, target)

            // result(target)

            
        }
            
       
        /*

        if(operators.includes(target)){
            setIsVisible(true)
        }

        
        if(numbers.includes(last)){
            const n = eval(operation).toString()
            setPreview(n)
        }
        

        if (target === "AC"){  
            setOperation("")
            setPreview("")
            setIsVisible(false)
        } else if (target === "X"){                   
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
                 
                if(operators.includes(target)){
                    setPreview(operation)
                }

                
            }
        } */  
        
        
    }

    return ( 
        <button className={className} value={value}>{value}</button>
    );
}
 
export default Button;