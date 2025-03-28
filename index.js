const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect("mongodb+srv://aswin_murali:Aswinmurali@cluster0.4xrsk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    //      useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => console.log(" Connected to MongoDB"))
  .catch(err => console.error(" Database connection error:", err));

// Import routes
const itemRoutes = require('./routes/ItemRoutes');
app.use("/ItemInserting",itemRoutes );

// Start server
app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});

