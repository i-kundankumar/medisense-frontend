import { useState } from 'react';
import './Login.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('doctor');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            username,
            password,
            userType
        };
        console.log('Form Data:', formData);
        alert(`Login Details:\nUsername: ${username}\nUser Type: ${userType}`);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="header-top">
                        <img src="/assets/logo.png" alt="MediSense Logo" className="login-logo" />
                        <a href="/" className="home-link">Home</a>
                    </div>
                    <p className="login-subtitle">Login to continue</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label className="input-label" htmlFor="username">Username</label>
                        <input id="username" type="text" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" required />
                    </div>

                    <div className="input-group">
                        <label className="input-label" htmlFor="password">Password</label>
                        <input id="password" type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                    </div>

                    <div className="radio-group">
                        <label className="radio-label">Login as:</label>
                        <div className="radio-options">
                            <label className="radio-option">
                                <input type="radio" name="userType" value="doctor" className="radio-input" checked={userType === 'doctor'} onChange={(e) => setUserType(e.target.value)} />
                                <span className="radio-text">Doctor</span>
                            </label>
                            <label className="radio-option">
                                <input type="radio" name="userType" value="patient" className="radio-input" checked={userType === 'patient'} onChange={(e) => setUserType(e.target.value)} />
                                <span className="radio-text">Patient</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="login-button">Login</button>

                    <button type="button" className="signup-link" onClick={() => navigate('/signup')}>New? Sign up here</button>
                </form>
            </div>
        </div>
    );
}