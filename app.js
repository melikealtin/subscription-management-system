import express from "express";

import { PORT } from "./config/env.js";

import userRouter from "./routes/user-router.js";
import authRouter from "./routes/auth-router.js";
import subscriptionRouter from "./routes/subscription-router.js";

const app = express();

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/subscriptions", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Hellooo");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
