import { Request, Response } from "express";

import {getAccouncementbyIdService, getAccouncementsService, getCriticalAccouncementByIdService,
    getCriticalAccouncementsService, getPastAnnouncementsService} from '../services/accouncement.service'

const getAccouncementbyIdContoller = (req: Request, res: Response) => getAccouncementbyIdService(req, res)
const getAccouncementsController = (req: Request, res: Response) => getAccouncementsService(req, res)
const getCriticalAccouncementByIdController = (req: Request, res: Response) => getCriticalAccouncementByIdService(req, res)
const getCriticalAccouncementsController = (req: Request, res: Response) => getCriticalAccouncementsService(req, res)
const getPastAnnouncementsController = (req: Request, res: Response) => getPastAnnouncementsService(req, res)

export {getAccouncementbyIdContoller, getAccouncementsController, getCriticalAccouncementByIdController, getCriticalAccouncementsController, getPastAnnouncementsController}