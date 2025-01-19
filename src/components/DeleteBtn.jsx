const DeleteBtn = ({setOperation, operation, preview, setPreview}) => {

    const handleClick = () => {
        console.log("--------------------------------------------")
        const last = operation.slice(-1)
        const withoutLast = operation.slice(0, -1)
        const operators = ["/", "*", "+", "-"]

        setOperation(operation.slice(0, -1))
        if (!operators.includes(last)){
            console.log("el ultimo elemento no es un operador")
            setPreview(eval(withoutLast.slice(0, -1)).toString())
            
        } else {
            console.log("el ulitmo elemento es un operador")
            setPreview(preview)
        }

        if (!withoutLast.includes("+") && !withoutLast.includes("-") && !withoutLast.includes("*") && !withoutLast.includes("/") && operators.includes(last)){
            setPreview("")
        }
        
    }

    return ( <button className={"btn borrar"} onClick={handleClick}>{"X"}</button> );
}
 
export default DeleteBtn;