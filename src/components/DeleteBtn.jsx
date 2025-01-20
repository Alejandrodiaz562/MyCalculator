const DeleteBtn = ({setOperation, operation, setPreview, setIsVisible, operated, setOperated}) => {

    const handleClick = () => {
        const lastOperation = operation.slice(-1)
        const withoutLast = operation.slice(0, -1)
        const lastWithoutLast = withoutLast.slice(-1)
        const operators = ["/", "*", "+", "-"]

        setOperation(operation.slice(0, -1))
        if(operators.includes(lastWithoutLast)){
            setPreview(eval(withoutLast.slice(0, -1)).toString())
        } else {
            setPreview(eval(withoutLast).toString())
        }
        
        if(!withoutLast.includes("+") && !withoutLast.includes("-") && !withoutLast.includes("*") && !withoutLast.includes("/") && operators.includes(lastOperation)){
            setIsVisible(false)}
        
    }

    return ( <button className={"btn borrar"} onClick={handleClick}>{"X"}</button> );
}
 
export default DeleteBtn;