import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { MakeTransactionService } from '../../../services/MakeTransactionService';

export class MakeTransactionController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { login_destino, login_origem, valor_transferido } = request.body;
    const makeTransactionService = container.resolve(MakeTransactionService);
    const transaction = await makeTransactionService.execute({
      login_destino,
      login_origem,
      valor_transferido,
    });

    return response.json(transaction);
  }
}
