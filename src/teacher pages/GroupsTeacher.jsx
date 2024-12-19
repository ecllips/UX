import { Link } from "react-router-dom";
import styles from "./GroupsTeacher.module.css";
import HeaderTeacher from "../components/HeaderTeacher.jsx";
import Footer from "../components/Footer.jsx";

const groups = [
    { id: 1, name: "tue 7:30", people: 23 },
    { id: 2, name: "tue 9:10", people: 18 },
    { id: 3, name: "wed 10:50", people: 21 },
    { id: 4, name: "thu 7:30", people: 20 },
    { id: 5, name: "thu 13:30", people: 24 },
];

const GroupsTeacher = () => {
    return (
        <div className={styles.groupsTeacher}>
            <HeaderTeacher />
            <h1 className={styles.title}>My Groups</h1>
            <div className={styles.groupsContainer}>
                {groups.map((group) => (
                    <Link
                        to={`/group-details/${group.id}`} // Переход на страницу группы
                        key={group.id}
                        className={styles.groupCard}
                    >
                        <span className={styles.groupName}>{group.name}</span>
                        <span className={styles.groupPeople}>{group.people}</span>
                        <i className={`fas fa-envelope ${styles.groupComment}`}></i>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default GroupsTeacher;
