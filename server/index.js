const express = require("express")
const cors = require("cors")

const PORT = process.env.PORT || 5000;
const app = express()

app.use(express.json())
app.use(cors({ origin: ["http://localhost:8080", "*"], credentials: true }));


app.listen(PORT, console.log(`Server started on port ${PORT}`))