import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ body: { title: "Get all uers" } });
});

userRouter.get("/:id", (req, res) => {
  res.send({ body: { title: "Get user details" } });
});

userRouter.post("/", (req, res) => {
  res.send({ body: { title: "Create new user" } });
});

userRouter.put("/:id", (req, res) => {
  res.send({ body: { title: "Update user " } });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ body: { title: "Delete user" } });
});

export default userRouter;
