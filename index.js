const express = require("express");
const app = express();

app.get("/build", (req, res) => {
  res.json({
    parts: [
      { x: 0, y: 5, z: 0 },
      { x: 10, y: 5, z: 0 },
      { x: 20, y: 5, z: 0 }
    ]
  });
});

app.listen(3000, () => {
  console.log("API running");
});
