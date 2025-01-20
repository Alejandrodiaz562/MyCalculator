const EqualBtn = ({value, setOperated, setOperation, setIsVisible, preview, operation, setBeforeOperation}) => {
    
    const handleClick = (e)=> {
        setOperated(true)
        setBeforeOperation(operation)
        setOperation(preview)
        setIsVisible(false)
    }
    return ( <button className="btn equal" onClick={handleClick}>{value}</button> );
}
 
export default EqualBtn;