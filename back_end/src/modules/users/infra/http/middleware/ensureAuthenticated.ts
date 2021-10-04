import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import Auth from '../../../../../config/auth';
import { AppError } from '../../../../shared/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const { token } = request.headers;

  if (!token) {
    throw new AppError('Token not found', 500);
  }

  const decoded = verify(token as string, Auth.jwt.secret);
  const { sub } = decoded as ITokenPayload;

  request.body.user = {
    id: sub,
  };

  return next();
}
