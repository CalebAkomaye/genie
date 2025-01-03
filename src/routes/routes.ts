import { transcribeAudio } from "../controllers/transcribe_audion";
import {
  getAllVoices,
  handleTextToSpeech,
} from "../controllers/text_to.speech";
import { Router } from "express";
import {
  explainText,
  summarizeText,
} from "../controllers/summarize_controller";

const router = Router();

router.post("/synthesize", handleTextToSpeech);
router.post("/transcribe", transcribeAudio);
router.post("/summarize", summarizeText);
router.post("/explain", explainText);
router.get("/speech", getAllVoices);

export default router;
