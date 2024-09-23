import { Request, Response } from "express";
import { Sinner } from "../models/index";

class SinnerController {
  public async create(req: Request, res: Response): Promise<void> {
    const { sinner, room } = req.body;
    if (!sinner && !room) {
      res.status(401).json({ erro: "Insert the sinner name and the room" });
    } else {
      try {
        const response = await Sinner.create({ sinner, room });
        res.status(200).json(response);
      } catch (e: any) {
        res.send({ message: e });
      }
    }
  }

  public async list(_: Request, res: Response): Promise<void> {
    console.log("passou");
    res.send(
      await Sinner.find(
        {},
        {},
        {
          sort: { sinner: 1 },
        }
      )
    );
  }

  public async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.body;
    const response = await Sinner.findByIdAndDelete(id);
    if (response) {
      res.json(response);
    } else {
      res.json({ message: "Inexexistent" });
    }
  }

  public async updatroom(req: Request, res: Response): Promise<void> {
    const { id, room } = req.body;
    try {
      const response = await Sinner.findByIdAndUpdate(
        id,
        { room },
        {
          new: true,
          runValidators: true,
        }
      );
      if (response) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ message: "Inexexistent" });
      }
    } catch (e: any) {
      if (e.code === 11000) {
        res.status(409).send({ message: `${room} already occupied` });
      } else if (e.errors?.room) {
        res.status(400).send({ message: e.errors.room.message });
      } else {
        res.status(500).send({ message: "Server errir" });
      }
    }
  }

  public async updatesinner(req: Request, res: Response): Promise<void> {
    const { id, sinner } = req.body;
    try {
      const response = await Sinner.findByIdAndUpdate(
        id,
        { sinner },
        {
          new: true,
          runValidators: true,
        }
      );
      if (response) {
        res.json(response);
      } else {
        res.json({ message: "Innexistent" });
      }
    } catch (e: any) {
      if (e.errors?.mail) {
        res.send({ message: e.errors.sinner.message });
      } else {
        res.send({ message: e });
      }
    }
  }
}

export default new SinnerController();
