export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsInCity = students.filter((student) => student.location === city)
    .map((student) => {
      const tempHolder = student; // used to avoid error from eslint due to
      // assignment to property of function parameter
      tempHolder.grade = 'N/A';
      for (const newGrade of newGrades) {
        if (newGrade.studentId === student.id) {
          tempHolder.grade = newGrade.grade;
        }
      }
      return student;
    });
  return studentsInCity;
}
