let addbtn = document.getElementById("add")
let Sdata = document.getElementById("StudentData")
function displayForm() {
    Sdata.style.display = "block"
    sc.style.display = "none"
}
addbtn.addEventListener('click',displayForm)


let StudentInfo = [
    {
        Name : "Anab Younus",
        StudentID : "WMA-433277",
        Department : "Computer Science",
        Program : "BS Cyber Security",
        Courses : ["Data Structure","Digital Logic Design","Differential Equation","Information Security","Artificial Intelligence"] 
    },
    {
        Name : "Dayab Younus",
        StudentID : "BCB-12S-49",
        Department : "Computer Science",
        Program : "BS Cyber Security",
        Courses : ["Data Structure","Digital Logic Design","Differential Equation","Information Security","Artificial Intelligence"] 
    },
    {
        Name : "Rafeeq Ahmed",
        StudentID : "BCB-12S-49",
        Department : "Computer Science",
        Program : "BS Cyber Security",
        Courses : ["Data Structure","Digital Logic Design","Differential Equation","Information Security","Artificial Intelligence"] 
    },
    {
        Name : "Farhat Khatoon",
        StudentID : "BCB-12S-49",
        Department : "Computer Science",
        Program : "BS Cyber Security",
        Courses : ["Data Structure","Digital Logic Design","Differential Equation","Information Security","Artificial Intelligence"] 
    }
]

let allbtn = document.getElementById("all")
let sc = document.getElementById("studentInfoCont")
function studentInfoCards(name,dept,id,prog,courses){
    let studentcont = document.createElement("div")
    studentcont.className = 'studentInfo'
    studentcont.innerHTML = `
    <p>Name : <span>${name}</span></p>
    <p>Student Id : <span>${id}</span></p>
    <p>Department : <span>${dept}</span></p>
    <p>Program : <span>${prog}</span></p>
    `;
    let crcont = document.createElement("ul")
    crcont.innerHTML = "<h2>Courses</h2>"
    courses.forEach(course =>{
        let li = document.createElement("li")
        li.innerHTML = course
        crcont.appendChild(li)
    })
    studentcont.appendChild(crcont)
document.getElementById("studentInfoCont").appendChild(studentcont);
}

function NewStudent(event){
    event.preventDefault();
    let fullName = document.getElementById("fname").value;
    let studentID = document.getElementById("id").value;
    let department = document.getElementById("dept").value;
    let program = document.getElementById("prog").value;
    let courses = []
    let checkboxname = document.querySelectorAll('.courses-cont input[type="checkbox"]');
    checkboxname.forEach(function(checkbox) {
        if (checkbox.checked) {
            courses.push(checkbox.id);
        }
    });
    let newStudent = {
        Name: fullName,
        StudentID: studentID,
        Department: department,
        Program: program,
        Courses: courses
    };
    StudentInfo.push(newStudent);
    console.log(StudentInfo)
    alert("student Successfully Enrolled")
    document.getElementById("StudentData").reset();
}

document.getElementById("enroll").addEventListener('click',NewStudent)  

function displaycards(){
    sc.innerHTML = ""
    sc.style.display = "flex"
    Sdata.style.display = "none"
    for(i = 0 ; i< StudentInfo.length;i++){
        let student = StudentInfo[i]
        studentInfoCards(student.Name,student.Department,student.StudentID,student.Program,student.Courses)
    }
}
let newbtn = document.getElementById("new")
function newdata(){
    sc.innerHTML = ""
    sc.style.display = "flex"
    Sdata.style.display = "none"
    for(i = StudentInfo.length-1;i >= 0 ;i--){
        let student = StudentInfo[i]
        studentInfoCards(student.Name,student.Department,student.StudentID,student.Program,student.Courses)
    }

    console.log(StudentInfo)
}
let oldbtn = document.getElementById("old")
function oldData(){
    sc.innerHTML = ""
    sc.style.display = "flex"
    Sdata.style.display = "none"
    for(i = 0 ; i< StudentInfo.length;i++){
        let student = StudentInfo[i]
        studentInfoCards(student.Name,student.Department,student.StudentID,student.Program,student.Courses)
    }
}
oldbtn.addEventListener('click',oldData)
newbtn.addEventListener('click',newdata)
allbtn.addEventListener('click',displaycards)

function searchStudent(){
    sc.innerHTML = ""
    sc.style.display = "flex"
    Sdata.style.display = "none"
    let found = false
    let Sname = document.getElementById("IndividualStudent").value
    for (i = 0; i< StudentInfo.length; i++ ){
        let student = StudentInfo[i]
        if(Sname.toLowerCase() == student.Name.toLowerCase()){
        studentInfoCards(student.Name,student.Department,student.StudentID,student.Program,student.Courses)
        found = true
        sc.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    if(!found){
        alert("Record of this student is not fount")
    }
    document.getElementById("IndividualStudent").value =""
}
let searchbtn = document.getElementById("search")
searchbtn.addEventListener('click',searchStudent)