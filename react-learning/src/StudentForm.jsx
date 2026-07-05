import { useState, useEffect } from "react";

function StudentForm({
  title,
  buttonText,
  students,
  setStudents,
  editIndex,
  setEditIndex,
}) {
  const [studentName, setStudentName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [course, setCourse] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      setStudentName(students[editIndex].name);
      setRollNumber(students[editIndex].roll);
      setCourse(students[editIndex].course);
      setAge(students[editIndex].age);
    }
  }, [editIndex, students]);

  function handleSubmit() {
    if (
      studentName === "" ||
      rollNumber === "" ||
      course === "" ||
      age === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const student = {
      name: studentName,
      roll: rollNumber,
      course: course,
      age: age,
    };

    if (editIndex === null) {
      setStudents([...students, student]);
    } else {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = student;
      setStudents(updatedStudents);
      setEditIndex(null);
    }

    setStudentName("");
    setRollNumber("");
    setCourse("");
    setAge("");
  }

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>{title}</h2>

      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Roll Number"
        value={rollNumber}
        onChange={(e) => setRollNumber(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        {buttonText}
      </button>
    </div>
  );
}

export default StudentForm;