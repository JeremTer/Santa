import {Router} from 'express';
import {getUserByName, getUserProfile, sendReminder} from "../controller/UserController";

const router = Router();

router.get('/:username', getUserByName);
router.get('/:userId/profile', getUserProfile);
router.post('/reminder', sendReminder);

export default router;