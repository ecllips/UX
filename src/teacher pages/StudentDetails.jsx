import styles from "./StudentDetails.module.css";
import HeaderTeacher from "../components/HeaderTeacher.jsx";
import Footer from "../components/Footer.jsx";

const studentData = {
    name: "John Anderson",
    lessons: [
        { lesson: "LESSON 1", task: "PIPE", status: "Completed", grade: "9/10" },
        { lesson: "LESSON 2", task: "SIGNALS", status: "Locked", grade: "—" },
        { lesson: "LESSON 3", task: "SHARED MEMORY", status: "Locked", grade: "—" },
        { lesson: "LESSON 4", task: "SOCKETS", status: "Locked", grade: "—" },
    ],
};

const StudentDetails = () => {
    // Рассчитываем общую оценку
    const completedLessons = studentData.lessons.filter((lesson) => lesson.grade !== "—");
    const totalGrade =
        completedLessons.reduce((acc, lesson) => acc + parseInt(lesson.grade, 10), 0) /
        completedLessons.length || 0;

    return (
        <div className={styles.studentDetails}>
            <HeaderTeacher />
            <h1 className={styles.title}>{studentData.name}</h1>
            <div className={styles.studentInfo}>
                <p>Group: Tue 7:30</p>
                <p>Email: john.anderson@example.com</p>
            </div>
            <div className={styles.totalGrade}>
                Total Grade: {totalGrade.toFixed(1)}/10
            </div>
            <div className={styles.table}>
                <div className={styles.tableHeader}>
                    <span>Lesson</span>
                    <span>Task</span>
                    <span>Status</span>
                    <span>Grade</span>
                    <span>Comment</span>
                </div>
                {studentData.lessons.map((lesson, index) => (
                    <div key={index} className={styles.tableRow}>
                        <span>{lesson.lesson}</span>
                        <span>{lesson.task}</span>
                        <span>
                            {lesson.status === "Locked" ? (
                                <i className={`fas fa-lock ${styles.icon}`}></i>
                            ) : (
                                lesson.status
                            )}
                        </span>
                        <span>{lesson.grade}</span>
                        <span>
                            <i className={`fas fa-envelope ${styles.icon}`}></i>
                        </span>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default StudentDetails;
