import './ColorPicker.css'
import { useState } from "react";
function ColorPicker(){
    const [currColor,setCurrColor] = useState('LightPink');
    const ChangeColor = (color) => {
        setCurrColor(color);
    } ;
    return (
        <div>
            <div id="A" style={{backgroundColor:currColor}}>This is a container and you can change it's color.</div>
            <button onClick={()=>ChangeColor('red')}>Change Color to Red</button>
            <button onClick={()=>ChangeColor('yellow')}>Change Color to Yellow</button>
            <button onClick={()=>ChangeColor('LightPink')}>Change Color to LightPink</button>
        </div>
    );
}
export default ColorPicker;