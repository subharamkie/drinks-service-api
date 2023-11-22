import Express from "express";
import * as coffeeService from "../services/coffee_service";

export const getCoffee = async (
  req: Express.Request<
    object,
    object,
    object,
    { coffeeName: string | undefined }
  >,
  res: Express.Response
) => {
  const coffeeName = req.query.coffeeName;
  const coffee = coffeeService.getCoffee(coffeeName);
  res.json(coffee).status(200);
};
