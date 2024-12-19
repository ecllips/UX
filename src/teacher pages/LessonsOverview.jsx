import styles from "./LessonsOverview.module.css";
import HeaderTeacher from "../components/HeaderTeacher.jsx";
import Footer from "../components/Footer.jsx";

const lessons = [
    { id: 1, title: "PIPE", description: "LESSON 1", locked: false },
    { id: 2, title: "SIGNALS", description: "LESSON 2", locked: true },
    { id: 3, title: "SHARED MEMORY", description: "LESSON 3", locked: true },
    { id: 4, title: "SOCKETS", description: "LESSON 4", locked: true },
];

const LessonsOverview = () => {
    return (
        <div className={styles.lessonsOverview}>
            <HeaderTeacher />
            <h1 className={styles.title}>Available Lessons</h1>
            <div className={styles.lessonsContainer}>
                {lessons.map((lesson) =>
                    lesson.locked ? (
                        <div key={lesson.id} className={`${styles.lessonCard} ${styles.locked}`}>
                            <h3>{lesson.title}</h3>
                            <p>{lesson.description}</p>
                            <i className={`fas fa-lock ${styles.lockIcon}`}></i>
                        </div>
                    ) : (
                        <div key={lesson.id} className={styles.lessonCard}>
                            <h3>{lesson.title}</h3>
                            <p>{lesson.description}</p>
                        </div>
                    )
                )}
            </div>
            <Footer />
        </div>
    );
};

export default LessonsOverview;
