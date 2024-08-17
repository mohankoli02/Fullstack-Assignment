import express from "express";
import { getCards, getSingleCard, postCard } from "../controllers/card.controller.js";
const router = express.Router();

router.post('/cards', postCard);
  
router.get('/cards', getCards);
  
router.get('/cards/:title', getSingleCard);
  
export default router;