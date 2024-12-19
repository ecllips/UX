import styles from "./HomeTeacher.module.css";
import Footer from "../components/Footer.jsx";
import HeaderTeacher from "../components/HeaderTeacher.jsx";
import { Link } from "react-router-dom";

const HomeTeacher = () => {
    return (
        <div className={styles.homeTeacher}>
            <HeaderTeacher />
            <h1 className={styles.title}>TEACHER DASHBOARD</h1>
            <div className={styles.container}>
                <Link to="/my-groups" className={styles.card}>
                    <h3>My Groups</h3>
                    <p>View and manage your groups.</p>
                </Link>
                <Link to="/lessons-overview" className={styles.card}>
                    <h3>View Lessons</h3>
                    <p>Explore and edit available lessons.</p>
                </Link>
            </div>
            <Footer />
        </div>
    );
};

export default HomeTeacher;
