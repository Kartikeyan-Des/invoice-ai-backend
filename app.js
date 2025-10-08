
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connectDB } = require("./config/db");


// Route Imports
const invoiceRoutes = require("./routes/invoiceroutes");


// App Init & Middleware

const app = express();
app.use(cors());
app.use(express.json());


connectDB();


//API Routes

app.use("/api/invoices", invoiceRoutes);


app.get("/", (req, res) => {
  res.send("Invoice AI Backend ✅ running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
