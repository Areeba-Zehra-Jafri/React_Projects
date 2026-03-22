import './App.css'
import { useState } from 'react';
import StudentTable from './components/StudentTable'

function App() {
  const [students,setStudents] = useState([
    { roll: 1, name: "Areeba Zehra", math: 90, science: 95},
    { roll: 2, name: "Sara Ahmed", math: 92, science: 88},
    { roll: 3, name: "Usman Ali", math: 76, science: 81},
    { roll: 4, name: "Ayesha Malik", math: 89, science: 94},
    { roll: 5, name: "Bilal Hussain", math: 67, science: 72}
  ]);
  function deleteStudent(id){
    const updatedStudents= students.filter(s => s.roll!==id);
    setStudents(updatedStudents);
  }
  return (
    <>
    <StudentTable students={students} deleteStudents={deleteStudent}/>
    </>
  )
}
export default App
