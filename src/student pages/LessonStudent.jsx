import Header from "../components/HeaderStudent.jsx";
import styles from "./LessonStudent.module.css";
import Footer from "../components/Footer.jsx";

const LessonStudent = () => {
    return (
        <div className={styles.lessonStudent}>
            {/* Header */}
            <Header />
            {/* Main Content */}
            <div className={styles.content}>
                <h1 className={styles.taskTitle}>TASK 1. PIPE</h1>

                <div className={styles.taskDetails}>
                    <h2>Transferring a String Between Processes Using a Pipe</h2>
                    <div className={styles.section}>
                        <h3>Description:</h3>
                        <p>
                            Write a program that creates a pipe and two processes: a parent and a child.
                            <ol>
                                <li>The parent process writes a string to the pipe.</li>
                                <li>The child process reads the string from the pipe and prints it to the screen.</li>
                            </ol>
                        </p>
                    </div>

                    <div className={styles.section}>
                        <h3>Technical Requirements:</h3>
                        <ul>
                            <li>Use the system calls <code>pipe()</code>, <code>fork()</code>, <code>write()</code>,
                                and <code>read()</code>.
                            </li>
                            <li>The string to be sent can be hardcoded in the program, for example: <code>"Hello from
                                the parent process!"</code>.
                            </li>
                            <li>
                                The child process should output a message like:{" "}
                                <code>"Child process received: Hello from the parent process!"</code>.
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Hint:</h3>
                        <p>
                            Make sure to close unused ends of the pipe in each process (e.g., the parent closes the
                            reading end, and the child closes the writing end).
                        </p>
                    </div>
                </div>

                {/* File Upload Section */}
                <div className={styles.fileUpload}>
                    <button className={styles.uploadButton}>File has already been uploaded</button>
                    <div className={styles.infoSection}>
                        <span className={styles.grade}>10/10</span>
                        <i className={`fas fa-envelope ${styles.commentIcon}`}></i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LessonStudent;
