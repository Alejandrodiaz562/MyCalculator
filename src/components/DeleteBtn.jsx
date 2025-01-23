import { evaluate } from 'mathjs';

const DeleteBtn = ({setOperation, operation, setPreview, setIsVisible, operated, setOperated, beforeOperation}) => {

    const handleClick = () => {
        const lastOperation = operation.slice(-1)
        const withoutLast = operation.slice(0, -1)
        const lastWithoutLast = withoutLast.slice(-1)
        const operators = ["/", "*", "+", "-"]

        if(operated === false){
            setOperation(operation.slice(0, -1))
            if(operators.includes(lastWithoutLast)){
                setPreview(evaluate(withoutLast.slice(0, -1)).toString())
            } else {
                setPreview(evaluate(withoutLast).toString())
            }

            if(!withoutLast.includes("+") && !withoutLast.includes("-") && !withoutLast.includes("*") && !withoutLast.includes("/") && operators.includes(lastOperation)){
                setIsVisible(false)
            }
        }

        if(operated === true){
            setOperation(beforeOperation)
            setIsVisible(true)
            setOperated(false)
        }
    }

    return ( <button className={"btn borrar"} onClick={handleClick}>{"X"}</button> );
}
 
export default DeleteBtn;