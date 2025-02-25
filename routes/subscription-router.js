import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ body: { title: "Get all subscriptions" } });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ body: { title: "Get subscription details" } });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ body: { title: "Create new subscription" } });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ body: { title: "Update subscription" } });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ body: { title: "Delete subscription" } });
});

subscriptionRouter.post("/:id/cancel", (req, res) => {
  res.send({ body: { title: "Cancel subscription" } });
});

subscriptionRouter.get("/upcoming-renewal", (req, res) => {
  res.send({ body: { title: "Get upcoming renewal" } });
});

export default subscriptionRouter;
