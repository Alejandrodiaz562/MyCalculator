const PointBtn = ({value, operation, setOperation}) => {
    const handleClick = (e) => {
        const target = e.target.value
        if (operation.length > 0){
            setOperation(operation + target)
        }
    }
    return ( 
        <button className="btn" value={value} onClick={handleClick}>{value}</button>
     );
}
 
export default PointBtn;