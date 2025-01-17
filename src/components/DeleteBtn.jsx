const DeleteBtn = ({setOperation, operation}) => {

    const handleClick = () => {
        setOperation(operation.slice(0, -1))
    }

    return ( <button className={"btn borrar"} onClick={handleClick}>{"X"}</button> );
}
 
export default DeleteBtn;