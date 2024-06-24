const Course = {
    CourseName: "js in hindi",
    price:"999",
    courseInstructor : "Gaurav"
}

const {courseInstructor : instructor} = Course // extracting the value of courseInstructor from Course Object

console.log(instructor)

const navbar = ({company}) =>{

}
navbar (company = "hitesh") // destructuring 

// {
//     "name": "gaurav",
//     "coursename":"Js in hindi",
//     "price" : "free"
// }


[
    {},
    {},
    {},
    {}
]