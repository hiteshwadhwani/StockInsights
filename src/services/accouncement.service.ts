import { Request, Response } from "express";

// get the announcemts by company id
const getAccouncementbyIdService = (req: Request, res: Response) => {
  const id = parseInt(req.params["id"]);

  if (!id) {
    return res.status(400).json({ msg: "Id field is missing" });
  }

  const start = req.query["start"];
  const end = req.query["end"];

  if (start && !end) {
    return res.status(400).json({ msg: "Invalid query" });
  }
  if (!start && end) {
    return res.status(400).json({ msg: "Invalid Query" });
  }

  console.log({ start, end });
  res.status(200).json({ msg: "all good" });
};

const getAccouncementsService = (req: Request, res: Response) => {};
const getCriticalAccouncementByIdService = (req: Request, res: Response) => {};
const getCriticalAccouncementsService = (req: Request, res: Response) => {};
const getPastAnnouncementsService = (req: Request, res: Response) => {};

export {
  getAccouncementbyIdService,
  getAccouncementsService,
  getCriticalAccouncementByIdService,
  getCriticalAccouncementsService,
  getPastAnnouncementsService,
};
