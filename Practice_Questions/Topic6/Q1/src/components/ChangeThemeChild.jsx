import './ChangeThemeChild.css'
function ChangeThemeChild({theme}){
    return(
        <div className={theme}>
            <h1>THEME</h1>
            <p>This is a sample text that changes it's color based on theme</p>
        </div>
    );
}
export default ChangeThemeChild;