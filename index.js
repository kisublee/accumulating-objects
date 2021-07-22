const studentsArr = [
  {
    name: "Leanne Graham",
    GPA: 3.7,
    role: "Student",
  },
  {
    name: "Ervin Howell",
    GPA: 2.9,
    role: "Hall Monitor",
  },
  {
    name: "Clementine Bauch",
    GPA: 3.4,
    role: "Teacher's Assistant",
  },
  {
    name: "Patricia Lebsack",
    GPA: 4.0,
    role: "Student",
  },
  {
    name: "John Dietrich",
    GPA: 3.7,
    role: "Hall Monitor",
  },
  {
    name: "Dennis Schulist",
    GPA: 3.0,
    role: "Teacher's Assistant",
  },
];

/**
 * Returns the names of each student in the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {String} A string containing the names of all the students from the `students` array.
 */
function stringNames(students) {
  // returns the names of each student in the class
  // Input: an array of objects
  // Output: A string with the names of all the students

  // Define a default value
  let studentNames = " ";
  // Loop
  for (i = 0; i < students.length; i++) {
    //Accumulating 
      let studentName = students[i]
    if (studentName.name) {// If a student in the array has a name
      studentNames += studentName.name + ", " 
    }
  }
    return studentNames
}

stringNames(studentsArr);
//> "Leanne Graham, Ervin Howell, Clementine Bauch, Patricia Lebsack, John Dietrich, Dennis Schulist"

/**
 * Returns the names of each student in the class in an array.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {String[]} An array of the names of all the students from the `students` array.
 */
function arrayNames(students) {
  let studentNames = []; // add names to this array
  for (i = 0; i < students.length; i++) {
    let studentName = students[i]
    if (studentName.name) {
      studentNames.push(studentName.name)
    }
  }  console.log(studentNames)
    return studentNames
}

arrayNames(studentsArr);
//> ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch', 'Patricia Lebsack', 'John Dietrich', 'Dennis Schulist']

/**
 * Searches for a student by name.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @param {String} name - The name of the student to find.
 * @returns {Object} The student in the class whose name matches.
 */
function findByName(students, name) {
 
    // Search for a student by NAME
    // Input: An array of objects
    // Input2: The name of the student to find
    // Output: return an object with the name of the student that matches with 'name' parameter

    let studentName = {}; // define  a default value

    for (const name of students) {
        // Accumulating
      if (students.name === name) {
        studentName = students.name
      }
    } console.log(studentName)
    return studentName
}

findByName(studentsArr, "Clementine Bauch");
//> { "name": "Clementine Bauch", "GPA": 3.4, "role": "Teacher's Assistant" }

findByName(studentsArr, "John Dietrich");
//> { "name": "John Dietrich", "GPA": 3.7, "role": "Hall Monitor" }

/**
 * Returns the average (also known as the mean average) GPA for the class.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {Number} The average GPA for the class.
 */
function findAverageGPA(students) {

}

findAverageGPA(studentsArr);
//> 3.45

/**
 * Returns only the students who have a specific role.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @param {String} role - The role of the desired students.
 * @returns {Object[]} The students who have the role.
 */
function filterByRole(students, role) {

}

filterByRole(studentsArr, "Hall Monitor");
//> [
//     {
//         "name": "Ervin Howell",
//         "GPA": 2.9,
//         "role": "Hall Monitor"
//     },
//     {
//         "name": "John Dietrich",
//         "GPA": 3.7,
//         "role": "Hall Monitor"
//     }
// ]

filterByRole(studentsArr, "Teacher's Assistant");
//> [
//     {
//         "name": "Clementine Bauch",
//         "GPA": 3.4,
//         "role": "Teacher's Assistant",
//     },
//     {
//         "name": "Dennis Schulist",
//         "GPA": 3.0,
//         "role": "Teacher's Assistant",
//     }
// ]
