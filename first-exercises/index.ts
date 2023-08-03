import express from "express";
import { bmiCalculator } from "./bmiCalculator";
const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack");
});

app.get("/bmi", (req, res) => {
  const args = req.query as { height?: string; weight?: string };
  if (!args.height || !args.weight) {
    res.status(400).send({ error: "Malformatted parameters." });
    return;
  }
  try {
    const bmi: string = bmiCalculator(args.height, args.weight);
    res.send({ weight: args.weight, height: args.height, bmi: bmi });
  } catch (error) {
    res.status(400).send({ error: "Malformatted parameters." });
  }
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
