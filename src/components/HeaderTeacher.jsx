import styles from './HeaderTeacher.module.css';
import {Link} from "react-router-dom";
import {useState} from "react";

const HeaderTeacher = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <header className={styles.header}>
            <Link to="/home-teacher" className={styles.logo}>
                HOME
            </Link>
            <div
                className={styles.userContainer}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
            >
                <span className={`${styles.userName} ${showDropdown ? styles.active : ''}`}>
                    Alina Stankovych
                </span>
                <div
                    className={`${styles.dropdownMenu} ${
                        showDropdown ? styles.showMenu : ''
                    }`}
                >
                    <Link to="/profile-teacher">
                        <p>My Profile</p>
                    </Link>
                    <Link to={"/progress-student"}>
                        <p>My Groups</p>
                    </Link>
                    <Link to="/">
                        <p>Log Out</p>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default HeaderTeacher;
