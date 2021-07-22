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

  // Define a default value // determine our initial value. (And, recommended: write the return immediately)
  let studentNames = " ";
  // Loop
  for (i = 0; i < students.length; i++) {
    //Accumulating 
      let studentName = students[i]

      // if (studentName === students[students.length -1]) {
      // if ( i === students.length -1){
      // studentNames += studentName.name
      // } else
      // studentNames += studentName.name + ", ";
      if (studentName.name) {// If a student in the array has a name
        studentNames += studentName.name + ", " 
      }
    }
    studentNames = studentNames.slice(0, studentNames.length - 2) // or (slice(0, -2))
    console.log(studentNames)
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
      //studentNames.push(students[i].name); this will do all the lines above in one line.

    }
  // }  console.log(studentNames)
    return studentNames
}
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

    for (const i of students) {
        // Accumulating
      if (i.name === name) {
        studentName = i
        console.log(studentName)
      }
    }
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

  // Return the average GPA for the (entire) class
  // Input: an array of objects
  // Output: The average GPA in number 
  // Define our defalut value
  if (!students) {
    return null;
  }
  let avgGpa = 0;
  let totalGpa = 0;
  // Define your loop
  for (i = 0; i < students.length; i++) {
    const studentGpa = students[i].GPA // each student's GPA
    totalGpa += studentGpa
    avgGpa = totalGpa / students.length 
  }
  return Number(avgGpa.toFixed(2))
}
const result = findAverageGPA([]); // Test what would be the outcome, if [] is passed in
console.log(result)
// findAverageGPA(studentsArr);
//> 3.45

/**
 * Returns only the students who have a specific role.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @param {String} role - The role of the desired students.
 * @returns {Object[]} The students who have the role.
 */
function filterByRole(students, role) {
  // Input:  an array of objects, representing a student.
  // Input2: String, the role of the selected students
  // Output: return an array of the student who have the role

  // Define our default value
  let studentRole = [];
  // Define our loop
  for (i = 0; i < students.length; i++) {
    // Accumulating   
    const student = students[i] // each element in the array
    // Select students who have a specfic role
    if (student.role === role) { // if a student has a role that matches with the role passed in
      studentRole.push(student) // Reassign the empty object's value to the object of the student
      
    } 
  }
  return studentRole// return an array of the students who have the role that matches with the argument passed in
}
const banana = filterByRole(studentsArr, "Hall Monitor")
console.log(banana)
// filterByRole(studentsArr, "Hall Monitor");
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

const apple = filterByRole(studentsArr, "Teacher's Assistant");
console.log(apple)
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

/**
 * Finds the student with the lowest GPA.
 * @param {Object[]} students - An array of objects, each representing a student.
 * @returns {Object} The student with the lowest GPA.
 * */
 function findLowestGPAStudent(students) {

  // Search for the student with the lowest GPA
  // Input: an array of objects
  // Output: an object of the student with the lowest GPA
  if (!students) { // check if any argument was passed in, if not, return {}
    return {}
  }
  // Define your default value
  let hasLowest = students[0].GPA
  // Define your loop
  for (student of students) { // checking each element in the array of objects
    // Accumulating
    if (student.GPA < hasLowest) {
        hasLowest = student
    return hasLowest
    } 
  }
}
const mango = findLowestGPAStudent(studentsArr);
console.log(mango)
// console.log(findLowestGPAStudent(studentsArr));
//> { name: "Ervin Howell", GPA: 2.9, role: "Hall Monitor" }
