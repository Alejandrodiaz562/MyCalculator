const OperatorBtn = ({value, operation, setIsVisible, setOperation}) => {
    const handleClick = (e)=> {
        console.log("hello" + value)

        const target = e.target.value
        const operators = ["/", "*", "+", "-"]
        const last = operation.slice(-1)

        if(operation.length > 0){
            setOperation(operation + target)
            setIsVisible(true)
        }

        if(operators.includes(last)){ 
            const newOperation = operation.slice(0, -1)
            setOperation(newOperation + target)
        }
    }
    return ( <button className="btn" value={value} onClick={handleClick}>{value}</button> );
}
 
export default OperatorBtn;