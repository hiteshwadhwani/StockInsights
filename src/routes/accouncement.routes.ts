import express, { Request, Response, Router } from "express";
import {getAccouncementbyIdContoller, getAccouncementsController, getCriticalAccouncementByIdController, getCriticalAccouncementsController, getPastAnnouncementsController} from '../controller/announcement.controller'


const router: Router = express.Router()

//API to find announcements of a company(SCRIP_CD) or multiple companies.
router.get('/:id?', getAccouncementbyIdContoller)
router.post("/", getAccouncementsController)


//API to find announcements over a specified period (start & end dates) or announcements of a company/group of companies over a period.
// getAccouncementbyIdContoller will handle start and end date and query for single company with id
// getAccouncementsController will handle start and end date and query for multiple companies

//API to find all the critical announcements or critical announcements of a list of companies over a given period.
router.get("/critical/:id?", getCriticalAccouncementByIdController)
router.post("/critical", getCriticalAccouncementsController)


//API to retrieve announcements from the past 1-2 days in descending time order.
router.get('/past-accouncements', getPastAnnouncementsController)

export default router