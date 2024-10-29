import './Header.css';
import styles from './Headers.module.css';
function Header(){
    // const mystyle ={
    //     color:"red", 
    //     backgroundColor:"black",
    //     padding:"20px",
    //     fontFamily:"Sans-Serif"
    // }
    return (
        <>
        {/* <h1 style={mystyle}> */}
        <h1 className={styles.bigBlue}>
            Hello Ezhil
        </h1>
        <p> Adding a little Style</p>
        </>
    )
}

export default Header