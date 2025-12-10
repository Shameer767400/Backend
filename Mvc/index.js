import express from 'express';
import studentRoutes from './studentsRoutes.js';
import getStudents from './studentsController.js';
const app = express();
app.use(express.json());
app.get('/getuser', getStudents);
app.use('/students', studentRoutes);
app.listen(3000, () => {
    console.log('Server running on port 3000');
});