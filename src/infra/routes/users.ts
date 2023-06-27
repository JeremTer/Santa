import {Router} from 'express';
import {getUserByName, getUserProfile} from "../controller/UserController";

// Old node way
// const express = require('express');
// const Router = express.Router;

const router = Router();


router.get('/:username', getUserByName);

router.get('/:userId/profile', getUserProfile);

export default router;