function InputChild({changeText})
{
    return(
        <>
        <label>Input: </label>
        <input type="text" onChange={event => changeText(event.target.value)}/>
        </>
    )
}
export default InputChild;