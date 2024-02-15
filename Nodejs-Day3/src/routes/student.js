import express from 'express'
import studentCtr from '../controllers/student.js'

const router = express.Router()

router.post('/create',studentCtr.createStudents)
router.post('/assignChangeMentorForStudent',studentCtr.changeMentorforStudent)
router.get('/previouslyAssignedmentor',studentCtr.getPreviousMentor)


export default router