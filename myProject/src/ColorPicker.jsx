import react,{useState} from 'react'
function ColorPicker(){
    function handleColorChange(event){
        setColor(event.target.value);
    } 
    const [color,setColor]=useState("#FFFFFF");
    return (<div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{color:color}}>
            <p>SeLECTED cOLOR</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange}/>


    </div>);
}
export default ColorPicker