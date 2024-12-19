import Footer from "../components/Footer.jsx";
import styles from "./ProfileTeacher.module.css";
import HeaderTeacher from "../components/HeaderTeacher.jsx";

const ProfileTeacher = () => {
    return (
        <div className={styles.profileTeacher}>
            <HeaderTeacher />
            <div className={styles.profileContainer}>
                {/* Секция пользователя */}
                <div className={styles.userSection}>
                    <div className={styles.avatar}>
                        <span role="img" aria-label="profile icon">👤</span>
                    </div>
                    <p className={styles.choosePhoto}>Choose a photo</p>
                    <div className={styles.userInfo}>
                        <h2 className={styles.userName}>Alina Stankovych</h2>
                        <p className={styles.userRole}>Teacher</p>
                    </div>
                </div>

                {/* Секция информации */}
                <div className={styles.infoSection}>
                    <p className={styles.infoTitle}>Groups</p>
                    <div className={styles.infoContent}>
                        <a href="#">Tue 7:30</a>
                        <a href="#">Tue 9:10</a>
                        <a href="#">Wed 10:50</a>
                        <a href="#">Thu 7:30</a>
                        <a href="#">Thu 13:30</a>
                    </div>
                    <p className={styles.infoTitle}>Email</p>
                    <div className={styles.infoContent}>
                        <a href="mailto:email.adress@domein.com">email.adress@domein.com</a>
                    </div>
                </div>

                {/* Кнопка выхода */}
                <button className={styles.logoutButton}>Log Out</button>
            </div>
            <Footer />
        </div>
    );
};

export default ProfileTeacher;