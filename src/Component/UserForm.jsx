import React, { useState } from "react";
import "./UserForm.css";

export const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [submit, setSubmit] = useState(false);

  const initial = name.trim() ? name.trim()[0] : "?";
  const emailValid = /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page">
      {/* Animated background blobs */}
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />

      <div className="glow-border">
        <div className="card">
          <header className="header">
            <span className="badge">✨ SMART FORM</span>
            <h2 className="title">User Profile</h2>
            <p className="subtitle">Fill in your details and watch them update live.</p>
          </header>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <div className="input-wrap">
                <span className="icon">👤</span>
                {/* Controlled component: value React state se aati hai */}
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value.toUpperCase().replace(/[0-9]/g,""))}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="age">Age</label>
              <div className="input-wrap">
                <span className="icon">🎂</span>
                <input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  min="0"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <div className="input-wrap">
                <span className="icon">✉️</span>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="switch-row">
              <input
                id="submit"
                className="toggle"
                type="checkbox"
                checked={submit}
                onChange={(e) => setSubmit(e.target.checked)}
              />
              <label htmlFor="submit">Click here to submit</label>
            </div>
          </form>

          <section className="preview">
            <div className="preview-head">
              <h3>Live Preview</h3>
              <span className="live">
                <i className="dot" /> LIVE
              </span>
            </div>

            <div className="profile">
              <div className="avatar">{initial}</div>
              <div className="profile-info">
                <p className="p-name">{name || "Your Name"}</p>
                <p className="p-email">
                  {email || "your@email.com"}
                  {email && (
                    <span className={emailValid ? "chip ok" : "chip bad"}>
                      {emailValid ? "valid" : "invalid"}
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="stats">
              <div className="stat">
                <span>Age</span>
                <b>{age || "—"}</b>
              </div>
              <div className="stat">
                <span>Submit</span>
                <b className={submit ? "yes" : "no"}>{submit ? "YES" : "NO"}</b>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserForm;