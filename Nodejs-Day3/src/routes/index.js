import express from 'express'
import mentorRoutes from './mentor.js'
import studenRoutes from './student.js'

const router = express.Router()

router.get('/', (req,res)=>{

    res.status(200).send(`<h1> Welcome to our Backend of Student Mentor assign API </h>`)
})

router.use('/mentor',mentorRoutes)
router.use('/student',studenRoutes)

export default router