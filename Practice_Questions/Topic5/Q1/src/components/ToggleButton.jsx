
import { useState } from "react";
function ToggleButton(){
    const [visibility,setVisibility] = useState(0);
    const ShowHideText = () => {
        if(visibility===1)
        {
            setVisibility(0);
        }
        if(visibility===0)
        {
            setVisibility(1);
        }
    } ;
    return (
        <div>
            {visibility===1 && <p>This is the hiddentext</p>}
            <button onClick={ShowHideText}>Show/Hide Text</button>
        </div>
    );
}


export default ToggleButton;