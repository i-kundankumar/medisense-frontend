import { useState } from "react";
import "./home.css";

function Home() {

    return (
        <>

            <main className="container mt-4">
                <section className="hero d-flex gap-4 align-items-center">
                    <div className="hero-left">
                        <span className="badge pill-stats">18K users</span>
                        <h1 className="hero-title">Medication management that actually helps.</h1>
                        <p className="hero-desc">Medisense combines AI reminders, telehealth, clinician dashboards and secure cloud storage so patients stay adherent and clinicians stay informed.</p>
                        <div className="d-flex gap-3 align-items-center mt-3">
                            <a href="Login" className="btn cta-btn btn-lg">Get Started</a>
                            <a href="features" className="text-muted">See features</a>
                        </div>
                        <div className="mt-4 quick-stats d-flex gap-3">
                            <div className="stat-card p-3">
                                <div className="stat-num">89%</div>
                                <div className="stat-label">Adherence improvement</div>
                            </div>
                            <div className="stat-card p-3">
                                <div className="stat-num">99.9%</div>
                                <div className="stat-label">Uptime</div>
                            </div>
                            <div className="stat-card p-3">
                                <div className="stat-num">HIPAA</div>
                                <div className="stat-label">Compliant</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-right">
                        <img className="patient-photo" src="/assets/patient.jpg" alt="patient and doctor" />
                        <div className="feature-card">
                            <div className="d-flex align-items-center justify-content-between">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src="/assets/avatar-1.jpg" className="avatar" alt="Patient avatar" />
                                    <div style={{ fontSize: '12px', color: '#334155' }}>Patients</div>
                                </div>
                                <div className="stat">89%</div>
                            </div>
                            <div className="stat-sub">of users improved adherence</div>
                            <div style={{ marginTop: '10px' }}>
                                <span className="feature-pill">Telehealth</span>
                                <span className="feature-pill">Scheduling</span>
                                <span className="feature-pill">Alerts</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="features mt-5" id="features">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="feature-box p-4">
                                <h5>AI Medication Reminders</h5>
                                <p className="muted">Smart scheduling, dose instructions and adaptive alerts.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box p-4">
                                <h5>Clinician Dashboard</h5>
                                <p className="muted">Real-time vitals, adherence analytics and workflow tools.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="feature-box p-4">
                                <h5>Secure Storage</h5>
                                <p className="muted">Role-based access, auditing, and encryption at rest.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonials mt-5">
                    <h3>What customers say</h3>
                    <div className="row g-3 mt-3">
                        <div className="col-md-4">
                            <blockquote className="testimonial p-3">
                                "Medisense helped my mother take meds on time. Life changing."
                                <footer>- Priya</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-4">
                            <blockquote className="testimonial p-3">
                                "Clinician dashboard saved hours of follow up."
                                <footer>- Dr. Singh</footer>
                            </blockquote>
                        </div>
                        <div className="col-md-4">
                            <blockquote className="testimonial p-3">
                                "Secure and easy to use."
                                <footer>- Health Clinic</footer>
                            </blockquote>
                        </div>
                    </div>
                </section>
            </main>

            {/* <footer className="site-footer mt-5 py-4">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>&copy; Medisense {new Date().getFullYear()}</div>
                    <div className="d-flex gap-3">
                        <a href="#privacy">Privacy</a>
                        <a href="#terms">Terms</a>
                    </div>
                </div>
            </footer> */}
        </>
    );
}

export default Home;