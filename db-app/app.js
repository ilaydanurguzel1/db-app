"use strict";
const express = require("express");
const dbConnection = require("./helper/postgresql");

const app = express();

// check db connection
// dbConnection.getConnection((err, connection) => {
//   if (err) {
//     console.log("Database connection error: ", err);
//   } else {
//     console.log("Database connected");
//   }
// });

dbConnection.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected');
  }
});

// dbConnection.query(
//   "INSERT INTO students (name, midterm_grade, final_grade) VALUES ('Mehmet', 90, 75)",
//   (err, results, fields) => {
//     if (err) {
//       console.log("Database query error: ", err);
//     } else {
//       console.log("Data inserted successfully");
//     }
//   }
// );

app.post("/students", (req, res) => {
  const {name, midterm, final} = req.body;

  dbConnection.query("INSERT INTO students (name, midterm, final) VALUES (?, ?, ?)",
   [name, midterm, final],
   (err, results, fields) => {
    if(err){
      console.log("Database query error:", err);
    }else{
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  }
  );
})

app.get("/students", (req, res) => {
  dbConnection.query("SELECT * FROM students", (err, results, fields) => {
    if (err) {
      console.log("Database query error: ", err);
    } else {
      res.status(200).json({
        status: "success",
        data: results,
      });
    }
  });
});

app.get("/students/:id", (req, res) => {
  dbConnection.query(
    "SELECT *, (midterm_grade + final_grade) / 2 AS average FROM students WHERE id =?",
    [req.params.id],
    (err, results, fields) => {
      if(err){
        console.log("Database query error:", err);
      }else{
        if(results.length > 0){
          const average = parseFloat(results[0].average).toFixed(2);
          res.status(200).json({
            status: "success",
            data:{
              ...results[0],
              average: average },
          });
        }
    }
    });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});