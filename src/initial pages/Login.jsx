import './Login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState(""); // Состояние для email
    const [password, setPassword] = useState(""); // Состояние для пароля
    const navigate = useNavigate(); // Для перенаправления

    const handleLogin = (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        if (email.toLowerCase() === "student") {
            navigate("/home-student"); // Перенаправляем студента
        } else if (email.toLowerCase() === "teacher") {
            navigate("/home-teacher"); // Перенаправляем учителя
        } else {
            alert("Invalid email. Please use 'student' or 'teacher'."); // Ошибка при вводе
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login to OS</h2>
                {/* Форма с обработчиком onSubmit */}
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="input-field">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Обновляем email
                        />
                    </div>
                    <div className="input-field">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Обновляем пароль
                        />
                    </div>
                    {/* Кнопка отправки формы */}
                    <button type="submit" className="submit-button">
                        SIGN IN
                    </button>
                </form>
                <div className="forgot-password">
                    <a href="/forgot-password">Forgot your password?</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
