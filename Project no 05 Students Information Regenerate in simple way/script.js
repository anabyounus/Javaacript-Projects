
const students = [
    {
        name: "John Doe",
        semester: 3,
        father_name: "Doe",
        isFeePaid: true,
        courses: ["Mathematics", "Physics", "Computer Science"]
    },
    {
        name: "Jane Smith",
        semester: 2,
        father_name: "Smith",
        isFeePaid: true,
        courses: ["Biology", "Chemistry", "English"]
    },
    {
        name: "Emily Johnson",
        semester: 4,
        father_name: "Johnson",
        isFeePaid: false,
        courses: ["Economics", "Statistics", "Marketing"]
    }
];


function displayStudents() {
    const studentList = document.getElementById('student-list');

    students.forEach(student => {
        const studentDiv = document.createElement('div');
        studentDiv.classList.add('student');

        const feeStatusClass = student.isFeePaid ? 'fee-status' : 'fee-status unpaid';

        studentDiv.innerHTML = `
            <h2>${student.name}</h2>
            <p><strong>Father's Name:</strong> ${student.father_name}</p>
            <p><strong>Semester:</strong> ${student.semester}</p>
            <p class="${feeStatusClass}"><strong>Fee Status:</strong> ${student.isFeePaid ? 'Paid' : 'Unpaid'}</p>
            <p><strong>Courses:</strong></p>
            <ul>
                ${student.courses.map(course => `<li>${course}</li>`).join('')}
            </ul>
        `;

        studentList.appendChild(studentDiv);
    });
}

displayStudents();
