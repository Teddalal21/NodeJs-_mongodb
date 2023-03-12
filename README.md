# Node.js CRUD Operations
This is a simple web application built with Node.js and MongoDB that demonstrates CRUD (Create, Read, Update, Delete) operations. The application allows you to create, read, update, and delete records in a MongoDB database using a web interface.

# Installation
To install and run this application, you'll need to have Node.js and MongoDB installed on your computer.

1. Clone this repository: git clone https://github.com/your-username/nodejs-crud.git
2. Install dependencies: npm install
3. Start the server: npm start
4. Open http://localhost:3000 in your web browser
# Usage
1. The application has four main routes for performing CRUD operations:

2. GET /: Display a list of all records in the database
3. GET /create: Display a form for creating a new record
4. POST /create: Create a new record in the database
5. GET /edit/:id: Display a form for editing an existing record
6. POST /edit/:id: Update an existing record in the database
7. POST /delete/:id: Delete an existing record from the database
To use the application, simply navigate to the appropriate route using your web browser. You can create new records by filling out the form on the /create page, edit existing records by clicking the "Edit" button next to a record on the home page and updating the fields in the form on the /edit/:id page, and delete records by clicking the "Delete" button next to a record on the home page.

# Contributing
Contributions are welcome! If you have any suggestions or find any bugs, please open an issue or submit a pull request.

# License
This project is licensed under the MIT License.
