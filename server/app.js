const express = require('express'); 
const cors = require("cors"); 
const session = require('express-session');

require("dotenv").config();

const app = express()
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000"], //has to be changed in production
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(
  session({
    key: "user",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      expires: 86400000 // 1 day
    }
  })
);

/* Backend main page */
app.get("/", (req, res) => { 
  return res.json("Backend server");

})

/* Routes */
const authRouter = require('./routes/authRouter');
app.use('/auth', authRouter);

/* Application port*/ 
app.listen(process.env.PORT, () => {      
    console.log("Backend is on port " + process.env.PORT);
})