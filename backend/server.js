const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/expenses", require("./routes/expenses"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/groups", require("./routes/groups"));

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("Accure Backend: MongoDB connected"))
.catch(err=>console.log(err));

app.get("/", (req,res)=>{
  res.send("Accure API Running");
});

const PORT = process.env.PORT || 4898;
app.listen(PORT, ()=>console.log(`Accure Engine started on port ${PORT}`));
