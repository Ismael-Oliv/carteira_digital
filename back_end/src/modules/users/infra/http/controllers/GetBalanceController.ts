import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetBalanceService } from '../../../services/GetBalanceService';

export class GetBalanceController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { login } = request.body;

    const getBalanceService = container.resolve(GetBalanceService);

    const balance = await getBalanceService.get(login);

    return response.json(balance);
  }
}
