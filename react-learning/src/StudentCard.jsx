function StudentCard({
  student,
  index,
  handleDelete,
  handleEdit,
}) {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "15px",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      <h3>{student.name}</h3>

      <p><strong>Roll:</strong> {student.roll}</p>

      <p><strong>Course:</strong> {student.course}</p>

      <p><strong>Age:</strong> {student.age}</p>

      <button
        onClick={() => handleEdit(index)}
        style={{
          background: "orange",
          color: "white",
          border: "none",
          padding: "8px 15px",
          borderRadius: "5px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Edit
      </button>

      <button
        onClick={() => handleDelete(index)}
        style={{
          background: "crimson",
          color: "white",
          border: "none",
          padding: "8px 15px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default StudentCard;