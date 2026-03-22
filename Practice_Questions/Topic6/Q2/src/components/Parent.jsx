import InputChild from "./InputChild";
import DisplayChild from "./DisplayChild";
import { useState } from "react";
function Parent(){
    const [text,setText] = useState("");
    return(
        <>
        <InputChild changeText={setText}/>
        <DisplayChild text={text}/>
        </>
    );
}
export default Parent;