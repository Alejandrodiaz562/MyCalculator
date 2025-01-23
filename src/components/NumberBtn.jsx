const NumberBtn = ({value, setOperation, operation, setPreview, isVisible, operated, setOperated}) => {

    const handleClick = (e)=> {
        
        const target = e.target.value
        const last = operation.slice(-1)
        const operators = ["/", "*", "+", "-"]

        if(operated === false){

            setPreview(eval(operation + target).toString())
            if (operation.length === 0 && target === "0"){
                return
            }
            setOperation(operation + target)
           
            if(isVisible === false){
                setPreview(operation + target)
            }
        } 
        
        if(operated === true){
            
            if(operators.includes(last)){
                setOperation(operation + target)
                setPreview(eval(operation + target).toString())
                setOperated(false)
            } else {
                if(target !== "0"){
                    setOperation(target)
                    setPreview(target)
                    setOperated(false)
                }
                
            } 
            
        }
        
    }
    return ( <button className="btn" value={value} onClick={handleClick}>{value}</button> );
}
 
export default NumberBtn;