import { Router } from "express";

const authRouter = Router();

authRouter.post("/login", (req, res) => {
  res.send({ body: { title: "Login" } });
});

authRouter.post("/register", (req, res) => {
  res.send({ body: { title: "Register" } });
});

authRouter.post("/logout", (req, res) => {
  res.send({ body: { title: "Logout" } });
});

export default authRouter;
