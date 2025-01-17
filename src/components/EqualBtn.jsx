const EqualBtn = ({value, setOperated, setOperation, setIsVisible, preview}) => {
    const handleClick = (e)=> {
        console.log("hello" + value)

        setOperated(true)
        setOperation(preview)
        setIsVisible(false)

        
    }
    return ( <button className="btn equal" onClick={handleClick}>{value}</button> );
}
 
export default EqualBtn;