import React from "react";

function features() {
    return (
        <div className="container mt-4">
            <h1>Features</h1>
            <p className="muted">
                Everything clinicians and patients need to manage medication and care.
            </p>

            <div className="row g-4 mt-3">
                <div className="col-md-6">
                    <div className="feature-detail p-4">
                        <h4>Smart Reminders</h4>
                        <p className="muted">
                            Context-aware reminders, with missed-dose escalation and adherence
                            reports.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="feature-detail p-4">
                        <h4>Telehealth</h4>
                        <p className="muted">
                            Secure video visits, messaging and appointment scheduling.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="feature-detail p-4">
                        <h4>Dashboards &amp; Reports</h4>
                        <p className="muted">
                            Patient timelines, trends and exportable reports for clinics.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="feature-detail p-4">
                        <h4>Security</h4>
                        <p className="muted">
                            Encryption, audit logs and enterprise controls.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default features;
