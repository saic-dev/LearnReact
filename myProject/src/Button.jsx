function Button()
{
    const handleclick=(name)=>console.log(`${name} Stop clicking me`);
    return(
        <button onClick={()=>handleclick("Bondam")} className="Butn">Click Me</button>
    );
}
export default Button