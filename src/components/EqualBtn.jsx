const EqualBtn = ({value, setOperated, setOperation, setIsVisible, preview}) => {
    
    const handleClick = (e)=> {
        setOperated(true)
        setOperation(preview)
        setIsVisible(false)
    }
    return ( <button className="btn equal" onClick={handleClick}>{value}</button> );
}
 
export default EqualBtn;