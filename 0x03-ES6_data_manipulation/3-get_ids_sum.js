export default function getStudentIdsSum(students) {
  const ids = students.map((student) => student.id)
    .reduce((a, b) => a + b);
  return ids;
}
