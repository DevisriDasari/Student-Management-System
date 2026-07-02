let editingRow = null;
let students = [];

const studentName = document.getElementById("studentName");
const rollNumber = document.getElementById("rollNumber");
const course = document.getElementById("course");
const age = document.getElementById("age");

const tableBody = document.querySelector("#studentTable tbody");
const searchInput = document.getElementById("searchInput");
const studentCount = document.getElementById("studentCount");
const addBtn = document.getElementById("addBtn");
const deleteAllBtn = document.getElementById("deleteAllBtn");

// --------------------------
// Load Data From LocalStorage
// --------------------------

window.onload = function () {

    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {

        students = JSON.parse(savedStudents);

        students.forEach(function (student) {

            createRow(student);

        });

        updateStudentCount();

    }

};

// --------------------------
// Save Data
// --------------------------

function saveStudents() {

    localStorage.setItem("students", JSON.stringify(students));

}
function updateStudentCount() {

    studentCount.textContent = "Total Students: " + students.length;

}

// --------------------------
// Add / Update Student
// --------------------------

addBtn.addEventListener("click", function () {

    if (
        studentName.value === "" ||
        rollNumber.value === "" ||
        course.value === "" ||
        age.value === ""
    ) {

        alert("Please fill all fields!");
        return;

    }
    const exists = students.find(function (student) {
    return student.roll === rollNumber.value;
});

if (exists && editingRow === null) {
    alert("Roll Number already exists!");
    return;
}

    // Update Student

    if (editingRow !== null) {

        const index = editingRow.dataset.index;

        students[index] = {

            name: studentName.value,
            roll: rollNumber.value,
            course: course.value,
            age: age.value

        };

        saveStudents();

        tableBody.innerHTML = "";

        students.forEach(function (student) {

            createRow(student);

        });

        editingRow = null;

        addBtn.textContent = "Add Student";

        studentName.value = "";
        rollNumber.value = "";
        course.value = "";
        age.value = "";

        return;

    }

    // New Student

    const student = {

        name: studentName.value,
        roll: rollNumber.value,
        course: course.value,
        age: age.value

    };

    students.push(student);

    saveStudents();

    createRow(student);
    updateStudentCount();

    studentName.value = "";
    rollNumber.value = "";
    course.value = "";
    age.value = "";

});
// --------------------------
// Create Table Row
// --------------------------

function createRow(student) {

    const row = document.createElement("tr");

    row.dataset.index = students.indexOf(student);

    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.roll}</td>
        <td>${student.course}</td>
        <td>${student.age}</td>
        <td>
            <button class="editBtn">Edit</button>
            <button class="deleteBtn">Delete</button>
        </td>
    `;

    tableBody.appendChild(row);

    // Edit
    row.querySelector(".editBtn").addEventListener("click", function () {

        studentName.value = student.name;
        rollNumber.value = student.roll;
        course.value = student.course;
        age.value = student.age;

        editingRow = row;

        addBtn.textContent = "Update Student";

    });

    // Delete
    row.querySelector(".deleteBtn").addEventListener("click", function () {
        const confirmDelete = confirm("Are you sure you want to delete this student?");

if (!confirmDelete) {
    return;
}

        const index = row.dataset.index;

        students.splice(index, 1);

        saveStudents();

        tableBody.innerHTML = "";

        students.forEach(function (student) {

            createRow(student);

        });
        updateStudentCount();

    });

}

// --------------------------
// Search Student
// --------------------------

searchInput.addEventListener("keyup", function () {

    const value = searchInput.value.toLowerCase();

    const rows = tableBody.querySelectorAll("tr");

    rows.forEach(function (row) {

        const name = row.cells[0].textContent.toLowerCase();

        if (name.includes(value)) {

            row.style.display = "";

        } else {

            row.style.display = "none";

        }

    });

});
deleteAllBtn.addEventListener("click", function () {

    if (students.length === 0) {
        alert("No students available!");
        return;
    }

    const confirmDelete = confirm("Delete all students?");

    if (!confirmDelete) {
        return;
    }

    students = [];

    saveStudents();

    tableBody.innerHTML = "";

    updateStudentCount();

});