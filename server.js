const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Startup Idea Validator Server Running 🚀");
});

app.post("/check", (req, res) => {
  const idea = req.body.idea || "";

  if (idea.toLowerCase().includes("food")) {
    res.json({
      exists: true,
      message: "Similar startup exists",
      suggestion: "Add niche audience or subscription model"
    });
  } else {
    res.json({
      exists: false,
      message: "Idea looks unique",
      suggestion: "Validate with real users"
    });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
