import { Router } from "express";
import authorize from "../middlewares/auth-middleware.js";
import {
  getAllSubscriptions,
  getSubscriptionById,
  createSubscription,
  updateSubscription,
  deleteSubscription,
  cancelSubscription,
  getUserSubscriptions,
  getUpcomingRenewal,
} from "../controllers/subscription-controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/upcoming-renewal", authorize, getUpcomingRenewal);
subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.get("/", getAllSubscriptions);
subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.get("/:id", getSubscriptionById);
subscriptionRouter.put("/:id", authorize, updateSubscription);
subscriptionRouter.delete("/:id", authorize, deleteSubscription);
subscriptionRouter.post("/:id/cancel", authorize, cancelSubscription);

export default subscriptionRouter;
