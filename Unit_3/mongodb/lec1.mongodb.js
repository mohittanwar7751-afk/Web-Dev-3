use("AiMl")
db.createCollection("students")

db.students.insertOne({
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    gpa: 3.5,
    enrolled: true
})