import { Link } from "react-router-dom"; // Импортируем Link
import Header from "../components/HeaderStudent.jsx";
import "./HomeStudent.css";
import Footer from "../components/Footer.jsx";

const lessons = [
    { id: 1, title: "PIPE", description: "LESSON 1", locked: false },
    { id: 2, title: "SIGNALS", description: "LESSON 2", locked: true },
    { id: 3, title: "SHARED MEMORY", description: "LESSON 3", locked: true },
    { id: 4, title: "SOCKETS", description: "LESSON 4", locked: true },
];

const HomeStudent = () => {
    return (
        <div className="home-student">
            <Header />
            <h1 className="title">SELECT A LESSON</h1>
            <div className="lessons-container">
                {lessons.map((lesson) =>
                    lesson.locked ? (
                        <div key={lesson.id} className="lesson-card locked">
                            <h3>{lesson.title}</h3>
                            <p>{lesson.description}</p>
                            <i className="fas fa-lock lock-icon"></i>
                        </div>
                    ) : (
                        <Link
                            to={`/lesson/${lesson.id}`} // Переход на страницу урока
                            key={lesson.id}
                            className="lesson-card"
                        >
                            <h3>{lesson.title}</h3>
                            <p>{lesson.description}</p>
                        </Link>
                    )
                )}
            </div>
            <Footer />
        </div>
    );
};

export default HomeStudent;
