import './ChangeThemeParent.css'
import { useState } from "react";
import ChangeThemeChild from "./ChangeThemeChild";

function ChangeThemeParent(){

    const [theme, setTheme] = useState("light");

    return(
        <>
            <button onClick={() => setTheme("light")}>Light Theme</button>
            <button onClick={() => setTheme("dark")}>Dark Theme</button>

            <ChangeThemeChild theme={theme}/>
        </>
    );
}

export default ChangeThemeParent;