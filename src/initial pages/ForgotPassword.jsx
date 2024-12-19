import './Login.css';

const ForfotPassword = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Forgot your password?</h2>
                <form className="login-form">
                    <div className="input-field">
                        <input type="email" placeholder="Email"/>
                    </div>
                    <button className="submit-button">SEND ME RESET PASSWORD INSTRUCTION</button>
                </form>
            </div>
        </div>
    );
};

export default ForfotPassword;
