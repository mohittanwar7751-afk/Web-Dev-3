use("AiMl")
// db.students.aggregate([
//     {
//         $match: { "course": "CSE" }}
//     ])

// db.students.aggregate([
//     {
//         $match:{
//             "course": "BCA",
//             "attendance": {$gt:85}}
//     }
// ])

// db.students.aggregate([
//     {
//         $match: {
//             "marks.math":{
//                 $gt:95
//             }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $group:{
//             _id: "$course",
//             NumberofStudents: {
//                 $sum: 1      // this will count the number of students in each course      
//             }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $group:{
//             _id: "$course",
//             AvgAttendance:{
//                 $avg:"$attendance"
//             }
//             }
//         }
// ])

// db.students.aggregate([
//     {
//         $group:{
//             _id: "$course",
//             MaxMathMarks:{
//                 $max: "$marks.math"     //this will give the maximum marks in math for each course
//             }
//             }
//         }
// ])


// db.students.aggregate([
//     {
//         $group:{
//             _id: "$course",
//             MinMathMarks:{
//                 $min: "$marks.math"     //this will give the minimum marks in math for each course
//             }
//             }
//         }
// ])


// db.students.aggregate([
//     {
//         $group:{
//             _id: "$course",
//             AvgMathMarks:{
//                 $avg: "$marks.math"
//             }
//         }
//     }
// ])


// db.students.aggregate([
//     {
//         $group:{
//             _id: "$city",
//             TotalStudents:{
//                 $sum: 1
//             }
//         }
//     }
// ])


db.students.aggregate([
    {
        $match: {
            "course": "CSE"
        }
    },
    {
        $group: {
            _id: null,
            AvgAttendance: {
                $avg: "$attendance"
            }
        }
            
    }
])