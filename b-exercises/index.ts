import express from "express";
import { bmiCalculator } from "./bmiCalculator";
import {
  calculateExercises,
  CalculatedExercisesValues,
} from "./exerciseCalculator";
const app = express();
app.use(express.json());

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

app.post("/exercises", (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
  const body: any = req.body;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (!body.dailyEx || !body.target) {
    return res.status(400).json({ error: "Parameters missing" });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const target: number = Number(body.target);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  const dailyEx: number[] = body.dailyEx.map((el: number) => Number(el));
  if (dailyEx.filter((el: number) => isNaN(el)).length !== 0 || isNaN(target)) {
    return res.status(400).json({ error: "Malformatted parameters" });
  }

  const result: CalculatedExercisesValues = calculateExercises(dailyEx, target);

  res.json(result);
  return;
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
