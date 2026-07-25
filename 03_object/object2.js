const course = {
    courseName: "JS Tutorial",
    price: "99",
    courseInstructor: "Sudhir"
}
// course.courseInstructor

const {courseInstructor : instructor} = course      // : instructor name change method
// console.log(courseInstructor);                   // gives => Sudhir
console.log(instructor);                            // gives => Sudhir



