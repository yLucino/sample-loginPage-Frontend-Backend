import express from 'express';
import { db } from './connection/.env.js'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// API's:
app.post("/login", (req, res) => {
  const q = "SELECT * FROM login WHERE username = ? AND password = ?";
 
  db.query(q, [req.body.email, req.body.password], (err, data) => {
    if(err) return res.json("ERROR");
    if(data.length > 0) {
      // res.json("Login Successfully")
      res.json(data)
    } else {
      return res.json("No record user or password");
    };
  });

});
const port = 8081
app.listen(port, () => {
  console.log(`Listening in http://localhost:${port}/`)
});