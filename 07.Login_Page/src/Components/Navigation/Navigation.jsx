import Icon from "../../assets/Icon.jpg"
import styles from '../Navigation/Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={`${styles.nav} App`}>
        <div className={styles.icon}>
            <img src={Icon} alt="icon" />
        </div>

        <ul>
            <li className={styles.home}>Home</li>
            <li className={styles.about}>About</li>
            <li className={styles.contact}>Contact</li>
        </ul>
    </nav>
  )
}

export default Navigation
