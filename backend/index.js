import express from "express";
import cors from "cors";

//const express = require('express');
const app = express();

app.post('/concatenate', (req, res) => {
  const { FName, LName } = req.body;
  const fullName = FName + LName;
  res.json({ fullName });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
