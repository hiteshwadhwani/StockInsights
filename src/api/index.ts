import express, { Router } from 'express'
import accouncementRoutes from '../routes/accouncement.routes'

const router: Router = express.Router()

router.use('/accouncement', accouncementRoutes)

export default router
