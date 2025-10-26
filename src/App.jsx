import { useState } from 'react'
import Quiz from './components/Quiz'
import QuizForm from './components/QuizForm'
import './App.css'
import heroImage from './assets/image.png'

function App(){
  const [quizParams, setQuizParams] = useState(null)

  function handleStart(params){
    setQuizParams(params)
  }

  function handleBack(){
    setQuizParams(null)
  }

  return (
    <div className="app-root">
      <div className="app-hero">
        <h1>Welcome to the Quiz</h1>
        <p className="subtitle">Test your knowledge — one question at a time.</p>
      </div>

      <div className="app-layout">
        <div className="app-main">
          {!quizParams ? (
            <QuizForm onStart={handleStart} />
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <button className="btn ghost" onClick={handleBack}>Change settings</button>
                <div style={{ color: '#475569' }}>Topic: <strong>{quizParams.topic}</strong> • Questions: <strong>{quizParams.count}</strong></div>
              </div>
              <Quiz topic={quizParams.topic} count={quizParams.count} />
            </>
          )}
        </div>
        <aside className="app-aside">
          <img src={heroImage} alt="Quiz illustration" />
        </aside>
      </div>
    </div>
  )
}

export default App
