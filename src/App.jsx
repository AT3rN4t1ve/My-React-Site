import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      
      {/* ส่วนหัวเหลือแค่ข้อความเท่ๆ */}
      <header className="header-text">
        <p>PORTFOLIO / PLAYGROUND</p>
      </header>

      <div className="bento-grid">
        
        {/* Card 1: Profile (Highlight) */}
        <div className="card profile-card">
          <div className="profile-badge">INTERN</div>
          <div className="profile-info">
            <h1>Atthakit K.</h1>
            <p className="role">Frontend & CI/CD Enthusiast</p>
            <p className="bio">
              กำลังฝึกวิชา GitHub Actions + React<br/>
              เปลี่ยนเรื่องยากให้เป็นเรื่องอัตโนมัติ 🤖
            </p>
          </div>
        </div>

        {/* Card 2: Tech Stack (Minimal List) */}
        <div className="card stack-card">
          <h3>Tech Stack</h3>
          <div className="tags">
            <span>React</span>
            <span>Vite</span>
            <span className="highlight">GitHub Actions</span>
            <span>CSS Grid</span>
          </div>
        </div>

        {/* Card 3: Interactive Playground */}
        <div className="card playground-card">
          <h3>Interactive</h3>
          <div className="counter-box">
            <span className="count-number">{count}</span>
            <button onClick={() => setCount(c => c + 1)}>
              + Click Me
            </button>
          </div>
        </div>

        {/* Card 4: Status (โชว์ว่า Deploy จริง) */}
        <div className="card status-card">
          <h3>System Status</h3>
          <div className="status-indicator">
            <span className="dot"></span>
            <span>All Systems Operational</span>
          </div>
          <p style={{fontSize: '0.8rem', color: '#64748b', marginTop: '5px'}}>
            Deployed via GitHub Pages
          </p>
        </div>

        {/* Card 5: Social Links */}
        <div className="card link-card">
          <a href="https://github.com" target="_blank" className="link-item">
            GitHub ↗
          </a>
          <a href="#" className="link-item">
            LinkedIn ↗
          </a>
        </div>

      </div>
    </div>
  )
}

export default App