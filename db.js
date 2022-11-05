const Pool = require('pg').Pool;

const pool = new Pool({
  user: "labber",
  password: "labber",
  database: "todo_database",
  host: "localhost",
  port: 5432
});

module.exports = pool;

// create
// INSERT INTO todo (description) VALUES ("wash car")

// read
//SELECT description FROM todo WHERE todo_id = 1

//update
//UPDATE todo SET description = 'wash clothes' WHERE todo_id = 1

//delete
//DELETE FROM todo WHERE todo_id = 1