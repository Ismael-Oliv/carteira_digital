import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListTransactionsService } from '../../../services/ListTransactionsService';

export class ListTransactionsController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { login } = request.body;
    const listTransactionsService = container.resolve(ListTransactionsService);
    const transactions = await listTransactionsService.execute(login);

    return response.json(transactions);
  }
}
