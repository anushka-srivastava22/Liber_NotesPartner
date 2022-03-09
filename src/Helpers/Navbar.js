import styles from "./Navbar.module.css"

function Navbar(props) {
    return(
        // Or styles.nav
        <div className={styles["nav"]} id={styles[props.id]}> 
            {props.children}
        </div>
    );
}

export default Navbar;