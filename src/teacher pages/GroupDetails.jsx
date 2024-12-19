import { useParams, Link } from "react-router-dom";
import styles from "./GroupDetails.module.css";
import HeaderTeacher from "../components/HeaderTeacher.jsx";
import Footer from "../components/Footer.jsx";

const GroupDetails = () => {
    const { groupId } = useParams(); // Получение ID группы из URL

    const groupData = {
        1: {
            name: "tue 7:30",
            students: [
                { id: 1, name: "John Anderson", grade: 9 },
                { id: 2, name: "Emily Carter", grade: 8 },
                { id: 3, name: "Michael Johnson", grade: 7 },
                { id: 4, name: "Sophia Brown", grade: 10 },
                { id: 5, name: "David Thompson", grade: 6 },
                { id: 6, name: "Olivia Smith", grade: 7 },
                { id: 7, name: "James Miller", grade: 5 },
                { id: 8, name: "Charlotte Davis", grade: 9 },
                { id: 9, name: "Daniel Wilson", grade: 8 },
                { id: 10, name: "Megan White", grade: 10 },
                { id: 11, name: "Anthony Harris", grade: 7 },
                { id: 12, name: "Isabella Moore", grade: 6 },
                { id: 13, name: "Benjamin Taylor", grade: 8 },
                { id: 14, name: "Victoria Martin", grade: 9 },
                { id: 15, name: "Ethan Thomas", grade: 7 },
                { id: 16, name: "Emma Jackson", grade: 6 },
                { id: 17, name: "Matthew Garcia", grade: 8 },
                { id: 18, name: "Chloe Martinez", grade: 9 },
                { id: 19, name: "Andrew Robinson", grade: 10 },
                { id: 20, name: "Ava Clark", grade: 6 },
                { id: 21, name: "Alexander Lewis", grade: 7 },
                { id: 22, name: "Mia Walker", grade: 9 },
                { id: 23, name: "William Hall", grade: 8 },
            ],
        },
        2: {
            name: "tue 9:10",
            students: [
                { id: 24, name: "Michael Adams", grade: 7 },
                { id: 25, name: "Sophia Carter", grade: 9 },
                { id: 26, name: "Jacob Brown", grade: 8 },
                { id: 27, name: "Emily Martin", grade: 10 },
                { id: 28, name: "Lucas Walker", grade: 6 },
                { id: 29, name: "Grace Harris", grade: 8 },
                { id: 30, name: "Oliver Thomas", grade: 7 },
                { id: 31, name: "Liam Moore", grade: 9 },
                { id: 32, name: "Ella Robinson", grade: 10 },
                { id: 33, name: "Sophia Lewis", grade: 6 },
                { id: 34, name: "James Johnson", grade: 8 },
                { id: 35, name: "Amelia Davis", grade: 9 },
                { id: 36, name: "Henry Wilson", grade: 7 },
                { id: 37, name: "Charlotte Garcia", grade: 8 },
                { id: 38, name: "Ethan Clark", grade: 6 },
                { id: 39, name: "Victoria Taylor", grade: 7 },
                { id: 40, name: "Andrew Martinez", grade: 9 },
                { id: 41, name: "Mia Adams", grade: 8 },
                { id: 42, name: "Daniel Thompson", grade: 10 },
            ],
        },
    };

    const group = groupData[groupId];

    return (
        <div className={styles.groupDetails}>
            <HeaderTeacher />
            <h1 className={styles.title}>{group ? group.name : "Group Not Found"}</h1>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <span>#</span>
                    <span>Full Name</span>
                    <span>Grade</span>
                </div>
                {group ? (
                    group.students.map((student, index) => (
                        <div key={student.id} className={styles.tableRow}>
                            <span>{index + 1}</span>
                            {/* Переход на страницу студента */}
                            <Link
                                to={`/student/${student.id}`}
                                className={styles.studentLink}
                            >
                                {student.name}
                            </Link>
                            <span>{student.grade}</span>
                        </div>
                    ))
                ) : (
                    <p>No data available for this group.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default GroupDetails;
