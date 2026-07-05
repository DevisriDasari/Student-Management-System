import { useState, useEffect } from "react";
import "./App.css";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
      return JSON.parse(savedStudents);
    }

    return [];
  });

  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "students",
      JSON.stringify(students)
    );
  }, [students]);

  function handleDelete(indexToDelete) {
    const updatedStudents = students.filter(
      (_, index) => index !== indexToDelete
    );

    setStudents(updatedStudents);
  }

  function handleEdit(index) {
    setEditIndex(index);
  }

  return (
    <div>
      <h1>Student Management System</h1>

      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search Student..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <StudentForm
        title={
          editIndex === null
            ? "Add Student"
            : "Edit Student"
        }
        buttonText={
          editIndex === null
            ? "Add Student"
            : "Update Student"
        }
        students={students}
        setStudents={setStudents}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />

      <h2 style={{ textAlign: "center" }}>
        Total Students : {students.length}
      </h2>

      <StudentList
        students={students.filter((student) =>
          student.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;