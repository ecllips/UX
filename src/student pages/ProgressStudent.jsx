import styles from "./ProgressStudent.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../components/HeaderStudent.jsx";
import Footer from "../components/Footer.jsx";

const ProgressStudent = () => {
    return (
        <div className={styles.progressContainer}>
            <Header />
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <span>Lesson</span>
                    <span>Task</span>
                    <span>Status</span>
                    <span>Grade</span>
                    <span>Comment</span>
                </div>

                {/* Доступный урок */}
                <div className={styles.tableRow}>
                    <span>LESSON 1</span>
                    <span>PIPE</span>
                    <span>
                        <i className={`fas fa-lock-open ${styles.icon}`}></i>
                    </span>
                    <span>10/10</span>
                    <span>
                        <i className={`fas fa-envelope ${styles.icon}`}></i>
                    </span>
                </div>

                {/* Заблокированные уроки */}
                <div className={`${styles.tableRow} ${styles.lockedRow}`}>
                    <span>LESSON 2</span>
                    <span>SIGNALS</span>
                    <span>
                        <i className={`fas fa-lock ${styles.icon}`}></i>
                    </span>
                    <span>—</span>
                    <span>
                        <i className={`fas fa-envelope ${styles.icon}`}></i>
                    </span>
                </div>

                <div className={`${styles.tableRow} ${styles.lockedRow}`}>
                    <span>LESSON 3</span>
                    <span>SHARED MEMORY</span>
                    <span>
                        <i className={`fas fa-lock ${styles.icon}`}></i>
                    </span>
                    <span>—</span>
                    <span>
                        <i className={`fas fa-envelope ${styles.icon}`}></i>
                    </span>
                </div>

                <div className={`${styles.tableRow} ${styles.lockedRow}`}>
                    <span>LESSON 4</span>
                    <span>SEMAPHORES</span>
                    <span>
                        <i className={`fas fa-lock ${styles.icon}`}></i>
                    </span>
                    <span>—</span>
                    <span>
                        <i className={`fas fa-envelope ${styles.icon}`}></i>
                    </span>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProgressStudent;
