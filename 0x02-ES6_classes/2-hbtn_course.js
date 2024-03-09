export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || newStudents.every((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }

  get students() {
    return this._students;
  }
}
