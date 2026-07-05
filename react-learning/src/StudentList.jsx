import StudentCard from "./StudentCard";

function StudentList({
  students,
  handleDelete,
  handleEdit,
}) {
  return (
    <div style={{ width: "80%", margin: "20px auto" }}>
      <h2 style={{ textAlign: "center" }}>
        Student List
      </h2>

      {students.length === 0 ? (
        <h3 style={{ textAlign: "center", color: "gray" }}>
          No Students Found
        </h3>
      ) : (
        students.map((student, index) => (
          <StudentCard
            key={index}
            student={student}
            index={index}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
}

export default StudentList;