const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Startup Idea Validator Server Running 🚀");
});

app.get("/check", (req, res) => {
  const idea = (req.query.idea || "").toLowerCase();

  if (idea.includes("food")) {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
