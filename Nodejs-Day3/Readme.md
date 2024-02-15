1. Create Mentor
--> Endpoint: POST /api/mentors
    Description: Creates a new mentor in the database.

2. Create Student
--> Endpoint: POST /api/students
    Description: Creates a new student in the database.

3. Assign Student to Mentor
--> Endpoint: POST /api/mentor/assign
    Description: Assigns a student to a mentor.

    Endpoint: POST /api/mentor/:mentorId/add-students
    Description: Adds multiple students to a particular mentor.

4. Assign or Change Mentor for a Student
--> Endpoint: PUT /api/student/:studentId/assign-mentor/:mentorId
    Description: Assigns or changes the mentor for a particular student.

5. Show All Students for a Mentor
--> Endpoint: GET /api/mentor/:mentorId/students
    Description: Retrieves all students assigned to a specific mentor.

6. Show Previously Assigned Mentor for a Student
--> Endpoint: GET /api/student/:studentId/previous-mentor
    Description: Retrieves the previously assigned mentor for a specific student.