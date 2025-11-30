import { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    role: 'doctor',
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    registrationId: '',
    age: '',
    gender: 'Male',
    primaryConcern: '',
    agreeToTerms: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name !== 'agreeToTerms') {
      setFormData(prev => ({
        ...prev,
        communicationPreference: {
          ...prev.communicationPreference,
          [name]: checked
        }
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match! Please try again.');
      return;
    }

    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and privacy policy.');
      return;
    }
    alert(`Account Created!\nRole: ${formData.role}\nName: ${formData.fullName}\nEmail: ${formData.email}`);
  };

  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1 className="signup-title">Medical Dashboard</h1>
          <p className="signup-subtitle">Create your account</p>
        </div>

        <div className="signup-form">
          <div className="radio-group">
            <label className="input-label">Select Role:</label>
            <div className="radio-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="role"
                  value="doctor"
                  className="radio-input"
                  checked={formData.role === 'doctor'}
                  onChange={handleInputChange}
                />
                <span className="radio-text">Doctor</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="role"
                  value="patient"
                  className="radio-input"
                  checked={formData.role === 'patient'}
                  onChange={handleInputChange}
                />
                <span className="radio-text">Patient</span>
              </label>
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="input-field"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Username</label>
            <input
              type="text"
              name="username"
              className="input-field"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Choose a username"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Password</label>
            <input
              type="password"
              name="password"
              className="input-field"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create a password"
            />
          </div>

          <div className="input-group">
            <label className="input-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="input-field"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Re-enter your password"
            />
          </div>

          {formData.role === 'doctor' && (
            <>

              <div className="input-group">
                <label className="input-label">Registration ID / License Number</label>
                <input
                  type="text"
                  name="registrationId"
                  className="input-field"
                  value={formData.registrationId}
                  onChange={handleInputChange}
                  placeholder="Medical license number"
                />
              </div>
            </>
          )}

          {formData.role === 'patient' && (
            <>
              <div className="input-group">
                <label className="input-label">Age</label>
                <input
                  type="number"
                  name="age"
                  className="input-field"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="Enter your age"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Gender</label>
                <select
                  name="gender"
                  className="select-field"
                  value={formData.gender}
                  onChange={handleInputChange}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </>
          )}

          <div className="terms-group">
            <input
              type="checkbox"
              name="agreeToTerms"
              className="checkbox-input"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
            />
            <label className="checkbox-label">
              I agree to the terms and privacy policy.
            </label>
          </div>

          <button onClick={handleSubmit} className="signup-button">
            Create Account
          </button>

          <button
            className="login-link"
            onClick={() => navigate('/')}
          >
            Already have an account? Login here
          </button>
        </div>
      </div>
    </div>
  );
}