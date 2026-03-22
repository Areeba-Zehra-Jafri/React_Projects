import React from "react";

const StudentTable = ({students,deleteStudents}) => {
  return (
    <div style={{display: "flex",flexDirection: "column",alignItems: "center",
      color:"blueviolet"
    }}>
      <h2>Student Marks Table</h2>
      <table border="1" cellPadding="10" >
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>Math</th>
            <th>Science</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.roll}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.math}</td>
              <td>{student.science}</td>
              <td>{student.math+student.science}</td>
              <td><button onClick={()=>deleteStudents(student.roll)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;