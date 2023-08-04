import express from "express";
const app = express();
import cors from "cors";
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/43909#issuecomment-1168194740
app.use((cors as (options: cors.CorsOptions) => express.RequestHandler)({}));
app.use(express.json());

const PORT = 3001;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
