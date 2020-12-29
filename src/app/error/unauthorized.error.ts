import { HttpError } from './http.error';

export class UnauthorizedError extends HttpError {
  constructor(errors?: string[]) {
    super(401, 'unauthorized', errors);
  }
}
