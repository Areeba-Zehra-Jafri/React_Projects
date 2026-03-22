import StudentsList from './components/StudentsList.jsx'
import './App.css'

function App() {
  const StudentArray = ["Areeba","Maham","Fatima"];

  return (
    <>
      <h1>List of Students</h1>
      <StudentsList students={StudentArray}/>
    </>
  );
}

export default App
