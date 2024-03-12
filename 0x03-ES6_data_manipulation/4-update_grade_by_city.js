export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city)
    .map((student) => {
      student.grade = 'N/A';
      for (const newGrade of newGrades) {
        if (newGrade.studentId === student.id) {
          student.grade = newGrade.grade;
        }
      }
      return student;
    });
  return studentsInCity
}
