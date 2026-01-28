import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      {/* ส่วนหัว Header เล็กๆ */}
      <header className="header">
        <p>CI/CD Playground 🚀</p>
      </header>

      {/* เริ่มต้น Bento Grid */}
      <div className="bento-grid">
        
        {/* กล่อง 1 (ใหญ่): Profile Info */}
        <div className="card profile-card">
          <div className="profile-content">
            {/* ลองเปลี่ยน src เป็นรูปตัวเองดูนะครับ */}
            <img src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" className="profile-img" alt="Profile" />
            <div>
              <h1>Atthakit Khampraphai</h1>
              <p>Intern Developer</p>
              <p style={{ opacity: 0.7, fontSize: '0.9em' }}>
                กำลังฝึกวิชา CI/CD + React<br/>
                ว่างงานอยู่ หาไรทำแก้เบื่อครับ 555
              </p>
            </div>
          </div>
        </div>

        {/* กล่อง 2 (เล็ก): Tech Stack */}
        <div className="card tech-card">
          <h3>Tech Stack</h3>
          <div className="logos">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <p style={{fontSize: '0.8rem', marginTop: '10px'}}>Powered by GitHub Actions</p>
        </div>

        {/* กล่อง 3 (เล็ก): Counter (Logic เดิม) */}
        <div className="card counter-card">
          <h3>Playground</h3>
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p style={{fontSize: '0.8rem', marginTop: '10px'}}>
            State จะหายถ้า Refresh<br/>(แต่ Deploy ไม่หายนะ)
          </p>
        </div>

        {/* กล่อง 4 (ยาว): Social / Links */}
        <div className="card social-card">
          <h3>Find me on</h3>
          <div className="links">
            <a href="https://github.com" target="_blank" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Resume</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App