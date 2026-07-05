function StudentCard({
  student,
  index,
  handleDelete,
  handleEdit,
}) {
  return (
    <div className="student-card">
      <h2 style={{ marginBottom: "10px" }}>
        👨‍🎓 {student.name}
      </h2>

      <p>
        <strong>🆔 Roll Number:</strong> {student.roll}
      </p>

      <p>
        <strong>📘 Course:</strong> {student.course}
      </p>

      <p>
        <strong>🎂 Age:</strong> {student.age}
      </p>

      <div style={{ marginTop: "15px" }}>
        <button
          className="edit-btn"
          onClick={() => handleEdit(index)}
        >
          ✏️ Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => handleDelete(index)}
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}

export default StudentCard;