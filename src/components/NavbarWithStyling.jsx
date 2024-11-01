import styles from "./NavbarWithStyling.module.css";

function NavbarWithStyling(props) {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.title}>FSW 2</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="">{props.menu[0]}</a>
        </li>
        <li className={styles.item}>
          <a href="">{props.menu[1]}</a>
        </li>
        <li className={styles.item}>
          <a href="">{props.menu[2]}</a>
        </li>
      </ul>
    </div>
  );
}

export default NavbarWithStyling;
