import Header from "../components/HeaderStudent.jsx";
import Footer from "../components/Footer.jsx";
import styles from "./ProfileStudent.module.css";

const ProfileStudent = () => {
    return (
        <div className={styles.profileStudent}>
            <Header />
            <div className={styles.profileContainer}>
                <div className={styles.leftSection}>
                    <div className={styles.avatarContainer}>
                        <div className={styles.avatar}>
                            <span role="img" aria-label="profile icon">👤</span>
                        </div>
                        <p className={styles.choosePhoto}>Choose a photo</p>
                    </div>
                    <div className={styles.userInfo}>
                        <h2 className={styles.userName}>Alina Stankovych</h2>
                        <p className={styles.userRole}>Student</p>
                    </div>
                </div>
                <div className={styles.rightSection}>
                    <div className={styles.infoItem}>
                        <p className={styles.infoTitle}>ID</p>
                        <p className={styles.infoContent}>1234567890</p>
                    </div>
                    <div className={styles.infoItem}>
                        <p className={styles.infoTitle}>Group</p>
                        <p className={styles.infoContent}>Tue 7:30</p>
                    </div>
                    <div className={styles.infoItem}>
                        <p className={styles.infoTitle}>Email</p>
                        <p className={styles.infoContent}>
                            <a href="mailto:email.adress@domein.com">
                                email.adress@domein.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <button className={styles.logoutButton}>Log Out</button>
            <Footer />
        </div>
    );
};

export default ProfileStudent;
