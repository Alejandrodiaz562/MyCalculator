const Button = ({value, setOperation, operation, className}) => {

    const result = (a) => {
        if (a !== "="){
            setOperation(operation + a)
        }
    }

    const handleClick=(e)=>{

       console.log(e.target.value)
    }
    return ( 
        <button className={className} value={value} onClick={handleClick}>{value}</button>
    );
}
 
export default Button;