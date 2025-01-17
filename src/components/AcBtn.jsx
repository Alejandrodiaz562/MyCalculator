const AcBtn = ({setOperation, setPreview, setIsVisible, setOperated}) => {

    const handleClick = () => {
        setOperation("")
        setPreview("")
        setIsVisible(false)
        setOperated(false)
    }

    return ( <button className="btn limpiar" onClick={handleClick}>{"AC"}</button> );
}
 
export default AcBtn;