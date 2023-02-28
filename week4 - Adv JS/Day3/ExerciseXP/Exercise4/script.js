// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// 1. Using the filter() method, create a new array, containing the students that passed the course.

const passed = students.filter(elem =>  elem.isPassed === true);

// Bonus : Chain the filter method with a forEach method, to congratulate the students 
//  with their name and course name (ie. “Good job Jenner, you passed the course in 
// Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

students.filter(elem =>  elem.isPassed === true).forEach( elem => {
    console.log(`Good job ${elem.name}, you passed the course in ${elem.course}`);
})

