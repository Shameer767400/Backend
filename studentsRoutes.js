import express from 'express';
import { getStudents, addStudents } from './studentsController.js';
const router = express.Router();
router.get('/students', getStudents);
router.get('/add-student', addStudents);

export default router;