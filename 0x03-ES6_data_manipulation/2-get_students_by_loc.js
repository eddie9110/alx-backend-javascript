export default function getStudentsByLocation(studentsArray, studentLocation) {
  return studentsArray.filter((student) => student.location === studentLocation);
}
